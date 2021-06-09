AOS.init();

const development = document.querySelector('.development');
const UIdiv = document.querySelector('.UI');

development.addEventListener('mouseover', e => {
    development.style.boxShadow = 'none';
    development.style.transform = 'translate(4px,4px)';
    e.preventDefault();

})

development.addEventListener('mouseout', e=>{
    development.style.boxShadow = '0px 8px 20px rgba(196,196,196,0.69)';
    development.style.transform = 'translate(-4px,-4px)';

    e.preventDefault();
})

UIdiv.addEventListener('mouseover', e => {
    UIdiv.style.boxShadow = 'none';
    UIdiv.style.transform = 'translate(-4px,4px)';

    e.preventDefault();UIdiv

})

UIdiv.addEventListener('mouseout', e=>{
    UIdiv.style.boxShadow = '0px 8px 20px rgba(196,196,196,0.69)';
    UIdiv.style.transform = 'translate(4px,-4px)';

    e.preventDefault();
})





// const scrollElements = document.querySelectorAll(".pro1");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => { 
//   handleScrollAnimation();
// });
