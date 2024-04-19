  $(document).ready(function () {
	$("#navigation .sf-menu").superfish({
	  animation: { opacity: "show" },
	  animationOut: { opacity: "hide" },
	});

	$("#slideshow").camera({
	  height: "auto",
	  loader: "none",
	  fx: "simpleFade",
	  playPause: false,
	  navigation: false,
	  pagination: true,
	  hover: false,
	});

	$("header.header-top").sticky();

	$("form.contactForm .formItem").each(function () {
	  var Label = $(this).find("label").text();
	  $(this).find(".text-input").attr("placeholder", Label);
	});
	if ($(window).width() < 801) {
	  $(".contactform div").addClass("contactform-responsive");
	}

	$(".mobile-nav a").click(function (e) {
	  e.preventDefault();
	  $("body").addClass("show-menu");
	});
	$(".site-overlay, .menu-wrap .close-button").click(function (e) {
	  e.preventDefault();
	  $("body").removeClass("show-menu");
	});
  });
  