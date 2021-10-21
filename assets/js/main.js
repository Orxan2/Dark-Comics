$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4
    });

    $(".toy-card").each(function (indexInArray, valueOfElement) {
        $(valueOfElement).on('mouseenter', function () {
            console.log(valueOfElement.children[0].children[1]);
            $(valueOfElement.children[0].children[1]).slideToggle();
        });
        $(valueOfElement).on('mouseleave', function () {
            console.log(valueOfElement.children[0].children[1]);
            $(valueOfElement.children[0].children[1]).slideToggle();
        });
    });

});

