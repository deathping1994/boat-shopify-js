$(document).on('productDataLoaded', function() {
    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    };
    var product_list_mobile = $(".prodct_variant").clone();
    product_list_mobile.find('li').each(function() {
        if (this.dataset.qty <= 0)(this.remove());
        $(this).removeClass('activevar');
    });
    product_list_mobile.find('li:first-child').addClass('activevar')
    var product_list_desktop = $(".prodct_variant").clone()
    product_list_desktop.find('li').each(function() {
        if (this.dataset.qty <= 0)(this.remove());
    });
    product_list_mobile.addClass('mobile');
    product_list_desktop.addClass('desktop');
    var form = $(".product-form").find("form").clone();
    form.find(".shopify-payment-button").remove();
    form.find(".backorder").remove();
    form.find(".img-strip").remove();
    form.find(".shopify-payment-button").remove();
    form.find(".quantity-wrapper").find("a").remove();
    form.find(".quantity-wrapper").css("display", "none");
    form.find(".quantity-submit-row").css("margin-bottom", "5px");
    form.find(".quantity-submit-row__submit").css({ "display": "flex", "margin": "0px" });
    form.find(".quantity-submit-row__submit input").css("margin", "auto");
    form.find("label").css("display", "none");
    form.find(".original-selector").css("display", "none");

    var imageLink = $('.show-gallery')[0].href
    var productTitle = $('.product-title')[0].innerHTML
    if ($('.price')[0]) { var currentPrice = $('.price')[0].innerHTML };
    if ($('.current-price')[0]) { var currentPrice = $('.current-price')[0].innerHTML };
    var wasPrice = $('.was-price')[0].innerHTML
    var stickyImageContent = `<div class="qsb-product"><div class="qsb-product__media" style="width: 60px;"><img src="` + imageLink + `" alt="Stone 190"></div><div class="qsb-product__info"><h2 class="qsb-product__title" style="color: rgb(255, 255, 255);">` + productTitle + `</h2><p class="qsb-product__price"><span class="qsb-product__current-price" style="color: rgb(255, 255, 255);">` + currentPrice + `</span><s class="qsb-product__price-compare-at">` + wasPrice + `</s></p></div></div>`
    var y = `<div id="qikify-stickycart-app" class="qikify-stickycart-app">
        <div class="qsb-wrapper  qsb-wrapper--desktop-bottom  qsb-wrapper--mobile-bottom  qsb-wrapper--interactive qsb--active in"
            style="height: 80px; background-color: rgb(0, 0, 0); font-family: Montserrat; font-size: 16px; font-weight: 400; font-style: inherit; letter-spacing: 0px;">
            ` + stickyImageContent + product_list_mobile.get(0).outerHTML + product_list_desktop.get(0).outerHTML + form.get(0).outerHTML + `</div></div>`
    $('#pagefooter').after(y);
    $('.qikify-stickycart-app .quantity-submit-row__submit').attr('id', 'sticky_add_to_cart');
    var styleSheet = `<style type="text/css">.qikify-stickycart-app,.qikify-stickycart-app *,.qikify-stickycart-app:after,.qikify-stickycart-app :after,.qikify-stickycart-app:before,.qikify-stickycart-app :before {    -webkit-box-sizing: border-box;    box-sizing: border-box
    }@-webkit-keyframes stickycart-spin {    0% {        -webkit-transform: rotate(0deg);        transform: rotate(0deg)    }    to {        -webkit-transform: rotate(1turn);        transform: rotate(1turn)    }}@keyframes stickycart-spin {    0% {        -webkit-transform: rotate(0deg);        transform: rotate(0deg)    }    to {        -webkit-transform: rotate(1turn);        transform: rotate(1turn)    }}.qsc-clearfix:after {    display: block;    clear: both;    content: ""}.qsc-d-none {    display: none!important
    }@media (min-width:992px) {    .d-desktop-none {        display: none!important
        }}@media (max-width:991.98px) {    .d-mobile-none {        display: none!important
        }}@media (min-width:992px) {    .pos-desktop-top_left {        top: 0!important;        left: 0!important
        }    .pos-desktop-top_center {        top: 0!important;        left: 50%!important;        -webkit-transform: translateX(-50%)!important;        transform: translateX(-50%)!important
        }    .pos-desktop-top_right {        top: 0!important;        right: 0!important
        }    .pos-desktop-middle_left {        left: 0!important
        }    .pos-desktop-middle_left,    .pos-desktop-middle_right {        top: 50%!important;        -webkit-transform: translateY(-50%)!important;        transform: translateY(-50%)!important
        }    .pos-desktop-middle_right {        right: 0!important
        }    .pos-desktop-bottom_left {        bottom: 0!important;        left: 0!important
        }    .pos-desktop-bottom_center {        bottom: 0!important;        left: 50%!important;        -webkit-transform: translateX(-50%)!important;        transform: translateX(-50%)!important
        }    .pos-desktop-bottom_right {        bottom: 0!important;        right: 0!important
        }}@media (max-width:991.98px) {    .pos-mobile-top_left {        top: 0!important;        left: 0!important
        }    .pos-mobile-top_center {        top: 0!important;        left: 50%!important;        -webkit-transform: translateX(-50%)!important;        transform: translateX(-50%)!important
        }    .pos-mobile-top_right {        top: 0!important;        right: 0!important
        }    .pos-mobile-middle_left {        left: 0!important
        }    .pos-mobile-middle_left,    .pos-mobile-middle_right {        top: 50%!important;        -webkit-transform: translateY(-50%)!important;        transform: translateY(-50%)!important
        }    .pos-mobile-middle_right {        right: 0!important
        }    .pos-mobile-bottom_left {        bottom: 0!important;        left: 0!important
        }    .pos-mobile-bottom_center {        bottom: 0!important;        left: 50%!important;        -webkit-transform: translateX(-50%)!important;        transform: translateX(-50%)!important
        }    .pos-mobile-bottom_right {        bottom: 0!important;        right: 0!important
        }}.qsc-btn {    display: -webkit-inline-box;    display: -ms-inline-flexbox;    display: inline-flex;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center;    height: 35px;    padding: 6px 30px;    background-color: transparent;    border: 1px solid #ddd;    border-radius: 2px;    font-size: 14px;    text-align: center;    white-space: nowrap;    -webkit-user-select: none;    -moz-user-select: none;    -ms-user-select: none;    user-select: none;    cursor: pointer;    -webkit-transition: all .25s ease-out;    transition: all .25s ease-out
    }.qsc-btn.focus,.qsc-btn:focus {    outline: 0
    }
    a.qsc-btn {    line-height: 21px
    }.qsc-btn--lg {    height: 40px;    padding: 6px 40px
    }
    a.qsc-btn--lg {    line-height: 26px
    }.qsc-btn--block {    display: block;    width: 100%}.qsc-btn--block+.qsc-btn--block {    margin-top: 5px
    }.qsc-btn--stickycart {    position: fixed;    z-index: 9991;    width: 50px;    height: 50px;    margin: 5px;    padding: 6px;    background-color: #fff;    border-radius: 50%}.qsc-btn--stickycart.focus,.qsc-btn--stickycart:focus {    -webkit-box-shadow: 1px 6px 12px rgba(0, 0, 0, .15), 0 4px 6px rgba(0, 0, 0, .1);    box-shadow: 1px 6px 12px rgba(0, 0, 0, .15), 0 4px 6px rgba(0, 0, 0, .1)}.qsc-btn--has-shadow {    -webkit-box-shadow: 1px 4px 10px rgba(0, 0, 0, .12), 0 4px 4px rgba(0, 0, 0, .08);    box-shadow: 1px 4px 10px rgba(0, 0, 0, .12), 0 4px 4px rgba(0, 0, 0, .08)}.qsc-btn__icon {    display: inline-block;    width: 20px;    height: auto;    vertical-align: middle;    fill: currentColor
    }.qsc-btn__badge {    position: absolute;    top: -5px;    right: -5px;    display: -webkit-inline-box;    display: -ms-inline-flexbox;    display: inline-flex;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center;    width: 20px;    height: 20px;    background-color: #e75f33;    border-radius: 50%;    font-size: 10px;    font-weight: 600;    color: #fff
    }.qsc-btn--checkout,.qsc-btn--viewcart {    border: 0;    font-weight: 600;    letter-spacing: .6px
    }.qsc-cart__footer .qsc-btn--viewcart {    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    background-color: #ddd;    color: #454545
    }@media (max-width:575.98px) {    .qsc-cart__footer .qsc-btn--viewcart {        -webkit-box-flex: 0;        -ms-flex: 0 0 100%;        flex: 0 0 100%    }}.qsc-cart__footer .qsc-btn--checkout {    -webkit-box-flex: 2;    -ms-flex: 2 1 auto;    flex: 2 1 auto;    margin-left: 12px;    background-color: #3c3c3c;    color: #fff
    }@media (max-width:575.98px) {    .qsc-cart__footer .qsc-btn--checkout {        -webkit-box-flex: 0;        -ms-flex: 0 0 100%;        flex: 0 0 100%;        margin-top: 8px;        margin-left: 0
        }}.qsc-cart__footer .qsc-btn--checkout:hover {    background-color: #222;    color: #fff
    }.qsc-btn--close {    position: absolute;    top: 0;    right: 0;    width: auto;    height: auto;    padding: 6px 8px;    border-color: transparent;    font-size: 24px;    line-height: 1;    color: #767676;    opacity: .5
    }.qsc-btn--close.focus,.qsc-btn--close:focus {    -webkit-box-shadow: none;    box-shadow: none
    }.qsc-btn--close:hover {    opacity: .75
    }.qsc-btn--add-to-cart {    height: 2.1875em;    background-color: #3c3c3c;    border: 0;    font-family: inherit;    font-size: 1em;    line-height: calc(2.1875em - 12px);    color: #fff
    }.qsc-btn--add-to-cart:hover {    background-color: #222
    }@media (max-width:767.98px) {    .qsc-btn--add-to-cart {        -webkit-box-flex: 0;        -ms-flex: 0 0 100%;        flex: 0 0 100%;        border-radius: 0
        }}@media (max-width:767.98px) {    .qsb-quantity-input-wrapper+.qsc-btn--add-to-cart {        -webkit-box-flex: 0;        -ms-flex: 0 0 50%;        flex: 0 0 50%    }}.qsc-btn--add-to-cart .qsb-loading {    position: absolute;    opacity: 0;    pointer-events: none
    }.qsc-btn--add-to-cart.loading .qsb-load {    opacity: 0;    visibility: hidden
    }.qsc-btn--add-to-cart.loading .qsb-loading {    opacity: 1;    -webkit-animation: stickycart-spin 1s linear infinite;    animation: stickycart-spin 1s linear infinite
    }.qsc-btn--mobile {    height: 2.1875em;    background-color: #3c3c3c;    border: 0;    font-size: 1em;    line-height: calc(2.1875em - 12px);    color: #fff
    }.qsc-btn--mobile:hover {    background-color: #222
    }.qikify-stickycart-app a {    color: inherit;    text-decoration: none
    }.qikify-stickycart-app a:hover {    color: inherit
    }.qikify-stickycart-app img {    max-width: 100%;    height: auto;    vertical-align: middle
    }.qsc-svg-icon {    display: inline-block;    fill: currentColor;    height: auto;    vertical-align: middle
    }.qsc-svg-icon.qsc-stickycart-icon {    width: 54%}.qsc-svg-icon.qsb-loading {    width: 20px
    }.qsc-cart-item {    position: relative;    margin-bottom: 15px
    }.qsc-cart-item .qsc-btn--close {    padding: 0;    font-size: 18px
    }.qsc-cart-item__media {    float: left;    display: block;    width: 100px;    margin-right: 10px
    }@media (max-width:575.98px) {    .qsc-cart-item__media {        width: 80px
        }}.qsc-cart-item__info {    padding-left: 110px
    }@media (max-width:575.98px) {    .qsc-cart-item__info {        padding-left: 90px
        }}.qsc-cart-item__title {    margin: 0 0 15px;    padding-right: 20px;    font-size: 16px;    color: inherit
    }.qsc-cart-item__variant {    color: #767676
    }.qsc-cart-item__price,.qsc-cart-item__variant {    margin: 0 0 8px;    font-size: 14px
    }.qsc-cart-wrapper {    z-index: 9992;    overflow: hidden;    -webkit-transition: visibility .3s cubic-bezier(.44, .11, .66, .88);    transition: visibility .3s cubic-bezier(.44, .11, .66, .88)}.qsc-cart-wrapper,.qsc-cart-wrapper:before {    position: fixed;    top: 0;    left: 0;    width: 100%;    height: 100%;    visibility: hidden
    }.qsc-cart-wrapper:before {    content: "";    background-color: rgba(0, 0, 0, .6);    opacity: 0;    -webkit-transition: opacity .3s cubic-bezier(.44, .11, .66, .88);    transition: opacity .3s cubic-bezier(.44, .11, .66, .88)}.qsc-cart-wrapper.qsc-has-cart-opened {    visibility: visible
    }.qsc-cart-wrapper.qsc-has-cart-opened:before {    opacity: 1;    visibility: visible
    }.qsc-cart {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-orient: vertical;    -webkit-box-direction: normal;    -ms-flex-direction: column;    flex-direction: column;    background-color: #fff;    border: 1px solid #ddd;    border-radius: 4px
    }.qsc-cart--offcanvas {    position: fixed;    top: 0;    bottom: 0;    width: 300px;    padding: 0;    border-radius: 0;    -webkit-transition: -webkit-transform .35s cubic-bezier(.44, .11, .66, .88);    transition: -webkit-transform .35s cubic-bezier(.44, .11, .66, .88);    transition: transform .35s cubic-bezier(.44, .11, .66, .88);    transition: transform .35s cubic-bezier(.44, .11, .66, .88), -webkit-transform .35s cubic-bezier(.44, .11, .66, .88)}@media (min-width:576px) {    .qsc-cart--offcanvas {        width: 400px
        }}@media (min-width:992px) {    .qsc-cart--offcanvas {        width: 480px
        }}.qsc-cart--offcanvas.qsc-cart--offcanvas-left {    top: 0!important;    bottom: 0!important;    left: 0!important;    -webkit-transform: translate3d(-100%, 0, 0);    transform: translate3d(-100%, 0, 0)}.qsc-cart--offcanvas.qsc-cart--offcanvas-right {    top: 0!important;    right: 0!important;    bottom: 0!important;    -webkit-transform: translate3d(100%, 0, 0);    transform: translate3d(100%, 0, 0)}.qsc-has-cart-opened .qsc-cart--offcanvas {    -webkit-transform: translateZ(0);    transform: translateZ(0)}.qsc-cart--modal {    position: relative;    max-width: 96%;    max-height: 90%;    margin: 50px auto;    opacity: 0;    -webkit-transform: translate3d(0, -20px, 0);    transform: translate3d(0, -20px, 0);    -webkit-transition: opacity .2s ease-out, -webkit-transform .25s ease-out;    transition: opacity .2s ease-out, -webkit-transform .25s ease-out;    transition: transform .25s ease-out, opacity .2s ease-out;    transition: transform .25s ease-out, opacity .2s ease-out, -webkit-transform .25s ease-out
    }@media (min-width:576px) {    .qsc-cart--modal {        max-width: 500px
        }}@media (min-width:992px) {    .qsc-cart--modal {        max-width: 800px;        max-height: 80%    }}@media (min-width:1200px) {    .qsc-cart--modal.qsc-cart--modal-xl {        max-width: 1140px
        }}@media (min-width:1200px) {    .qsc-cart--modal.qsc-cart--modal-lg {        max-width: 990px
        }}@media (min-width:1200px) {    .qsc-cart--modal.qsc-cart--modal-md {        max-width: 840px
        }}@media (min-width:1200px) {    .qsc-cart--modal.qsc-cart--modal-sm {        max-width: 690px
        }}.qsc-cart--modal .qsc-cart__price-label {    position: relative;    margin-right: 20px
    }.qsc-cart--modal .qsc-cart__price-label:before {    content: ":";    position: absolute;    top: 0;    right: -8px
    }.qsc-cart--modal .qsc-cart__footer {    text-align: right
    }@media (min-width:576px) {    .qsc-cart--modal .qsc-cart__footer {        display: block
        }}.qsc-has-cart-opened .qsc-cart--modal {    opacity: 1;    -webkit-transform: translateZ(0);    transform: translateZ(0)}.qsc-cart--bubble {    position: fixed;    max-height: 400px;    width: 420px;    opacity: 0;    -webkit-transform: scale(0);    transform: scale(0);    -webkit-transition: opacity .15s ease-out, -webkit-transform .35s ease-out;    transition: opacity .15s ease-out, -webkit-transform .35s ease-out;    transition: transform .35s ease-out, opacity .15s ease-out;    transition: transform .35s ease-out, opacity .15s ease-out, -webkit-transform .35s ease-out
    }@media (max-width:575.98px) {    .qsc-cart--bubble {        top: 50%!important;        left: 50%!important;        width: 100%;        height: 100%;        -webkit-transform: translate(-50%, -50%) scale(0);        transform: translate(-50%, -50%) scale(0)    }}.qsc-has-cart-opened .qsc-cart--bubble {    opacity: 1;    -webkit-transform: scale(1);    transform: scale(1)}@media (max-width:575.98px) {    .qsc-has-cart-opened .qsc-cart--bubble {        -webkit-transform: translate(-50%, -50%) scale(1);        transform: translate(-50%, -50%) scale(1)    }}.qsc-cart__header {    -webkit-box-flex: 0;    -ms-flex: 0 0 auto;    flex: 0 0 auto;    padding: 10px;    border-bottom: 1px solid #ddd
    }.qsc-cart__header .qsc-btn__badge {    position: relative;    top: auto;    right: auto;    margin-left: 5px;    vertical-align: middle
    }.qsc-cart__header--has-title {    position: relative;    padding: 10px
    }@media (min-width:992px) {    .qsc-cart__header--has-title {        padding: 15px
        }}.qsc-cart__header--has-title .qsc-cart__indicator {    position: absolute;    top: 10px;    left: 10px
    }@media (min-width:992px) {    .qsc-cart__header--has-title .qsc-cart__indicator {        top: 15px
        }}.qsc-cart__indicator .qsc-svg-icon.qsc-stickycart-icon {    width: 24px
    }.qsc-cart__title {    margin: 0;    font-size: 16px;    line-height: 24px;    text-align: center;    letter-spacing: .8px
    }.qsc-empty-cart {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-orient: vertical;    -webkit-box-direction: normal;    -ms-flex-direction: column;    flex-direction: column;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center;    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    padding: 50px 10px
    }.qsc-empty-cart>svg {    width: 30%;    height: auto
    }.qsc-empty-cart__text {    margin: 20px 0 0
    }.qsc-cart__item-list {    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    list-style: none;    margin: 0;    padding: 10px;    overflow-x: hidden;    overflow-y: auto
    }.qsc-cart__item-list li:last-child .qsc-cart-item {    margin-bottom: 0
    }.qsc-cart__prices {    border-top: 1px solid #ddd
    }.qsc-cart__price-value {    font-weight: 600
    }.qsc-cart__price-item {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-pack: end;    -ms-flex-pack: end;    justify-content: flex-end;    padding: 15px 10px 5px
    }.qsc-cart__price-label {    margin-right: auto
    }.qsc-cart__footer {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -ms-flex-wrap: wrap;    flex-wrap: wrap;    -webkit-box-flex: 0;    -ms-flex: 0 0 auto;    flex: 0 0 auto;    padding: 10px
    }.qsc-cart__arrow {    position: absolute;    display: block;    width: 0;    height: 0;    border: 6px solid transparent
    }.qsc-cart__arrow.qsc-cart__arrow--top_left {    bottom: 25px;    left: 100%;    margin-bottom: -6px;    border-left-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--top_center {    top: 100%;    left: 50%;    margin-left: -6px;    border-top-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--top_right {    bottom: 25px;    right: 100%;    margin-bottom: -6px;    border-right-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--middle_left {    top: 50%;    left: 100%;    margin-top: -6px;    border-left-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--middle_right {    top: 50%;    right: 100%;    margin-top: -6px;    border-right-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--bottom_left {    top: 25px;    left: 100%;    margin-top: -6px;    border-left-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--bottom_center {    bottom: 100%;    left: 50%;    margin-left: -6px;    border-bottom-color: #fff
    }.qsc-cart__arrow.qsc-cart__arrow--bottom_right {    top: 25px;    right: 100%;    margin-top: -6px;    border-right-color: #fff
    }.qsb-wrapper {    position: fixed;    bottom: 0;    left: 0;    z-index: 9991;    display: -webkit-box;    display: -ms-flexbox;    display: flex;    width: 100%;    background-color: #fff;    border: 0 solid #ddd
    }.qsb-wrapper .qsc-btn--close {    display: none
    }@media (min-width:992px) {    .qsb-wrapper[class*=--desktop-bottom] {        border-top-width: 1px
        }    .qsb-wrapper[class*=--desktop-top] {        border-bottom-width: 1px
        }}@media (max-width:991.98px) {    .qsb-wrapper {        min-height: 110px
        }    .qsb-wrapper[class*=--mobile-bottom] {        border-top-width: 1px
        }    .qsb-wrapper[class*=--mobile-top] {        border-bottom-width: 1px
        }}@media (max-width:767.98px) {    .qsb-wrapper {        -webkit-box-orient: vertical;        -webkit-box-direction: normal;        -ms-flex-direction: column;        flex-direction: column;        min-height: 0;        height: auto!important;        -webkit-transform: translateY(100%);        transform: translateY(100%);        -webkit-transition: -webkit-transform .35s ease-out;        transition: -webkit-transform .35s ease-out;        transition: transform .35s ease-out;        transition: transform .35s ease-out, -webkit-transform .35s ease-out
        }    .qsb-wrapper .qsc-btn--close {        display: inline-block;        top: -38px;        width: 38px;        height: 38px;        background-color: rgba(0, 0, 0, .8);        color: #fff;        opacity: 0;        visibility: hidden
        }}@media (max-width:767.98px) {    .qsb-wrapper.qsb-wrapper--mobile-top {        -webkit-transform: translateY(-100%);        transform: translateY(-100%)    }    .qsb-wrapper.qsb-wrapper--mobile-top .qsc-btn--close {        top: 100%    }}@media (max-width:767.98px) {    .qsb-wrapper.in {        -webkit-transform: translate(0);        transform: translate(0)    }    .qsb-wrapper.in .qsc-btn--close {        opacity: 1;        visibility: visible
        }}.qsb-mobile-wrapper {    position: fixed;    bottom: 0;    left: 0;    z-index: 9991;    width: 100%;    padding: 10px;    background-color: #fff;    border: 0 solid #ddd
    }.qsb-mobile-wrapper[class*=--mobile-bottom] {    border-top-width: 1px
    }.qsb-mobile-wrapper[class*=--mobile-top] {    border-bottom-width: 1px
    }.qsb-mobile-wrapper.out {    opacity: 0!important;    visibility: hidden!important
    }@media (min-width:768px) {    .qsb-mobile-wrapper {        display: none
        }}@media (min-width:992px) {    .qsb-wrapper--desktop-top {        top: 0;        bottom: auto
        }}@media (max-width:991.98px) {    .qsb-wrapper--mobile-top {        top: 0;        bottom: auto
        }}@media (min-width:992px) {    .qsb-wrapper--desktop-bottom {        top: auto;        bottom: 0
        }}@media (max-width:991.98px) {    .qsb-wrapper--mobile-bottom {        top: auto;        bottom: 0
        }}.qsb-wrapper--interactive {    opacity: 0;    visibility: hidden;    -webkit-transition: opacity .3s ease-in;    transition: opacity .3s ease-in
    }.qsb-wrapper--interactive.qsb--active {    opacity: 1;    visibility: visible
    }.qsb-product {    -webkit-box-flex: 0;    -ms-flex: 0 1 auto;    flex: 0 1 auto;    display: -webkit-box;    display: -ms-flexbox;    display: flex;    padding: 10px
    }@media (max-width:767.98px) {    .qsb-product__info {        display: none
        }}.qsb-product__info,.qsb-product__media {    -webkit-box-flex: 0;    -ms-flex: 0 1 auto;    flex: 0 1 auto
    }.qsb-product__media {    margin-right: .3em;    text-align: center
    }.qsb-product__media img {    max-height: 100%}.qsb-product__title {    margin: .08em 0 .3em;    font-family: inherit;    font-size: 1em;    color: inherit
    }.qsb-product__price {    margin: 0 0 .1em;    font-size: .875em
    }.qsb-product__current-price+.qsb-product__price-compare-at {    font-size: .75em;    color: #767676
    }.qsb-form {    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-orient: vertical;    -webkit-box-direction: normal;    -ms-flex-direction: column;    flex-direction: column;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    min-width: 0;    max-width: 75%;    margin: 0 0 0 auto;    padding: 10px
    }@media (max-width:767.98px) {    .qsb-form {        max-width: none;        margin-left: 0;        padding: 0
        }}.qsb-form__inner {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-pack: end;    -ms-flex-pack: end;    justify-content: flex-end;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center
    }@media (min-width:768px) {    .qsb-form__inner {        -ms-flex-wrap: wrap;        flex-wrap: wrap
        }}@media (min-width:992px) {    .qsb-form__inner {        -ms-flex-wrap: nowrap;        flex-wrap: nowrap
        }}@media (max-width:767.98px) {    .qsb-form__inner {        -webkit-box-orient: vertical;        -webkit-box-direction: normal;        -ms-flex-direction: column;        flex-direction: column
        }}.qsb-form__extras {    max-height: 100px;    margin-top: 10px;    font-size: 12px;    font-style: italic;    text-align: right;    -webkit-transition: max-height .25s ease-in-out;    transition: max-height .25s ease-in-out
    }@media (max-width:767.98px) {    .qsb-form__extras {        margin-bottom: 10px;        text-align: center
        }}.qsb-form__extras:empty {    max-height: 0;    margin: 0
    }.qsb-form__extras .qsb-response {    color: #3db940
    }.qsb-form__extras .qsb-error {    color: #d50000
    }.qsb-form__selects {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-pack: end;    -ms-flex-pack: end;    justify-content: flex-end;    min-width: 0
    }@media (min-width:768px) {    .qsb-form__selects {        max-width: 100%;        -webkit-box-flex: 0;        -ms-flex: 0 0 100%;        flex: 0 0 100%;        margin-bottom: 8px
        }}@media (min-width:992px) {    .qsb-form__selects {        max-width: 60%;        -webkit-box-flex: 0;        -ms-flex: 0 0 auto;        flex: 0 0 auto;        margin-bottom: 0
        }}@media (max-width:767.98px) {    .qsb-form__selects {        width: 100%    }}.qsb-form__selects .qsb-form-group {    min-width: 0
    }@media (min-width:992px) {    .qsb-form__selects--1 .qsb-form-group {        max-width: calc(100% - 10px)    }}@media (max-width:767.98px) {    .qsb-form__selects--1 .qsb-form-group {        max-width: 100%;        -webkit-box-flex: 0;        -ms-flex: 0 0 100%;        flex: 0 0 100%    }}@media (min-width:992px) {    .qsb-form__selects--2 .qsb-form-group {        max-width: calc(50% - 10px)    }}@media (max-width:767.98px) {    .qsb-form__selects--2 .qsb-form-group {        max-width: 50%;        -webkit-box-flex: 0;        -ms-flex: 0 0 50%;        flex: 0 0 50%    }}@media (min-width:992px) {    .qsb-form__selects--3 .qsb-form-group {        max-width: calc(33.33% - 10px)    }}@media (max-width:767.98px) {    .qsb-form__selects--3 .qsb-form-group {        max-width: 33.33%;        -webkit-box-flex: 0;        -ms-flex: 0 0 33.33%;        flex: 0 0 33.33%    }}.qsb-form-group+.qsb-form-group {    margin-left: 10px
    }@media (max-width:767.98px) {    .qsb-form-group+.qsb-form-group {        margin-left: 0
        }}.qs-select-faker,.qsb-quantity-input-wrapper {    position: relative;    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center;    height: 2.1875em;    background-color: #fff;    border: 1px solid rgba(0, 0, 0, .15);    border-radius: .125em
    }@media (max-width:767.98px) {    .qs-select-faker,    .qsb-quantity-input-wrapper {        border-radius: 0
        }}.qs-select-faker>label,.qsb-quantity-input-wrapper>label {    -webkit-box-flex: 0;    -ms-flex: 0 1 auto;    flex: 0 1 auto;    margin-bottom: 0;    padding: .375em 0 .375em 8px;    font-size: .8125em;    color: inherit;    opacity: .5
    }.qs-select-faker>select,.qsb-quantity-input-wrapper>select {    -webkit-appearance: none;    -moz-appearance: none;    appearance: none;    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    min-width: 160px;    margin: 0;    padding: .375em 30px .375em 8px;    background: transparent;    border: 0;    outline: 0;    -webkit-box-shadow: none;    box-shadow: none;    font-family: inherit;    font-size: 1em;    line-height: 1.3125em
    }.qs-select-faker .qsc-svg-icon,.qsb-quantity-input-wrapper .qsc-svg-icon {    position: absolute;    top: 50%;    right: 10px;    width: 11px;    -webkit-transform: translateY(-50%);    transform: translateY(-50%);    pointer-events: none
    }.qsb-quantity-input-wrapper {    min-width: 0;    margin-right: 10px
    }@media (max-width:767.98px) {    .qsb-quantity-input-wrapper {        -webkit-box-flex: 0;        -ms-flex: 0 0 50%;        flex: 0 0 50%;        margin-right: 0
        }}.qsb-form-action,.qsb-form-no-action {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    margin: 0 0 0 10px
    }@media (min-width:992px) {    .qsb-form-action,    .qsb-form-no-action {        max-width: none
        }}@media (max-width:767.98px) {    .qsb-form-action,    .qsb-form-no-action {        width: 100%;        margin: 0
        }}.qsb-quantity-input {    -webkit-box-flex: 1;    -ms-flex: 1 1 auto;    flex: 1 1 auto;    width: 3.125em!important;    height: calc(2.1875em - 2px);    margin: 0!important;    padding: .375em!important;    background: transparent!important;    border: 0!important;    outline: 0;    -webkit-box-shadow: none;    box-shadow: none;    font-family: inherit;    font-size: 1em;    line-height: 1.3125em
    }.qsb-outstock,.qsb-unavailable {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-pack: center;    -ms-flex-pack: center;    justify-content: center;    -webkit-box-align: center;    -ms-flex-align: center;    align-items: center;    height: 2.1875em;    padding: .375em 1.875em;    background-color: #767676;    color: #fff
    }@media (max-width:767.98px) {    .qsb-outstock,    .qsb-unavailable {        width: 100%    }}@media (max-width:991.98px) {    .qsb-wrapper {        display: flex;        flex-direction: row;        justify-content: space-between;        align-items: center;    }}@media (min-width:991.98px) {    .qsb-wrapper {        display: flex;        justify-content: space-between;        align-items: center;    }}@media (min-width: 768px) {    .qsb-product__info h2 {        font-size: 20px !important;    }}@media (min-width:1200px) {    .qsb-wrapper {        display: flex;        justify-content: space-between;        align-items: center;    }    .qsb-wrapper .qsb-product {        display: flex;        justify-content: center;        align-items: center;    }    .qsb-product__info h2 {        font-size: 30px !important;    }}.qikify-stickycart-app .prodct_variant li {    margin: 7px 12px 7px 12px !important;}@media (max-width: 767.98px) {    .qsb-wrapper .prodct_variant {        display: none;    }    .qsb-wrapper .quantity-submit-row {        margin: 5px 0px;    }}@media (max-width: 767px) {    .qsb-wrapper {        display: flex ;        flex-direction: row ;    }    .qsb-product {        display: flex !important;        align-items: center;        padding: 5px;    }    .qsb-product__info {        display: block !important;        font-size: 13px;        color: #222;    }  .qsb-product__price {display: flex; flex-direction: column;}.qsb-product__price span { height: 18px; }  .qsb-product__info span {        color: #222 !important;    }    .qsb-product__info .qsb-product__price-compare-at {        font-size: 10px;    }    .qsb-product__info h2 {        display: none
        }    .qsb-wrapper .quantity-submit-row__submit input[type='submit'] {        padding: 15px;    }    .qikify-stickycart-app .input-row {        margin: 0px
        }    .qikify-stickycart-app {        position: relative;    }    .qikify-stickycart-app .prodct_variant {        position: absolute;        display: flex;        flex-direction: column;        bottom: 0px;        background: #fff;        padding: 0px;        border-radius: 5px;        margin-left: 150px;        margin-bottom: 13px;    }    .qikify-stickycart-app .quantity-submit-row__submit {        margin-right: 16px !important
        }    .qikify-stickycart-app .quantity-submit-row {        margin: 0px !important
        }    .qikify-stickycart-app .desktop {        display: none
        }}@media (min-width: 768px) {    .qikify-stickycart-app .mobile {        display: none
        }}@media (min-width: 767px) {    .quantity-submit-row__submit input[type=submit] {        margin-right: 50px !important;    }}@media (max-width: 352px) {    .qsb-wrapper .prodct_variant {        margin-left: 80px;    }    .qsb-wrapper .qsb-product__price {        display: none;    }}.qsb-product .input-row {    margin: 0px;} </style>`
    $('head').append(styleSheet)

    var x = $('.quantity-submit-row__submit :input');
    window.addEventListener('scroll', () => {
        console.log('scrollc')
        var flag = isElementInViewport(x)
        if (flag) {
            $('.qsb-wrapper ').css('display', 'none');
        } else {
            $('.qsb-wrapper ').css('display', '');
        }
    })
    if ($('.qikify-stickycart-app #wk_find_zipcode')) { $('.qikify-stickycart-app #wk_find_zipcode').remove() }
    $(document).on("click touchstart", ".qikify-stickycart-app .veriant_sect", function(e) {
        var selected_variant = e.target.title
        var selected_variant_id = e.target.id
        $('.qikify-stickycart-app #SingleOptionSelector-0 option:selected').removeAttr('selected');
        $('.qikify-stickycart-app .original-selector option:selected').removeAttr('selected');

        $('.qikify-stickycart-app #SingleOptionSelector-0 option').each(function(count, item) {
            if ($(item)[0].value === selected_variant) { $(item).attr("selected", "selected"); }
        });

        $('.qikify-stickycart-app .original-selector option').each(function(count, item) {
            if ($(item)[0].value === selected_variant_id) { $(item).attr("selected", "selected"); }
        });
    });

    $(document).on("click touchstart", ".qikify-stickycart-app .mobile li", function() {
        $(this).parent().prepend($(this));
    });

    $(document).on("click touchstart", ".qikify-stickycart-app .mobile", function(e) {
        if (this.classList.contains("hello")) {
            this.classList.remove("hello");
            $('.qikify-stickycart-app .mobile li').not(":first-child").hide(300);
        } else {
            this.classList.add("hello");
            $('.qikify-stickycart-app .mobile li').show(300);
        }
    });

    $('.qikify-stickycart-app .mobile li').hide(0, function() {
        $('.qikify-stickycart-app .mobile li.activevar').show();
    });

    $(document).on('variantImageSelected', '.gallery', function(e, data) {
        var variantSrc = data.featured_image.src.split('?')[0].replace(/http[s]?:/, '');
        $(".qsb-product__media img").attr("src", variantSrc)
    });
    
    $('#sticky_add_to_cart input[type="submit"]').removeAttr('disabled');
    $('#sticky_add_to_cart input[type="submit"]').attr('value','Add To Cart');
    $('.qikify-stickycart-app #BIS_trigger').css('display','none');
    
    $(document).trigger("stickyCartLoaded");

   
});
