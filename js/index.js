let hero_slide = document.querySelector('#hero-slide');

let hero_slide_items = hero_slide.querySelectorAll('.slide');

let hero_slide_index = 0;

let hero_slide_play = true;

showSlide = (index) => {
    hero_slide.querySelector('.slide.active').classList.remove('active');
    hero_slide_items[index].classList.add('active');
}

nextSlide = () => {
    hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
    showSlide(hero_slide_index);
}

setTimeout(() => hero_slide_items[0].classList.add('active'), 200);

// auto slide

setInterval(() => {
    if(!hero_slide_play) return 
    nextSlide()
}, 2000);