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

    const container = document.getElementsByClassName("logos-collapse")[0];
    function projects_onresize() {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.setProperty('--translateX', window.innerWidth / 2 - container.children[i].offsetLeft + 'px');
        }
    }
    window.addEventListener("resize", projects_onresize);
    projects_onresize();

    respondToVisibility(container, function () {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.animation = "logo-collapse 1s 1.5s ease-in forwards";
        }
    });

});
