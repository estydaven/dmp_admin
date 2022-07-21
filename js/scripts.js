// Sidebar menu tabs

$(document).on("click", ".menu-nav__item", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".menu-nav__item").removeClass("active");
		$(".content-list__item").removeClass("active");

		$(this).addClass("active");
		$(".content-list").find(".content-list__item:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".content-list")
			.find(".content-list__item:eq(" + numberIndex + ")")
			.innerHeight();
		$(".content-list").height(listItemHeight + "px");
	}
});

// Show/hide menu 

$('.menu-collapse').on('click', function() {
    $(this).removeClass('show');
    $(this).addClass('hide');
    $('.menu-collapsed').removeClass('hide');
    $('.menu-collapsed').addClass('show');
    $('.menu-user__info').removeClass('show-flex');
    $('.menu-user__info').addClass('hide');
    $('.menu-nav__text').removeClass('show');
    $('.menu-nav__text').addClass('hide');
    $('.sidebar-menu').css('width', '69px');
    $('.sidebar-menu__logo').attr('src', 'images/icons/logo-small.svg').addClass('sidebar-menu__logo_collapse');
});

$('.menu-collapsed').on('click', function() {
    $(this).removeClass('show');
    $(this).addClass('hide');
    $('.menu-collapse').removeClass('hide');
    $('.menu-collapse').addClass('show');
    $('.menu-user__info').removeClass('hide');
    $('.menu-user__info').addClass('show-flex');
    $('.menu-nav__text').removeClass('hide');
    $('.menu-nav__text').addClass('show');
    $('.sidebar-menu').css('width', '259px');
    $('.sidebar-menu__logo').attr('src', 'images/icons/logo.svg').removeClass('sidebar-menu__logo_collapse');
});

// Show/hide new template block

$('.header-template__button').on('click', function() {
	$('.templates-new').addClass('active');
	$('.templates__wrapper').addClass('hidden');
});
$('.button_save').on('click', function() {
	$('.templates-new').removeClass('active');
	$('.templates__wrapper').removeClass('hidden');
});
$('.button_template-more').on('click', function() {
	$('.templates-new').addClass('active');
	$('.templates__wrapper').addClass('hidden');
});

// Custom date field

$(".rangeDate").flatpickr({
	emableTime: true,
    mode: 'range',
    dateFormat: "d.m.y",
	minDate: "01.01.22",
    defaultDate: ["21.06.2022", "25.06.2022"],
    conjunction: " . ",
    "locale": "ru"
});

$(".template-form__input_date").flatpickr({
    "locale": "ru",
    dateFormat: "d.m.y",
	minDate: "01.01.22",
    altInputClass: 'class',
});

// Custom file field

(function (document, window, index){
    'use strict';
    var inputs = document.querySelectorAll('.inputfile');
    var spanInput = document.querySelector('.upload-name');
	var textUpload = document.querySelector('.upload-text');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
                labelVal = label.innerHTML;        
        input.addEventListener('change', function (e) {
            var fileName = '';
            //if (spanInput.innerText == fileName) {
                spanInput.classList.add('upload-name_active');
                textUpload.style.display = 'none';                
            //}
            if (this.files && this.files.length > 1)
                fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
        
        // Firefox bug fix
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

// Show/hide token info

const dropBtn = document.querySelectorAll('.edits_token');

dropBtn.forEach((el) => {
    el.onclick = function() {
        let dropdown = el.parentNode.getElementsByClassName('token-info')[0];
        dropdown.classList.toggle('show'); 
        let button = el.getElementsByClassName('edits__item_info')[0];
        button.classList.toggle('edits__item_close');
    }
});

// Custom geo select

jQuery(($) => {
    $(".select").on("click", ".select__head", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).next().fadeOut();
        } else {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
            $(this).addClass("open");
            $(this).next().fadeIn();
        }
    });

    $(".select").on("click", ".select__item", function () {
        $(".select__head").removeClass("open");
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());        
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
        }
    });
});