$(document).on(`page:load page:change`, function () {
if(Shopify.Checkout.step=="contact_information"){
    var payment_div = `
    <div class="new_checkout_step2" style="position: relative;padding: 15px;margin-top: 20px;">
        <h1 style="font-weight: 500; color:#545454; font-size:20px; margin-top:17px; margin-left:0;margin-bottom: 20px;">CHOOSE PAYMENT METHOD
        </h1>
        <form action="#">
            <div class="pay-cont">

                <div class="opt">
                    <input type="radio" id="payu" name="radio-group" checked style="width:13px;height:13px">
                    <label for="payu" style="width:50%;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/payu1.png?v=1633523127" style="margin:8px 0 8px 20px;max-width: 50px">
                    </label>
                    <div class="card-opts" style="display:flex; align-items:center; justify-content:flex-end;margin-bottom: 10px;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/master.png?v=1633523515"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/amex.png?v=1633523623"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        
                        <h3 style=" padding:5px 5px; font-size:10px; color:#c4c4c4">and many
                            more...
                        </h3>
                    </div>
                </div>

                <div class="opt">
                    <input type="radio" id="razor" name="radio-group" style="width:13px;height:13px">
                    <label class="razor" for="razor" style="width:50%;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/razorpay1.png?v=1633523849" style="margin:15px 0 15px 20px;max-width: 80px;">
                    </label>
                    <div class="card-opts" style="display:flex; align-items:center; justify-content:flex-end;margin-bottom: 10px;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/master.png?v=1633523515"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/amex.png?v=1633523623"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        
                        <h3 style=" padding:5px 5px; font-size:10px; color:#c4c4c4">and many
                            more...
                        </h3>
                    </div>
                </div>


                <div class="opt" style="border-style: none;">
                    <input type="radio" id="paytm" name="radio-group" style="width:13px;height:13px">
                    <label for="paytm" style="width:50%;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm1.png?v=1633523849" style="margin:20px 0 10px 20px;max-width: 50px;">
                    </label>
                    <div class="card-opts" style="display:flex; align-items:center; justify-content:flex-end;margin-bottom: 10px;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/master.png?v=1633523515"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/amex.png?v=1633523623"
                            style="max-width:12%; margin:0px 0 0px 10px; padding:7px 0;">
                        
                        <h3 style=" padding:5px 5px; font-size:10px; color:#c4c4c4">and many
                            more...
                        </h3>
                    </div>
                </div>

            </div>
        </form>
        <button style="width: 100%; height: 3em; margin-top:15px; background-color: #f44336; border-radius: 25px; padding:14px 20px; font-size: 15px; color:white; font-weight:bold;">PLACE ORDER</button>
        <div class="new_checkout_step2_wrapper"></div>
    </div>
    
    `
    $(payment_div).insertAfter($(".step__footer"))
    $(".new_checkout_step2_wrapper").css({
        "z-index": 10,
        "position": "absolute",
        "top": "0",
        "left": "0",
        "height": "100%",
        "width": "100%",
        "background-color": "rgba(225, 225, 225, 0.5)",
        "border-radius": "5px"
    })

    $(".section__header .section__title#main-header").text("DELIVERY ADDRESS")

    if ($("#customer_id").text().length == 0 ){
        var login_div = `<div class="login" style="display: flex;margin-bottom:20px">
                            <div class="login-col" style="display: flex;justify-content: flex-start;align-items: center;">
                                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/user_f6f5a882-bddc-4d06-af42-4f3470f9a4d7.png?v=1633594125" style="width:6%">
                                <p style="font-weight: 600; color:black; font-size:15px; margin-left:15px; padding:0;">
                                    Already have an account?</p>
                            </div>
                            <button style="float:right; font-weight: 400;width: 40%; background-color: #f44336; border-radius: 25px; padding:8px 20px; font-size: 15px; color:white;"><a style="text-decoration:none; color: white">LOGIN/SIGNUP</a></button>
                        </div>`
        $(".section--contact-information .section__header").prepend(login_div)
        $(".login button a").attr("href",$(".section__header p.layout-flex__item a").attr("href"))

    }
    // if ($("#customer_id").text().length != 0 ){
    //     $("#checkout_billing_address_id").on("change", function(){
    //         $("div[data-address-field='address1']").addClass("field--half")
    //         $("div[data-address-field='address2']").addClass("field--half")
    //         $("div[data-address-field='city']").addClass("field--half")
    //         $("div[data-address-field='phone']").addClass("field--half")
    //     })
    // }

    $("#continue_button").on("click",function(){
        window.localStorage.setItem('email', $("#checkout_email").val());

        if($("#checkout_billing_address_first_name").val()!=undefined){
            window.localStorage.setItem('first_name', $("#checkout_billing_address_first_name").val());
        }
        if($("#checkout_billing_address_last_name").val()!=undefined){
            window.localStorage.setItem('last_name', $("#checkout_billing_address_last_name").val());
        }
        if($("#checkout_billing_address_address1").val()!=undefined){
            window.localStorage.setItem('address1', $("#checkout_billing_address_address1").val());
        }
        if($("#checkout_billing_address_address2").val()!=undefined){
            window.localStorage.setItem('address2', $("#checkout_billing_address_address2").val());
        }
        if($("#checkout_billing_address_city").val()!=undefined){
            window.localStorage.setItem('city', $("#checkout_billing_address_city").val());
        }
        if($("#checkout_billing_address_zip").val()!=undefined){
            window.localStorage.setItem('zip', $("#checkout_billing_address_zip").val());
        }
        if($("#checkout_billing_address_province").val()!=undefined){
            window.localStorage.setItem('province', $("#checkout_billing_address_province").val());
        }
        if($("#checkout_billing_address_country").val()!=undefined){
            window.localStorage.setItem('country', $("#checkout_billing_address_country").val());
        }
        if($("#checkout_billing_addcheckout_billing_address_phoneress_first_name").val()!=undefined){
            window.localStorage.setItem('phone', $("#checkout_billing_address_phone").val());
        }

        if($("#checkout_shipping_address_first_name").val()!=undefined){
            window.localStorage.setItem('first_name', $("#checkout_shipping_address_first_name").val());
        }
        if($("#checkout_shipping_address_last_name").val()!=undefined){
            window.localStorage.setItem('last_name', $("#checkout_shipping_address_last_name").val());
        }
        if($("#checkout_shipping_address_address1").val()!=undefined){
            window.localStorage.setItem('address1', $("#checkout_shipping_address_address1").val());
        }
        if($("#checkout_shipping_address_address2").val()!=undefined){
            window.localStorage.setItem('address2', $("#checkout_shipping_address_address2").val());
        }
        if($("#checkout_shipping_address_city").val()!=undefined){
            window.localStorage.setItem('city', $("#checkout_shipping_address_city").val());
        }
        if($("#checkout_shipping_address_zip").val()!=undefined){
            window.localStorage.setItem('zip', $("#checkout_shipping_address_zip").val());
        }
        if($("#checkout_shipping_address_province").val()!=undefined){
            window.localStorage.setItem('province', $("#checkout_shipping_address_province").val());
        }
        if($("#checkout_shipping_address_country").val()!=undefined){
            window.localStorage.setItem('country', $("#checkout_shipping_address_country").val());
        }
        if($("#checkout_shipping_address_phone").val()!=undefined){
            window.localStorage.setItem('phone', $("#checkout_shipping_address_phone").val());
        }
        
    })
    $("#continue_button").css({
        "width": "100%",
        "height": "3em",
        "margin-top": "10px",
        "background-color": "#f44336",
        "border-radius": "25px",
        "padding": "14px 20px !important",
        "font-size": "15px",
        "color": "white",
        "font-weight": "bold"
    })
    $("#continue_button .btn__content").eq(0).css({
        "font-size": "15px",
        "font-weight": "bold"
    })

    $(".step__footer .step__footer__previous-link").hide()
    $(".section__header").css({
        "font-size": "20px",
        "font-weight": "500"
    })
    $(".section--billing-address .section__header").hide()
    $(".section--billing-address").css("padding-top","0px")

    setTimeout(function(){ 

        if($('#checkout_billing_address_zip').val()){
            var inputPincode = parseInt($('#checkout_billing_address_zip').val());
            if ($.inArray(inputPincode,pincodes) === -1) {
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

            $('#checkout_billing_address_zip').on('change', function () {
                var inputPincode = parseInt($('#checkout_billing_address_zip').val());
                if ($.inArray(inputPincode,pincodes) === -1) {
                $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
                if ($('.address-fields :nth-child(17) p').length == 0) {
                    $('.address-fields :nth-child(17) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
                }
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
                }
                else {
                $('.address-fields :nth-child(17) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                }
                if (!inputPincode) {
                $('.address-fields :nth-child(17) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                }
            });
        }

        if($('#checkout_shipping_address_zip').val()){
            var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
            if ($.inArray(inputPincode,pincodes) === -1) {
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

            $('#checkout_shipping_address_zip').on('change', function () {
                var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
                if ($.inArray(inputPincode,pincodes) === -1) {
                $('.address-fields :nth-child(18)').eq(2).addClass('field--error');
                if ($('.address-fields :nth-child(18) p').length == 0) {
                    $('.address-fields :nth-child(18) div').after(`<p class="field__message field__message--error" id="error-for-zip" style="padding:0px">Sorry, we don't deliver to this pincode.</p>`);
                }
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
                }
                else {
                $('.address-fields :nth-child(17) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                }
                if (!inputPincode) {
                $('.address-fields :nth-child(17) ').removeClass('field--error');
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                }
            });
        }

        $(".step__sections input").on('blur input', function() {
            var phoneno = /^\d{10}$/;
            if($("#checkout_shipping_address_phone").length>0){
            if($("#checkout_shipping_address_phone").val().match(phoneno)){
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                $('.address-fields :nth-child(15) p').hide()
            }
            else{
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
                if($('.address-fields :nth-child(15) p').length < 1){
                $('.address-fields :nth-child(15) .field__input-wrapper').after(`<p style="color:#e32c2b;padding:0px">Please enter correct phone number</p>`);
                }
                $('.address-fields :nth-child(15) p').show()
            }
            }

            if($("#checkout_billing_address_phone").length>0){
                console.log("phone check")
                if($("#checkout_billing_address_phone").val().match(phoneno)){
                    console.log("phone match")
                $('#continue_button').removeAttr('disabled');
                $('#continue_button').css('background-color', 'red');
                $('.address-fields :nth-child(15) p').hide()
                }
                else{
                    console.log("phone mis-match")
                $('#continue_button').attr('disabled', true);
                $('#continue_button').css('background-color', '#bdbdbd');
                if($('.address-fields :nth-child(15) p').length < 1){
                    console.log("phone mis-match errorlog")
                    $('.address-fields :nth-child(15) .field__input-wrapper').after(`<p style="color:#e32c2b;padding:0px">Please enter correct phone number</p>`);
                }
                $('.address-fields :nth-child(15) p').show()
                }
            }
        });
     }, 3000);

}


if(Shopify.Checkout.step=="payment_method"){
    var delivery_address_div = `
    <div style="display: flex;align-items: center;justify-content: space-between;background-color: rgba(225, 225, 225, 0.5);padding: 20px 10px 10px 10px;">
            <h1 style="font-weight: 500; color:#545454; font-size:20px;">DELIVERY ADDRESS</h1>
            <a class="link--small change-address-link" href="#">
                <span>Change</span>
            </a>
        </div>
    <div class="new_checkout_step1" style="position: relative;padding-bottom: 10px;">
        <div class="rand" style="padding-bottom:100px;">
            <div class="form-group field field--required field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="email">Email</label>
                    <input id="checkout-email" data-autofocus="true" class="field__input" autocomplete="shipping email"
                        aria-required="true" type="text" required />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="first">First Name</label>
                    <input data-autofocus="true" id="checkout-firstname" class="field__input" autocomplete="shipping given-name"
                        aria-required="true" type="text" required />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="phone">Last Name</label>
                    <input id="checkout-lastname" data-autofocus="true" class="field__input" autocomplete="shipping family-name"
                        aria-required="true" type="text" required />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="address">Address</label>
                    <input data-autofocus="true" id="checkout-address1" class="field__input" autocomplete="shipping address-line1"
                        aria-required="true" type="text" required />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="apt">Apartment, suite, etc.
                        (optional)</label>
                    <input id="checkout-address2" placeholder="apt" data-autofocus="true" class="field__input"
                        autocomplete="shipping address-line2" aria-required="true" type="text" />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="city">City</label>
                    <input id="checkout-city" data-autofocus="true" class="field__input" autocomplete="shipping city"
                        aria-required="true" type="text" />
                </div>
            </div>
            <div class="form-group field field--required field--half field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="phone">Phone</label>
                    <input id="checkout-phone" data-autofocus="true" class="field__input" autocomplete="shipping phone"
                        aria-required="true" type="text" />
                </div>
            </div>
            <div class="form-group field field--required field--third field--show-floating-label">
                <div class="field__input-wrapper field__input-wrapper--select">
                    <label class="field__label field__label--visible form-label" for="country">Country/Region</label>
                    <select size="1" id="checkout-country" data-autofocus="true" name="country" style="border-style: none none solid none;"
                        class="field__input field__input--select" autocomplete="shipping country" aria-required="true"
                        type="text">
                        <option data-code="IN" selected="selected" value="India">India</option>
                    </select>
                    <div class="field__caret">
                        <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                            role="presentation" aria-hidden="true" focusable="false">
                            <use xlink:href="#caret-down"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="form-group field field--required field--third field--show-floating-label">
                <div class="field__input-wrapper field__input-wrapper--select">
                    <label class="field__label field__label--visible form-label" for="state">State</label>
                    <select size="1" id="checkout-state" data-autofocus="true" class="field__input" autocomplete="shipping province" style="border-style: none none solid none;"
                        aria-required="true" type="text">
                        <option selected="selected" value="Haryana">Haryana</option>
                    </select>
                    <div class="field__caret">
                        <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                            role="presentation" aria-hidden="true" focusable="false">
                            <use xlink:href="#caret-down"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="form-group field field--required field--third field--show-floating-label">
                <div class="field__input-wrapper">
                    <label class="field__label field__label--visible form-label" for="pin">Pincode</label>
                    <input id="checkout-zip" data-autofocus="true" class="field__input" autocomplete="shipping zip"
                        aria-required="true" type="text" />
                </div>
            </div>
        </div>
        <div class="new_checkout_step1_wrapper"></div>
    </div>
    `
    
    $(".step").prepend(delivery_address_div)
    $(".new_checkout_step1_wrapper").css({"z-index": 10,
        "position": "absolute",
        "top": "0",
        "left": "0",
        "height": "100%",
        "width": "100%",
        "background-color": "rgba(225, 225, 225, 0.5)",
        "border-radius": "5px"
    })


    $("#checkout-email").val(window.localStorage.getItem('email'))
    $("#checkout-firstname").val(window.localStorage.getItem('first_name'))
    $("#checkout-lastname").val(window.localStorage.getItem('last_name'))
    $("#checkout-address1").val(window.localStorage.getItem('address1'))
    $("#checkout-address2").val(window.localStorage.getItem('address2'))
    $("#checkout-city").val(window.localStorage.getItem('city'))
    $("#checkout-zip").val(window.localStorage.getItem('zip'))
    $("#checkout-state option").attr("value",window.localStorage.getItem('province'))
    $("#checkout-state option").text(window.localStorage.getItem('province'))
    $("#checkout-country").val(window.localStorage.getItem('country'))
    $("#checkout-phone").val(window.localStorage.getItem('phone'))

    $(".step").css({
        "display": "flex",
        "flex-direction": "column"
    })
    $(".change-address-link").attr("href",$(".review-block__link .link--small").eq(0).attr("href"))
    $(".content-box__row.content-box__row--tight-spacing-vertical").hide()
    $(".section--payment-method .section__title").hide()
    $(".section--payment-method .section__text").hide()
    $(".section--payment-method").prepend(`<h1 style="font-weight: 500;color: #545454;font-size: 20px;margin-top:17px;margin-left:0;">CHOOSE PAYMENT METHOD</h1>`)
    $(".payment-method-wrapper label").eq(0).html(`<img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/payu1.png?v=1633523127" style="margin:8px 0 8px 20px;max-width: 50px;">`)
    $(".payment-method-wrapper label").eq(1).html(`<img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/razorpay1.png?v=1633523849" style="margin:15px 0 15px 20px;max-width: 80px;">`)
    $(".payment-method-wrapper label").eq(2).html(`<img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm1.png?v=1633523849" style="margin:15px 0 10px 20px;max-width: 50px;">`)

    var card_opts = `<div class="card-opts" style="display:flex; align-items:center; justify-content:flex-end;margin-bottom: 10px;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/master.png?v=1633523515"
                            style="max-width:10%; margin:0px 0 0px 10px; padding:7px 0;">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/amex.png?v=1633523623"
                            style="max-width:10%; margin:0px 0 0px 10px; padding:7px 0;">
                        <h3 style=" padding:5px 5px; font-size:10px; color:#c4c4c4">and many
                            more...
                        </h3>
                    </div>`
    $(".radio__label__accessory").eq(0).html(card_opts)
    $(".radio__label__accessory").eq(1).html(card_opts)
    $(".radio__label__accessory").eq(2).html(card_opts)
    $(".content-box__row.content-box__row--secondary").hide()
    $(".step__footer .step__footer__previous-link").hide()
    $(".section.section--billing-address").hide()
    $('input[type=radio]').change(function() {
        $(".section.section--billing-address").hide()
    });
    $(".step__footer .shown-if-js").css({
        "width": "100%",
    })
    $("#continue_button .btn__content").eq(0).text("PLACE ORDER")
    $("#continue_button").css({
        "width": "100%",
        "height": "3em",
        "margin-top": "10px",
        "background-color": "#f44336",
        "border-radius": "25px",
        "padding": "14px 20px !important",
        "font-size": "15px",
        "color": "white",
        "font-weight": "bold"
    })
    $("#continue_button .btn__content").eq(0).css({
        "font-size": "15px",
        "font-weight": "bold"
    })
    
}
});
