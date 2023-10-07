const slides = document.querySelectorAll(".slide")
let counter = 0;

slides.forEach( (slide, index) => {
      slide.style.left  = `${index * 100}%`
})

const slideImage = () => {
    slides.forEach( (slide) => {
     slide.style.transform = `translateX(-${counter * 100}% )`
    })
}


const changeSlide = (direction) => {
    if (direction === 'next') {
      counter++;
    } else if (direction === 'pre') {
      counter--;
    }
  
    // Ensure the counter stays within valid bounds
    if (counter < 0) {
      counter = slides.length - 1;
    } else if (counter >= slides.length) {
      counter = 0;
    }
  
    slideImage();
  };
  
  const goNext = () => changeSlide('next');
  const goPre = () => changeSlide('pre');
  