
function siteNavToggle() {
    let navButton = document.querySelector('#siteNavToggle');
    let navModal = document.querySelector('.header__nav__modal');

    navButton.addEventListener("click", function () {
        let state = this.getAttribute("aria-expanded"); 

        if (state == "true") {
            state = "false"
        } else {
            state = "true"
        }

        this.setAttribute("aria-expanded", state);
        navModal.classList.toggle('open');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    siteNavToggle();
});