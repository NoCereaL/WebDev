

$(document).ready(function(){




	// Own JS Here
    $("#button").click(function(){

        $("nav").toggleClass("mobinav");

    });
    

	// Social Feeds - create a div with a class social-feed-container for the feeds to be dropped into.
	$('.social-feed-container').socialfeed({
        twitter: {
            accounts: ['@google'],
            limit: 5,
            consumer_key: 'kddtwnOPwVTIe3UYB3DpSB9lc',
            consumer_secret: '0AhUJ1Kyq8KEjxjI1J0Jnifvk70WnTQEFVfe56bNTN0haStv9n',
        },
        facebook:{
            accounts: ['@googleuk','!googleuk'],
            limit: 5,
            access_token: '1860021534272528|be45895406d41a76cda19da60a836ba6'
        },
        length: 200,
        show_media: true,
        template : "social-template.html",

        callback: function() {
            // Do Something when all posts are pulled (optional but useful for fixed heights etc)
        }
    });

    $(".banner").vegas({
             transition: 'fade2',
             transitionDuration: 1000,
             delay: 4000,          
           
        slides: [
            { src: "/media/images/banner1.jpg"},
            { src: "/media/images/banner2.jpg"},
            { src: "/media/images/banner3.jpg"}
        ]
    });

    $(".banner2").vegas({
             transition: 'fade2',
             transitionDuration: 1000,
             delay: 4000,          
           
        slides: [
            { src: "/media/images/banner1.jpg"},
            { src: "/media/images/banner2.jpg"},
            { src: "/media/images/banner3.jpg"}
        ]
    });

});

            $(window).scroll(function() {
                                if ($(this).scrollTop() > 500){  
                                $('.scrollToContent').css({opacity: '0'});
                                
                                 } else {

                                $('.scrollToContent').css({opacity: '1'});
                                
                                }
                });


                    $('a[href*=\\#]:not([href=\\#])').click(function() {
                      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                          $('html,body').animate({
                            scrollTop: target.offset().top +1
                          }, 1500);
                          return false;
                        }
                      }
                    });