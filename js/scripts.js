// Sidebar menu tabs

$(document).on("click", ".menu-nav__item", function() {
	let numberIndex = $(this).index();
    $(".templates-new").removeClass("active");
    $(".templates__wrapper").removeClass("hidden");
    $(".users__inner").removeClass("hide");
    $(".administrate").removeClass("show");

	if (!$(this).is("active")) {
		$(".menu-nav__item").removeClass("active");
		$(".content-list__item").removeClass("active");

		$(this).addClass("active");
		$(".content-list").find(".content-list__item:eq(" + numberIndex + ")").addClass("active");

		let listItemHeight = $(".content-list")
			.find(".content-list__item:eq(" + numberIndex + ")")
			.innerHeight();
		$(".content-list").height(listItemHeight + "px");
	}
});

// Mobile menu

$('.burger').on('click', function() {
    $('.sidebar-menu__inner').toggleClass('open');
    $('.burger__line_last').toggleClass('burger__line_mob');
});
$('.menu-nav__item').on('click', function() {
    $('.sidebar-menu__inner').toggleClass('open');
    $('.burger__line_last').removeClass('burger__line_mob');
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
    $('.sidebar-menu').css('width', '200px');
    $('.sidebar-menu__logo').attr('src', 'images/icons/logo.svg').removeClass('sidebar-menu__logo_collapse');
});

// Show/hide new template block

$('.header-template__button').on('click', function() {
    if($(this).hasClass('header-template__button-template')) {
        $('.templates-new_template').addClass('active');
        $('.templates__wrapper_template').addClass('hidden');
    }
    if($(this).hasClass('header-template__button-company')) {
        $('.templates-new_company').addClass('active');
        $('.templates__wrapper_company').addClass('hidden');
    }
});
$('.edits__item_edit').on('click', function() {
    if($(this).hasClass('edits__item_template')) {
        $('.templates-new_template').addClass('active');
        $('.templates__wrapper_template').addClass('hidden');
    }
    if($(this).hasClass('edits__item_company')) {
        $('.templates-new_company').addClass('active');
        $('.templates__wrapper_company').addClass('hidden');
    }
});
$('.button_save').on('click', function() {
    if($(this).hasClass('button_template')) {
        $('.templates-new_template').removeClass('active');
        $('.templates__wrapper_template').removeClass('hidden');
    }
    if($(this).hasClass('button_company')) {
        $('.templates-new_company').removeClass('active');
        $('.templates__wrapper_company').removeClass('hidden');
        $('.niche').removeClass('show');
    }
});
$('.button-reset').on('click', function() {
    if($(this).hasClass('button-reset_template')) {
        $('.templates-new_template').addClass('active');
        $('.templates__wrapper_template').addClass('hidden');
    }
    if($(this).hasClass('button-reset_company')) {
        $('.templates-new_company').addClass('active');
        $('.templates__wrapper_company').addClass('hidden');
    }
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
    let inputs = document.querySelectorAll('.inputfile');
    let spanInput = document.querySelector('.upload-name');
	let textUpload = document.querySelector('.upload-text');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
                labelVal = label.innerHTML;        
        input.addEventListener('change', function (e) {
            let fileName = '';
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
        let dropdown = this.parentNode.getElementsByClassName('token-info')[0];
        dropdown.classList.toggle('show');
        let button = this.getElementsByClassName('edits__item_info')[0];
        button.classList.toggle('edits__item_close');
    }
});

if (window.innerWidth < 769) {
    dropBtn.forEach((el) => {
        el.onclick = function() {
            let dropdown = this.parentNode.getElementsByClassName('token-info')[0];
            dropdown.classList.toggle('show');
            let button = this.getElementsByClassName('edits__item_info')[0];
            button.classList.toggle('edits__item_close');
            let pagination = document.querySelector('.pagination_token');
            let height = dropdown.offsetHeight;
            pagination.style.top = `${height}px`;
        }
    });
}

// Add row to archieve
$(".edits__item_delete").on("click", function () {
    $(this).parent().parent().parent().addClass("archieve");
});

// Show arrows in table-cell
$(".table-cell_arrows").on("click", function () {
    $(this).children('.arrows').toggleClass('show-flex');
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
        let imageSelect = $(this).children('.select__image').attr('src');
        $(this).parent().prev().find('.select__image').attr('src', `${imageSelect}`);
        $(this).parent().prev().find('.select__text').text($(this).text());
        if ($(this).parent().hasClass("select__list_niche")) {
            $(this).parent().prev().text($(this).text());
        }        
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
        }
    });

    $(".select").on("click", ".select__item_dropdown", function () {
        $(".niche").addClass("show");
    });        
});

// Show niche block and change count of templates

const checkboxes = document.querySelectorAll('.checkbox__input_niche');
let countField = document.querySelector('.template-form__input_count');
let checkCount = 0;

checkboxes.forEach((el) => {
    el.addEventListener('change', function () {
        var check = event.target;
        
        if (check.checked === true) {
            checkCount += 1;           
        }
        if (check.checked !== true) {
            checkCount -= 1;                       
        }
        countField.value = checkCount; 
    });
});

// Reducing text length in mobile block 'Niche'
if (($(window).width() < 769)) {
    let sizeWords = 12,
    wordsContent= $('.mob-text'),
    newText = wordsContent.text();
    
    if(newText.length > sizeWords){
        wordsContent.text(newText.slice(0, sizeWords) + ' ...');
    }

    let sizeWordsDescr = 18,
    wordsContentDescr= $('.mob-descr'),
    newTextDescr = wordsContentDescr.text();
    
    if(newTextDescr.length > sizeWordsDescr){
        wordsContentDescr.text(newTextDescr.slice(0, sizeWordsDescr) + ' ...');
    }
}

// Show/hide administrate block
 
const adminButtons = document.querySelectorAll('.edits__item_admin');
const adminBlock = document.querySelector('.administrate');
const usersBlock = document.querySelector('.users__inner');

adminButtons.forEach((el) => {
    el.addEventListener('click', function () {
        adminBlock.classList.add('show');
        usersBlock.classList.add('hide');
    });
});