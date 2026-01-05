$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });


    $('nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top 
            }, 1000); 
        }
    });

    $('#up').on('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66% 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const scrollTopBtn = $('#up');
    const headerHeight = $('header').outerHeight();

    function checkScrollPosition() {
        const scrollPosition = $(window).scrollTop();
        if (scrollPosition > headerHeight) {
            scrollTopBtn.addClass('active');
        } else {
            scrollTopBtn.removeClass('active');
        }
    }

    $(window).on('scroll', checkScrollPosition);
    checkScrollPosition();
});