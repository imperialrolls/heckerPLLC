// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$(document).ready(function() {
    $('.parallax').parallax();

    $('.smooth-scroller').click(function() {
        // prevent the default action of the click
        event.preventDefault();
        if (this.hash !== "") {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $("#section2").offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

