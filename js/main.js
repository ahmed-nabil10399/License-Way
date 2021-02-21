$(document).ready(function () {

    //   add class active >> nav>a >> links
    $(".navbar ul li a").addEventListener('click', function () {

        // e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active')

    });

    // $(".navbar .navbar-nav li a").click(function () {
    //     if (this.href("this.html").pop() == window.location.search) {
    //       $(this).addClass("active");
    //     }
    // });

    

    $('.instructions .card-box-header a').click(function () {
      $(this).parent().toggleClass('active').siblings().removeClass('active')
    })

    // scroll window >> nav 
    $(window).scroll(function () {
            if($(window).scrollTop() > 200) {

                $('nav.navbar').addClass("bac");
                $('.navbar .navbar-nav').removeClass('colors-bg');

            } else {

                $('nav.navbar').removeClass("bac");
            };

            // add background-color for navbar-nav
            if($(window).scrollTop() >= 200) {
                $('.navbar .navbar-nav').removeClass('colors-bg')

            } else {
                $('.navbar .navbar-nav').addClass('colors-bg')
            };
    });
    
    // rotaet span
    $('.navbar .showLinks').click( () => {
        $('.navbar .showLinks span').toggleClass('span-roteate');
    })

    // /////////////////////////////////////
    // /////////////////////////////////////
    // /////////////////////////////////////




})