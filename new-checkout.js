$(document).on(`page:load page:change`, function () {


    setTimeout(function () {
        console.log("DDIVYAM")
//         if ($('#checkout_billing_address_zip').val()) {
//             var inputPincode = parseInt($('#checkout_billing_address_zip').val());
//             if ($.inArray(inputPincode, pincodes) === -1) {
//                 $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
//                 if ($('.address-fields :nth-child(18) p').length == 0) {
//                     $('.address-fields :nth-child(18) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
//                 }
//                 $('#continue_button').attr('disabled', true);
//                 $('#continue_button').css('background-color', '#bdbdbd');
//             }
//             else {
//                 $('.address-fields :nth-child(18) ').removeClass('field--error');
//                 $('#continue_button').removeAttr('disabled');
//                 $('#continue_button').css('background-color', 'red');
//             }
//             if (!inputPincode) {
//                 $('.address-fields :nth-child(18) ').removeClass('field--error');
//                 $('#continue_button').removeAttr('disabled');
//                 $('#continue_button').css('background-color', 'red');
//             }
//         }
//         $('#checkout_billing_address_zip').on('change', function () {
//             var inputPincode = parseInt($('#checkout_billing_address_zip').val());
//             if ($.inArray(inputPincode, pincodes) === -1) {
//                 $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
//                 if ($('.address-fields :nth-child(18) p').length == 0) {
//                     $('.address-fields :nth-child(18) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
//                 }
//                 $('#continue_button').attr('disabled', true);
//                 $('#continue_button').css('background-color', '#bdbdbd');
//             }
//             else {
//                 $('.address-fields :nth-child(18) ').removeClass('field--error');
//                 $('#continue_button').removeAttr('disabled');
//                 $('#continue_button').css('background-color', 'red');
//             }
//             if (!inputPincode) {
//                 $('.address-fields :nth-child(18) ').removeClass('field--error');
//                 $('#continue_button').removeAttr('disabled');
//                 $('#continue_button').css('background-color', 'red');
//             }
//         });


        if ($('#checkout_shipping_address_zip').val()) {
            var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
            if ($.inArray(inputPincode, pincodes) === -1) {
                $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
                if ($('.address-fields :nth-child(18) p').length == 0) {
                    $('.address-fields :nth-child(18) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
                }
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
            }
            else {
                $('.address-fields :nth-child(18) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
            }
            if (!inputPincode) {
                $('.address-fields :nth-child(18) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
            }
        }
        $('#checkout_shipping_address_zip').on('change', function () {
            var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
            if ($.inArray(inputPincode, pincodes) === -1) {
                $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
                if ($('.address-fields :nth-child(18) p').length == 0) {
                    $('.address-fields :nth-child(18) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
                }
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
            }
            else {
                $('.address-fields :nth-child(18) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
            }
            if (!inputPincode) {
                $('.address-fields :nth-child(18) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
            }
        });


        $(".step__sections input").on('blur input', function () {
            var phoneno = /^\d{10}$/;
            if ($("#checkout_shipping_address_phone").length > 0) {
                if ($("#checkout_shipping_address_phone").val().match(phoneno)) {
                    $('#continue_button').removeAttr('disabled');
                    $('#continue_button').css('background-color', 'red');
                    $('.address-fields :nth-child(15) p').hide()
                }
                else {
                    $('#continue_button').attr('disabled', true);
                    $('#continue_button').css('background-color', '#bdbdbd');
                    if ($('.address-fields :nth-child(15) p').length < 1) {
                        $('.address-fields :nth-child(15) .field__input-wrapper').after(`<p style="color:#e32c2b;padding:0px;padding-left: 6px;">Please enter correct phone number</p>`);
                    }
                    $('.address-fields :nth-child(15) p').show()
                }
            }

//             if ($("#checkout_billing_address_phone").length > 0) {
//                 if ($("#checkout_billing_address_phone").val().match(phoneno)) {
//                     $('#continue_button').removeAttr('disabled');
//                     $('#continue_button').css('background-color', 'red');
//                     $('.address-fields :nth-child(15) p').hide()
//                 }
//                 else {
//                     $('#continue_button').attr('disabled', true);
//                     $('#continue_button').css('background-color', '#bdbdbd');
//                     if ($('.address-fields :nth-child(15) p').length < 1) {
//                         $('.address-fields :nth-child(15) .field__input-wrapper').after(`<p style="color:#e32c2b;padding:0px;padding-left: 6px;">Please enter correct phone number</p>`);
//                     }
//                     $('.address-fields :nth-child(15) p').show()
//                 }
//             }
        });
    }, 3000);
    
    $('.order-summary__section--discount .fieldset').append(`<div class="field">
<div class="commander-wrapper">
    <input placeholder="Discount Code" class="commander-input" data-discount-field="true" autocomplete="off" aria-required="true" size="30" type="text" name="checkout[reduction_code]">
    </div>
    <button name="button" type="submit" class="commander-btn" aria-busy="false">
        <span class="btn__content visually-hidden-on-mobile" aria-hidden="true">
            Apply
        </span>
        <span class="visually-hidden">
            Apply Discount Code
        </span>
        <svg class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile" aria-hidden="true" focusable="false"> <use xlink:href="#arrow"></use> </svg>
        <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" aria-hidden="true" focusable="false"> <use xlink:href="#spinner-button"></use> </svg>
</button>      </div>
</div>`)
    $('.commander-input')[0].style.display = "none";
    $('.commander-btn')[0].style.display = "none";
    var token = '';
    $.get('/cart.js').then(response=>{
        token = $.parseJSON(response).token
    }
    )
    $(".order-summary__section--discount .field__input-btn").on("click touchstart", function(event) {
        event.preventDefault();
        var basecode = $("#checkout_reduction_code")[0].value;
        $.ajax({
            type: "POST",
            url: "https://boat-api.farziengineer.co/discount",
            headers: {
                "Content-Type": "application/json"
            },
            data: `{"code":"${basecode}", "cartId":"${token}"}`,
        }).then((response)=>{
            if (response == "true" || response == "True") {
                $(".commander-input")[0].value = basecode;
                $(".commander-btn").click();
                setTimeout(function() {
                    var couponlog_postrequest = {
                        url: "https://boat-api.farziengineer.co/couponlog",
                        method: "POST",
                        timeout: 0,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    };
                    var v = setInterval(function() {
                        if ($(".edit_checkout .fieldset:last p").length != 0 && $(".edit_checkout .fieldset:last p").css("display") != "none") {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".edit_checkout .fieldset:last p").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        } else if ($(".notice.notice--warning .notice__content .notice__text").text().length > 0) {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".notice.notice--warning .notice__content .notice__text").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        } else if ($(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").length != 0) {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        }
                    }, 1000);
                }, 3000);
            }
        }
        ).fail(()=>{
            $(".commander-input")[0].value = basecode;
            $(".commander-btn").click();
            setTimeout(function() {
                var couponlog_postrequest = {
                    url: "https://boat-api.farziengineer.co/couponlog",
                    method: "POST",
                    timeout: 0,
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                var v = setInterval(function() {
                    if ($(".edit_checkout .fieldset:last p").length != 0 && $(".edit_checkout .fieldset:last p").css("display") != "none") {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".edit_checkout .fieldset:last p").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    } else if ($(".notice.notice--warning .notice__content .notice__text").text().length > 0) {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".notice.notice--warning .notice__content .notice__text").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    } else if ($(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").length != 0) {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    }
                }, 1000);
            }, 3000);
        }
        );
    });
    $(".edit_checkout .field__input-btn.btn").eq(0).on("click touchstart", function(event) {
        event.preventDefault();
        var basecode = $("#checkout_reduction_code_mobile")[0].value;
        $.ajax({
            type: "POST",
            url: "https://boat-api.farziengineer.co/discount",
            headers: {
                "Content-Type": "application/json"
            },
            data: `{"code":"${basecode}", "cartId":"${token}"}`,
        }).then((response)=>{
            if (response == "true" || response == "True") {
                $(".commander-input")[0].value = basecode;
                $(".commander-btn").click();
                setTimeout(function() {
                    var couponlog_postrequest = {
                        url: "https://boat-api.farziengineer.co/couponlog",
                        method: "POST",
                        timeout: 0,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    };
                    var v = setInterval(function() {
                        if ($(".edit_checkout .fieldset:last p").length != 0 && $(".edit_checkout .fieldset:last p").css("display") != "none") {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".edit_checkout .fieldset:last p").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        } else if ($(".notice.notice--warning .notice__content .notice__text").text().length > 0) {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".notice.notice--warning .notice__content .notice__text").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        } else if ($(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").length != 0) {
                            couponlog_postrequest.data = JSON.stringify({
                                coupon: basecode,
                                log: $(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").text(),
                            });
                            $.ajax(couponlog_postrequest).done(function(response) {
                                
                            });
                            clearInterval(v);
                        }
                    }, 1000);
                }, 3000);
            }
        }
        ).fail(()=>{
            $(".commander-input")[0].value = basecode;
            $(".commander-btn").click();
            setTimeout(function() {
                var couponlog_postrequest = {
                    url: "https://boat-api.farziengineer.co/couponlog",
                    method: "POST",
                    timeout: 0,
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                var v = setInterval(function() {
                    if ($(".edit_checkout .fieldset:last p").length != 0 && $(".edit_checkout .fieldset:last p").css("display") != "none") {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".edit_checkout .fieldset:last p").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    } else if ($(".notice.notice--warning .notice__content .notice__text").text().length > 0) {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".notice.notice--warning .notice__content .notice__text").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    } else if ($(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").length != 0) {
                        couponlog_postrequest.data = JSON.stringify({
                            coupon: basecode,
                            log: $(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").text(),
                        });
                        $.ajax(couponlog_postrequest).done(function(response) {
                            
                        });
                        clearInterval(v);
                    }
                }, 1000);
            }, 3000);
        }
        );
    });
    
});
