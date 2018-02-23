// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$(document).ready(function() {
    $('.parallax').parallax();

    /* interaction with parallax not so nice
    $('.smooth-scroller').click(function() {
        // prevent the default action of the click
        event.preventDefault();

        // if no hash defined, don't do anything
        if (this.hash == "")
            return;

        function getPageScroll() {
            let yScroll;

            if (window.pageYOffset) {
                yScroll = window.pageYOffset;
            }else if (document.documentElement && document.documentElement.scrollTop) {
                yScroll = document.documentElement.scrollTop;
            }else if (document.body) {
                yScroll = document.body.scrollTop;
            }
            return yScroll;
        }

        let targetOffset = document.getElementById(this.hash.substr(1)).offsetTop;
        let currentPosition = getPageScroll();
        let delta = targetOffset - currentPosition;
        let xform = "translate(0, -"+delta+"px)";
        let animateTime = 1500;
        let body = document.body;

        body.style.WebkitTransform = xform;
        body.style.MozTransform = xform;
        body.style.transform = xform;
        body.classList.add('scroll-transition');

        window.setTimeout(function () {
            window.scrollTo(0, targetOffset);
            body.classList.remove('scroll-transition');
            body.style.cssText = "";
        }, animateTime);
    });
    */
});

