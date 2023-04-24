function imgSlider(vasos){
    document.querySelector('.starbucks').src = vasos;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    const footer = document.querySelector('.footer');
    const colorLogo = document.querySelector('.colorLogo');
    const learn = document.querySelector('.learnMore');
    circle.style.background = color;
    footer.style.background = color;
    learn.style.background = color;
    colorLogo.style.color = color;
}
