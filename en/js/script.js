jQuery(document).ready(function(){
	// 타이틀 변환
	var homeTile = jQuery('title').text();
	var replaceTitle = jQuery('.sub-title h2').text();
	arrTitle = jQuery('.sub-title h2').text();
	if(replaceTitle==''){
	}else{
		document.title=arrTitle + " | " + homeTile;
	};

	// mobile navigation
	$(".nav-menu").html($("#gnb").html());
	$(".btn-m-menu").click(function(e){		
		e.preventDefault();		
		if($("html").hasClass("menu-opened")){
			$("html").removeClass("menu-opened");
		}else{
			$("html").addClass("menu-opened"); 
		}
	});
	$(".mobile-overlay, .mobile-navigation .close").click(function(e){		
		e.preventDefault();		
		$("html").removeClass("menu-opened");
	});

	// 메뉴
	$(".mobile-navigation nav > ul > li > a").click(function(){
		t = $(this).parent('li');
		if (t.hasClass('active')) {
			t.removeClass('active');
			t.find('.submenu').slideUp('fast');
		}else {
			$(".mobile-navigation nav li").removeClass('active');
			t.addClass('active');
			if(t.find('div').hasClass('submenu')){
				$(".mobile-navigation nav .submenu").slideUp('fast');			
				t.find('.submenu').slideDown('fast');
				return false;
			}	
		}
	});

	// 텝
	jQuery(".tab-content").hide();
	jQuery("ul.tabs>li:first").addClass("active").show(); 	
	jQuery(".tab-content:first").show();

	jQuery("ul.tabs>li").click(function(e) {
		e.preventDefault();

		jQuery("ul.tabs>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tab-content").hide();		
		
		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).fadeIn();
		return false;
	});

	// fancybox
	$(".pop_privacy").fancybox({
		padding     : 0,
		margin      : 10,
		fitToView	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'ajax',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	$(".pop_email").fancybox({
		padding     : 0,
		margin      : 10,
		fitToView	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'ajax',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	jQuery("a.zoom").fancybox({
		padding     : 0,
		margin      : 20,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	// main fullpage
	if(jQuery('body').hasClass('main')){
		$('#fullpage').fullpage({
			navigation: true,
			menu: '#rightMenu',
			//scrollingSpeed : 1000,
			responsiveWidth: 1025,
			anchors: ['home', 'introduce', 'product', 'contactus', 'mainfooter']
		});
		/*var footPadding = jQuery("#footer").outerHeight()
		jQuery(".sec-aboutus .fp-tableCell").css("padding-bottom",footPadding-1);*/

		$('.toTop').on('click',function(e){
			e.preventDefault();
			$('#fp-nav').find('li').find('a').eq(0).trigger('click');

		});
	}

	// 메인 비주얼 슬라이드
	var $mainVisualItem = $(".main-visual .items");

	$mainVisualItem.on('init', function(event, slick, currentSlide) {
		$(".main-visual-item").eq(0).addClass("active-item");
	});
	$mainVisualItem.on('beforeChange', function(event, slick, currentSlide, nextSlide) {	
		$(".main-visual-item").removeClass("active-item");
		$(this).find(".main-visual-item").eq(nextSlide).addClass("active-item");
	});

	// 메인 비주얼 슬라이드
	$mainVisualItem.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots:false,
		autoplay: true,
		speed:2000,
		infinite:true,
		autoplaySpeed: 4000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		zIndex:1,
		responsive: [
			{
			breakpoint: 700,
				settings: {
					arrows: false,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	// 맨위로
	jQuery('.go-top').click(function() {
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
	});

	// lnb
	if($(window).width()<=900){
		var lnbIndex = $(".lnb li.active").index();
		var lnbSwiper = new Swiper('.lnb .swiper-container', {
			slidesPerView: 'auto',
			paginationClickable: true,
			preventClicks: false,
			initialSlide: lnbIndex
		});
		$('.lnb li a').focus(function() {
			lnbSwiper.slideTo( $(this).parent("li").index() );
		});
	};

	if($(window).width()<=700){
		var tabIndex = $(".sub-tab li.active").index();
		var tabSwiper = new Swiper('.sub-tab .swiper-container', {
			slidesPerView: 'auto',
			paginationClickable: true,
			preventClicks: false,
			initialSlide: tabIndex
		});
		$('.sub-tab li a').focus(function() {
			tabSwiper.slideTo( $(this).parent("li").index() );
		});
	};

	$(".top-lang").each(function(){
		var $this = $(this);
		$this.click(function(){
			if(!$this.hasClass("active")){
				$(".top-lang").removeClass("active");
				$(".f-options").slideUp(100);
				$this.addClass("active");
				$this.find(".f-options").slideDown(100);
			}else{
				$this.removeClass("active");
				$this.find(".f-options").slideUp(100);
			}			
		});
	});
	$(document).click(function(e){
		if(!$(event.target).closest(".top-lang").length){
			$(".top-lang").removeClass("active")
			$(".top-lang .f-options").slideUp(100);
		};		
	});

	// usemap
	$('img[usemap]').rwdImageMaps();

	// datepicker
	$(".datepicker").datepicker({
		dateFormat: 'yy-mm-dd' //Input Display Format 변경
		,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시         
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
		,prevText: "이전달"
		,nextText: "다음달"
		,buttonText: "날짜선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
	}); 

	$(".datepicker2").datepicker({
		dateFormat: 'yy-mm-dd' //Input Display Format 변경
		,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시    
		,changeMonth: true //월 선택 표시
		,changeYear: true //년도 선택 표시
		,minDate: '-100y' // 현재날짜로부터 100년이전까지 년을 표시
		,yearRange: 'c-100:c+10' // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
		,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		,prevText: "이전달"
		,nextText: "다음달"
		,buttonText: "날짜선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
	}); 

	// input
	$("input[type=tel], input[numberOnly]").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

});	//End