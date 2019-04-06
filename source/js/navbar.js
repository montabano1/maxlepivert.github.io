
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(o).i(4(){$("p").q(\'<r t="u" m="9/3-6-0.9"/>\');s a="";$("#3-0").c(4(){$("#3-6-0 #0").g()});$(h).f(4(){$("#3-6-0 #0").j("k")});$("#0 a.l").c(4(){d(a!=""){$("#"+a).n("a").e("7");$("#"+a).b("8")};d(a==$(1).5("2")){$("#"+$(1).5("2")).b("8");$(1).e("7");a=""}v{$("#"+$(1).5("2")).w("8");a=$(1).5("2");$(1).x("7")};y z})});',36,36,'menu|this|name|responsive|function|attr|admin|downarrow|fast|css||slideUp|click|if|removeClass|resize|slideToggle|window|ready|removeAttr|style|submenu|href|prev|document|head|append|link|var|rel|stylesheet|else|slideDown|addClass|return|false'.split('|'),0,{}))

$('#menu2').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	prependTo:'#demo2'
});

$('.dropdownn').hover(function() {
	$('.dropdownn-content').css("display", "flex");
	$('.dropdownn-content').css("flex-direction", "row");
	$('.dropdownn-content').css("list-style", "none");
}, function() {
	$('.dropdownn-content').hide();
});
$('.dropdownnFAQ').hover(function() {
	$('.dropdownn-contentFAQ').css("display", "flex");
	$('.dropdownn-contentFAQ').css("flex-direction", "row");
	$('.dropdownn-contentFAQ').css("list-style", "none");
}, function() {
	$('.dropdownn-contentFAQ').hide();
});

function showFAQ() {
	$('.postheader').hide();
	$('.products-all').hide();
	$('.aboutusmenucontainer').show();
	$('.meettheteam').hide();
	$('.faq').show();
}
function showMEET() {
	$('.postheader').hide();
	$('.products-all').hide();
	$('.aboutusmenucontainer').show();
	$('.faq').hide();
	$('.meettheteam').show();
	$('.slick-prev').trigger('click');
}


function showitems(s) {
	$('#' + s.slice(1) + '-button').trigger('click');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function gotofacebook() {
	setTimeout(function () { window.location = "https://www.facebook.com/ClarkTrophies/"; }, 25);
	window.location = "fb://ClarkTrophies/";
}

function aboutus() {
	$('.slideshow-container').addClass('hidden');
	$('.grid').addClass('hidden');
	$('#all-items').addClass('hidden');
	$('.contactuscontainer').addClass('hidden');
	$('.aboutuscontainer').removeClass('hidden');
}
function contactus() {
	$('.slideshow-container').addClass('hidden');
	$('.grid').addClass('hidden');
	$('#all-items').addClass('hidden');
	$('.aboutuscontainer').addClass('hidden');
	$('.contactuscontainer').removeClass('hidden');
}

var sliden = 0;
function addSlides(n) {
	$('.customcontainer').find('.custom' + (1 + (sliden % 2))).hide();
	$('.customcontainer').find('.custom' + (1+ (((sliden + n)+2) % 2))).fadeIn();
	$('.customcontainer').find('.custom' + (1+ (((sliden + n)+2) % 2))).css('display', 'flex');
	sliden = (sliden + n + 2) % 2;

}
