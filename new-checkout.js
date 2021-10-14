$(document).on(`page:load page:change`, function () {


    setTimeout(function () {
        console.log("DDIVYAM")
        if ($('#checkout_billing_address_zip').val()) {
            var inputPincode = parseInt($('#checkout_billing_address_zip').val());
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
        $('#checkout_billing_address_zip').on('change', function () {
            var inputPincode = parseInt($('#checkout_billing_address_zip').val());
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

            if ($("#checkout_billing_address_phone").length > 0) {
                if ($("#checkout_billing_address_phone").val().match(phoneno)) {
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
        });
    }, 3000);

});
