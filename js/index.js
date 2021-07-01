let hero_slide = document.querySelector('#hero-slide');

let hero_slide_items = hero_slide.querySelectorAll('.slide');

let hero_slide_index = 0;

let hero_slide_play = true;

let hero_slide_control_items = hero_slide.querySelectorAll('.slide__control__item');

let slide_prev = hero_slide.querySelector('.slide__prev');
let slide_next = hero_slide.querySelector('.slide__next');

let nav = document.querySelector('.nav__header');

showSlide = (index) => {
    hero_slide.querySelector('.slide.active').classList.remove('active');
    hero_slide.querySelector('.slide__control__item.active').classList.remove('active');
    hero_slide_items[index].classList.add('active');
    hero_slide_control_items[index].classList.add('active');
}

nextSlide = () => {
    hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
    showSlide(hero_slide_index);
}

prevSlide = () => {
    hero_slide_index = hero_slide_index + 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1;
    showSlide(hero_slide_index);
}

setTimeout(() => hero_slide_items[0].classList.add('active'), 200);


//nav scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('header__scroll');
    } else {
        nav.classList.remove('header__scroll');
    }
})

//auto slide
// setInterval(() => {
//     if(!hero_slide_play) return 
//     nextSlide()
// }, 5000);

slide_next.addEventListener('click', () => nextSlide());
slide_prev.addEventListener('click', () => prevSlide());

//add event to slide select
hero_slide_control_items.forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index));
})


// pause slide when user hover on slider.

hero_slide.addEventListener('mouseover', () => hero_slide_play = false);

hero_slide.addEventListener('mouseleave', () => hero_slide_play = true);


document.querySelector('.search').onclick = () => {
    document.querySelector('.search__input').style.display ='block';
    document.querySelector('.user__menu').classList.add('search__after');
}
document.querySelector('.search__input').onmouseleave = () => {
    document.querySelector('.search__input').style.display ='none';
    document.querySelector('.user__menu').classList.remove('search__after');
}




