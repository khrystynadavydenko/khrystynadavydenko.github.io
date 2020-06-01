! function() {
            "use strict";
            window.onload = function() {
                /*  https://sachinchoolur.github.io/lightGallery/docs/api.html */
                $('.gallery_isolines').lightGallery({
                    selector: '.gallery_isolines  .gallery_item',
                    download: false,
                    fullScreen: false,
                    thumbnail: false,
                    zoom: false,
                    share: false,
                    autoplayControls: false,
                    autoplay: false,
                    progressBar: false,
                    hideBarsDelay: 99999,
                });
            }
        }();