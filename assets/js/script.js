const iconbox = document.querySelector('.iconbox');
const menulist = document.querySelector('.menulist');

iconbox.addEventListener('click', function () {
    menulist.classList.toggle('show');
    document.body.classList.toggle(".overflowhidden");
});

const mybutton = document.querySelector(".elipsBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".arrowbtnprev",
    prevArrow: ".arrowbtnnext",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }
        },

    ]
});