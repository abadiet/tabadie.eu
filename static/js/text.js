window.addEventListener("DOMContentLoaded", function() {

    /* MORE */

    document.querySelectorAll(".more").forEach(more => {
            const target = more.previousElementSibling;
            target.style.display = "none";
            more.innerHTML = "show more";
            more.addEventListener("click", function() {
            if (target.style.display == "none") {
                target.style.display = "unset";
                more.innerHTML = "show less";
            } else {
                target.style.display = "none";
                more.innerHTML = "show more";
            }
        });
    });


    /* LINK EFFECT */

    function activate_link(link) {
        link.classList.add("link-effect-activated");
        setTimeout(function () {
            link.classList.remove("link-effect-activated");
        }, 300);
        setTimeout(activate_link, 5000, link);
    }

    let link_id = 0;
    document.querySelectorAll(".link.link-effect").forEach(link => {
        setTimeout(activate_link, link_id * 150, link);
        link_id += 1;
    });
});
