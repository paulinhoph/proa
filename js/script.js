// Navegação da página
$('.navbar__link').click(function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

//Display
function display(value){
	$('.display__container').removeClass("active");
	$('#'+value).addClass("active");
	// $('#'+value).addClass("active").animate({
	// 	top: '0'
	// });
}

//Close
$('.close').click(function(){
	$('.display__container').removeClass("active");
});