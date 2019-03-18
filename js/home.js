 $(function() {

     $('.home-banner').find('div').mouseover(function(params) {
         $(this).find('span').css('color', 'white');
     });
     $('.home-banner').find('div').mouseout(function(params) {
         $(this).find('span').css('color', 'gray');
     });


     var i = 0;
     var banners = ['url(images/banner1.jpg)', 'url(images/banner2.jpg)', 'url(images/banner3.jpg)', 'url(images/banner4.jpg)', 'url(images/banner5.jpg)'];
     $('.home-banner-left').click(function(params) {
         $('.banner-nav').find('div').eq(i).addClass('white').removeClass('blue');
         i = (i + 4) % 5;
         //  console.log(banners[i])
         $('#home-banner').css('background-image', banners[i])
         $('.banner-nav').find('div').eq(i).addClass('blue').removeClass('white');
     });

     $('.home-banner-right').click(function(params) {
         $('.banner-nav').find('div').eq(i).addClass('white').removeClass('blue');
         i = (i + 1) % 5;
         // console.log(banners[i])
         $('#home-banner').css('background-image', banners[i]);
         $('.banner-nav').find('div').eq(i).addClass('blue').removeClass('white');
     });

     $('.banner-point').click(function(params) {
        $('.banner-nav').find('div').eq(i).addClass('white').removeClass('blue');
        i = $(this).attr('name');
        $('.banner-nav').find('div').eq(i).addClass('blue').removeClass('white');
        $('#home-banner').css('background-image', banners[i]);
     })
     
     setInterval(function() {
         $('.banner-nav').find('div').eq(i).addClass('white').removeClass('blue');
         i = (i + 1) % 5;
         $('.banner-nav').find('div').eq(i).addClass('blue').removeClass('white');
         //    console.log(banners[i])
         $('#home-banner').css('background-image', banners[i])
     }, 8000);


     function schedule_show() {
         var customer = 0,
             event = 0,
             awards = 0;
         setInterval(function() {
             if (customer < 652) {
                 //14.5
                 $('#customers').text(customer++);
             }
         }, 9);
         setInterval(function() {
             // 18.2
             if (event < 822) {
                 $('#events').text(event++);
             }
         }, 7);
         setInterval(function() {
             if (awards < 43) {
                 $('#awards').text(awards++);
             }

         }, 120);
     }
     var isshow = false;
     $(window).scroll(function() {
         if ($('.w3l_schedule_bottom_right_grid1 .counter')) {
             var a = $('.w3l_schedule_bottom_right_grid1 .counter').offset().top;
             // console.log('1:' + window.isshow);
             if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
                 if (isshow === false) {
                     //    console.log('我要计算' + " " + isshow);
                     isshow = true;
                     schedule_show();
                     //    console.log('2' + isshow)
                 }
             } else {
                 isshow = false;
             }
             // console.log(a + "  " + $(window).scrollTop() + ' ' + $(window).height())

         }
     });

     function hideProduct() {
         $('.product').each(function(params) {
             $(this).removeClass("active").addClass('hide').removeClass('red');

         });
         $('.new_arrivals_agile_w3ls_info .title').each(function(params) {
             $(this).removeClass("red");
         });
     }

     $('.new_arrivals_agile_w3ls_info .title').click(function name(params) {
         var name = $(this).attr('name');
         hideProduct();
         $(this).addClass('red');
         $('.' + name + ':first').removeClass('hide').addClass('active');
     })

     $('.resp-item').click(function(params) {
         var name = $(this).attr('name');
         $('.resp-table-content').each(function(params) {
             $(this).addClass('hide').removeClass('active');
         })
         $('.' + name).removeClass('hide').addClass('active');
         $('.resp-item').each(function(params) {
             $(this).removeClass('red').addClass('white');
         });
         $(this).removeClass('white').addClass('red');

     });
 });