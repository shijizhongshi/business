$(document).ready(function() {
	// 轮播
	var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
	
	
	$(".close-btn").click(function(){
		$(".dialog1").removeClass("active");
	});
	
	// 点击立即购买
	$(".buys").click(function(){
		$(".dialog2").removeClass("active");
		$(".code-boxs").addClass("active");
	});
	
	// 验证码弹框
	$(".code-close").click(function(){
		$(".code-boxs").removeClass("active");
	});



	// 地址下拉
	
	$(".complete").click(function(){
		$(".coupons").removeClass("active");
	});
});