window.addEventListener("DOMContentLoaded", function() {

    const about = document.getElementById("about");
    function about_onresize() {
        if (window.innerWidth <= 768) {
            about.style.setProperty('--padding', 'unset');
            about.querySelectorAll("img").forEach(img => {
                img.style.display = 'none';
            });
        } else {
            about.style.setProperty('--padding', 'calc(2 * var(--margin-side))');
            about.querySelectorAll("img").forEach(img => {
                img.style.display = 'unset';
            });
        }
    }
    window.addEventListener("resize", about_onresize);
    about_onresize();

});
