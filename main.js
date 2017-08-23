import Scrollmap from 'scrollmap';

(function() {
    const Site = {
        init() {
            this.animation();
            this.faq("#collection-59419b79d2b8575be217f9bf, #collection-59419c0c59cc6850cec56bff", "#collection-5980b200f14aa1e9bb9c8c2a", "#collection-5980bec51e5b6c82ca20cdc4");
        },
        currentPage(id) {
            const page = document.querySelector(id);

            if (page) {
                return true;
            }

            return false;
        },
        faq(id) {
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