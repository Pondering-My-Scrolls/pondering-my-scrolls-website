
/**
 * ————————————————————————————————————————— 
 *    T A B L E ~ O F ~ C O N T E N T S
 * —————————————————————————————————————————
 * ~~~ 1 ~~~~~~~~~~~~~~~~~~ GLOBAL FUNCTIONS
 * 1.1 ~ Detections
 * 1.2 ~ Accessibility
 * ~~~ 2 ~~~~~~~~~~~~~~~~~~~ SITE NAVIGATION
 * 2.1 ~ Run Functions
 * ~~~ 3 ~~~~~~~~~~~~~~~~~~ DOMContentLoaded
 * 3.1 ~ Run Functions
 */

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~ 1 ~~~~~~~~~~~~~~~~~~ GLOBAL FUNCTIONS
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */


/**
 * 1.1 ~ Detections
 * add class to target users with js or no js
 */
function detectJS() {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
}



/**
 * 1.1 ~ Detections
 * detects if the user is using a touch device, 
 * and then adds "touch-enabled" to the document/html element
 */
 function isTouchDevice() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}




/**
 * 1.1 ~ Detections
 * detects if the user on the site is a keyboard user by 
 * detecting the usage of the tab keyboard key. adds a class 
 * to the document/html element called 'keyboard-focus" 
 */
(function () {
    'use strict';

    function keyboardFocus(e) {
        if (e.keyCode !== 9) {
            return;
        }

        switch (e.target.nodeName.toLowerCase()) {
            case 'input':
            case 'select':
            case 'textarea':
                break;
            default:
                document.documentElement.classList.add('keyboard-focus');
                document.removeEventListener('keydown', keyboardFocus, false);
        }
    }

    document.addEventListener('keydown', keyboardFocus, false);
})();



/**
 * 1.2 ~ Accessibility
 * target links that open in a new tab, add A11Y elements
 * https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html
 */
function targetBlankA11Y() {
    // make an array of all links
    var targetBlankLinks = document.getElementsByTagName("a");

    // loop through the array
    for (a in targetBlankLinks) {
        // if the link has an attribute of target=_blank
        if (targetBlankLinks[a].target == "_blank") {
            // create a span element for it
            var targetBlankLinksNode = document.createElement("span");
            var targetBlankLinksTextNode = document.createTextNode(
                "(Opens a new window)"
            );
            targetBlankLinksNode.appendChild(targetBlankLinksTextNode);

            // and attach it to the link
            targetBlankLinks[a].appendChild(targetBlankLinksNode);
        }
    }
}


/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~ 2 ~~~~~~~~~~~~~~~~~~~ SITE NAVIGATION
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */





/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~ 3 ~~~~~~~~~~~~~~~~~~ DOMContentLoaded
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
window.addEventListener('DOMContentLoaded', () => {
    /**
     * 3.1 ~ Run Functions
     */
    // detectJS();
    // isTouchDevice();
    // targetBlankA11Y();
    siteNavToggle();

});