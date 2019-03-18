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