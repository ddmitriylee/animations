(() => {
    const tl = gsap.timeline({paused: true});
    window.tl = tl;

    function animationBurger() {
        tl.from('.menu', {opacity: 0, duration: 0.4}, 0);
        tl.from('.menu__top', { y: -100, opacity: 0, duration: 0.8}, 0);
        tl.from('.menu__container', { y: 100, opacity: 0, duration: 0.8 }, 0);
        tl.from('.menu__left', {y: 100, opacity: 0, duration: 0.5});
        tl.from('.social', {y: 100, opacity: 0, duration: 0.5});
        tl.from('.menu__right', {y: 100, opacity: 0, duration: 0.5}, "<");
    }

    function animationLoad() {
        gsap.from('.hero__title', { y: 70, opacity: 0, duration: 1.25, delay: 0.2 });
        gsap.from('.hero__btn', { y: 70, opacity: 0, duration: 1, delay: 0.2 });
        gsap.from('.hero__descr', { opacity: 0, duration: 1, delay: 1 });
        gsap.from('.photo__1', { opacity: 0, duration: 0.5, delay: 1.4, scaleX: 0.7, scaleY: 0.7 });
        gsap.from('.photo__2', { opacity: 0, duration: 0.5, delay: 1.8, scaleX: 0.7, scaleY: 0.7 });
        gsap.from('.photo__3', { opacity: 0, duration: 0.5, delay: 2.1, scaleX: 0.7, scaleY: 0.7 });
        gsap.from('.photos__author', { opacity: 0, duration: 0.5, delay: 2.1 });

        animationBurger();
    }

    document.addEventListener('DOMContentLoaded', animationLoad);

    const burger = document.querySelector('.burger');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        menu.classList.add('menu--open');
        tl.play();
    })

    close.addEventListener('click', function () {
        timeout = setTimeout(function () {
            menu.classList.remove('menu--open');
        }, 2000);

        if (!tl.reversed()) {
            tl.reverse();
        } else {
            tl.play();
        }
    })
})()