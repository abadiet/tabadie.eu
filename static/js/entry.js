function respondToVisibility(element, callback) {
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    observer.observe(element);
}

window.addEventListener("DOMContentLoaded", function() {

    /* SLIDE LEFT */

    document.querySelectorAll(".entry-slide-left").forEach(obj => {
        obj.style.filter = "opacity(0.6)";
        obj.style.transform = "translate(15px)";
        respondToVisibility(obj, function () {
            obj.style.filter = "unset";
            obj.style.setProperty("transform", "none");;
        });
    });


    /* SLIDE RIGHT */

    document.querySelectorAll(".entry-slide-right").forEach(obj => {
        obj.style.filter = "opacity(0.6)";
        obj.style.transform = "translate(-15px)";
        respondToVisibility(obj, function () {
            obj.style.filter = "unset";
            obj.style.setProperty("transform", "none");;
        });
    });

});
