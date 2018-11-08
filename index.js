function showSlide(idSlider, indexSlide) {
    $('#' + idSlider + ' .slide-content').children('.slide-item').each(function (index) {
        $(this).removeClass(['current', 'previous', 'next']);
        if (indexSlide == index) {
            $(this).addClass('current');
        } else if (indexSlide - 1 == index) {
            $(this).addClass('previous');
        } else if (indexSlide + 1 == index) {
            $(this).addClass('next');
        }
    });
}

function initSlideControl(idSlider) {
    var listItem = $('#' + idSlider + ' .slide-content').children('.slide-item');
    var indexCurrent = 0;
    listItem.each(function (index) {
        if ($(this).hasClass('current')) {
            indexCurrent = index;
        }
    });
    if (indexCurrent == 0) {
        $('#' + idSlider + ' .slide-controls .item-control[data-control="prev"]').addClass('disable');
    }
    if (indexCurrent == listItem.length - 1) {
        $('#' + idSlider + ' .slide-controls .item-control[data-control="next"]').addClass('disable');
    }
}

$(document).ready(function () {
    initSlideControl('flash-slider');

    $('.flash-card').on('click', function () {
        $(this).toggleClass('flip');
    })

    $('.slider .slide-controls .item-control').on('click', function () {
        var control = $(this).attr('data-control');
        var idSlider = $(this).parent().parent().attr('id');
        var listItem = $('#' + idSlider + ' .slide-content').children('.slide-item');
        var indexCurrent = 0;
        listItem.each(function (index) {
            if ($(this).hasClass('current')) {
                indexCurrent = index;
            }
        });
        $('#' + idSlider + ' .slide-controls .item-control').removeClass('disable');
        if (control == 'prev') {
            if (indexCurrent < 1) {
                return;
            }
            if (indexCurrent - 1 < 1) {
                $(this).addClass('disable');
            }
            showSlide(idSlider, indexCurrent - 1);
        } else {
            if (indexCurrent >= listItem.length - 1) {
                return;
            }
            if (indexCurrent >= listItem.length - 2) {
                $(this).addClass('disable');
            }
            showSlide(idSlider, indexCurrent + 1);
        }
    })
})
