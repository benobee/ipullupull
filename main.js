import Scrollmap from 'scrollmap';

(function() {
    const Site = {
        init() {
            this.animation();
            this.faq("#collection-59419b79d2b8575be217f9bf, #collection-59419c0c59cc6850cec56bff, #collection-5980b200f14aa1e9bb9c8c2a, #collection-5980bec51e5b6c82ca20cdc4");
            this.multiLanguage();
        },
        currentPage(id) {
            /* Used for verifying the page id */
            const page = document.querySelector(id);

            if (page) {
                return true;
            }

            return false;
        },
        multiLanguage() {
            /* this is based on the language selection UI and the data attributes 
            injected per page. If the page is a spansih page the logo href will changed 
            to reflect the new languages home page. Also, an active class will be 
            added to the language selection UI */

            let spanish = null;
            let language = "English";

            spanish = document.querySelector('body[data-page-title*="spanish"]');

            if (!spanish) {
                //English
                document.querySelector(".Header-branding").setAttribute("href", "/home");
                document.querySelector(".language-selection .item.english a").classList.add("active");
            } else {
                //Spanish
                document.querySelector(".Header-branding").setAttribute("href", "/inicio");
                document.querySelector(".language-selection .item.spanish a").classList.add("active");
            }
        },
        faq(id) {
            /* FAQ page accordions */

            if (!this.currentPage(id)) {
                return false;
            }
            const links = document.querySelectorAll('p[id*="FAQ"]');

            links.forEach((item) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.currentTarget.classList.toggle("active");
                });
            });
        },
        animation() {
            /* Animation classes added using Scrollmap. Looks for element 
            in viewport executes callbacks */

            Scrollmap.trigger({
                target: '.image-block-v2'
            }).trigger({
                target: '#intro-subnavigation, #spanish-intro-subnavigation'
            }, (node) => {
                const array = node.querySelectorAll(".Index-gallery-item");

                Scrollmap.sequence(array, { interval: 400 }, (el) => {
                    el.classList.add('visible');
                });
            }).trigger({
                target: '#intro, #intro-1'
            });
        }
    };

    Site.init();

})();