function toggleNavigation() {
    let navModal = document.querySelector('.header__nav__modal');
    let navButton = document.querySelector('#siteNavToggle');
    let state = navButton.getAttribute("aria-expanded");

    if (state == "true") {
        state = "false"
    } else {
        state = "true"
    }

    navButton.setAttribute("aria-expanded", state);
    navModal.classList.toggle('open');
}

function summaryToggle() {
    let summaryButton = document.querySelector('#summaryToggle');
    let summary = document.querySelector('.summary');

    let state = summaryButton.getAttribute("aria-expanded");

    if (state == "true") {
        state = "false";
    } else {
        state = "true";
    }

    summaryButton.setAttribute("aria-expanded", state);
    summary.classList.toggle('open');
}

window.addEventListener('DOMContentLoaded', () => {
    let navButton = document.querySelector('#siteNavToggle');
    let summaryButton = document.querySelector('#summaryToggle');

    navButton.addEventListener("click", function () {
        toggleNavigation();
    });

    addEventListener("keyup", (event) => {
        let navButton = document.querySelector('#siteNavToggle');
        let state = navButton.getAttribute("aria-expanded");

        if (state == "true" && event.key == "Escape") {
            toggleNavigation();
        }
    });

    if (summaryButton) {
        summaryButton.addEventListener("click", function () {
            summaryToggle()
        });
    }
});