const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const menuClose = document.querySelector('.menu-close');
const features = document.querySelector('.features');
const openFeature = document.querySelector('.arrow-up');
const closeFeature = document.querySelector('.arrow-down');
const navFeatures = document.querySelector('.nav-features');
const company = document.querySelector('.company');
const openCompany = document.querySelector('.nav-company');
const openArrow = document.querySelector('.openarrowup');
const closeArrow = document.querySelector('.closearrowdown');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})
menuClose.addEventListener('click', () => {
    nav.classList.remove('open-nav');
}) 
features.addEventListener('click', () => {
    navFeatures.classList.add('nav-feature');
    openFeature.classList.add('arrowup');
    closeFeature.classList.add('arrowdown');
})
navFeatures.addEventListener('click', () => {
    navFeatures.classList.remove('nav-feature');
    openFeature.classList.remove('arrowup');
    closeFeature.classList.remove('arrowdown');
})
company.addEventListener('click', () => {
    openCompany.classList.add('close-company');
    openArrow.classList.add('openarrow-up');
    closeArrow.classList.add('closearrow-down');
})
openCompany.addEventListener('click', () => {
    openCompany.classList.remove('close-company');
    openArrow.classList.remove('openarrow-up');
    closeArrow.classList.remove('closearrow-down');
})