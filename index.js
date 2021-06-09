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


