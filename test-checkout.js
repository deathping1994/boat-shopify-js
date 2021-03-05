$(document).on(`page:load`, function () {
  var style = `<style>
        button#continue_button {font-size: 16px;font-weight: normal!important;padding: 15px 25px!important;}
        #checkout_reduction_code{
            border: none;
          font-size: 17px;
        }
        #checkout_reduction_code_mobile{
          border: none;
        }
        .wrap, .sidebar{
         background-color: white;
        }
        .field__input-btn{
         background-color: #d3d3d3 !important;
         border: none;
         color: #fff;
          font-size: 17px;
        }
        .field__input-btn:hover{
          background-color: #d3d3d3 !important;
         border: none;
         color: #fff;
        }
        .field__input-btn-wrapper{
         border-width: 1px;
          border-color: #E4E4E4;
          border-style: solid;
          border-radius: 6px;
        }
        @media only screen and (min-width: 769px) {
         .main{
            border-style: solid;
          border-width: 0 1px 0 0;
          border-color: #d3d3d3;
         }
        }      
        .breadcrumb__item .icon-svg{
         display: none;
        }
        .order-summary-toggle .wrap{
         background-color: #fafafa;
        }      
        .offer{
          margin-bottom: 4px;
          font-size: 17px !important;
          font-weight: 500 !important;
          font: inherit;
          margin: 6px;
        }      
        .offer2{
          margin-bottom: 4px;
          font-size: 17px !important;
          font-weight: 500 !important;
          font: inherit;
          margin: 6px 0;
        }
        .plus-img{
          height: 17px;
        }   
        .content{
         background-color: white;
        }
        .content-box{
         border: none;
          border-radius: 0;
          background-color: #FFF;
          padding: 0;
        }
        .review-block{
         background-color: #fafafa;
          padding: 15px 15px;
          margin: 0 0 20px 0;
          border-top: none !important;
        }
        .radio-wrapper{
          border: none !important;        
        }
        .section--payment-method{
         margin: 16px 16px 25px 16px;
          padding: 25px 15px;
          background-color: #fafafa !important;
        }
        .section--billing-address, .section--shipping-method, .section--contact-information, .section--shipping-address{
         margin: 16px 16px 25px 16px;
          padding: 15px;
          background-color: #fafafa !important;
        }
        .section--contact-information{
         padding-top: 15px !important;
        }
        .section--reductions{
          margin: 16px 16px 25px 16px;
          padding: 15px;
        }
        .step__footer{
           margin: 16px 16px 25px 16px;
           padding: 15px;
        }      
        .section__title{
         font-weight: 500;
        }
        .div-ship{
         margin: 16px 16px 25px 16px;
          padding: 15px;
          background-color: #fafafa;
          font-weight: 500;
        }      
        .div-pay{
          margin: 16px 16px 25px 16px;
          padding: 15px;
          background-color: #fafafa;
          font-weight: 500;
        }      
        .div-1{
          padding: 4px;
          height: 18px;
          width: 18px;
          display: inline-block;
          border-radius: 50%;
          text-align: center;        
        }      
        .red{
         background-color: #ed1d26;        
        }
        .space{
         letter-spacing: 1.5px;
          font-weight: 900;
          color: #bdbdbd;
        }
        .grey{
         background-color :#bdbdbd;
        }
        .best-offers{
          margin-top: 18px;
        }
        .txt{
         font-weight: 500;
          font-size: 14px;
          color: white;
        }
        .breadcrumb{
          padding-left: 35%;
        }
        .offer-box{
         background-color: #f2f2f2;
          margin: 10px 0;
          padding: 18px 13px;
          border-radius: 4px;
        }
        .offer-box-2{
         width: 80%;
          display: inline-block;
        }
        .ship{
            margin: 16px;
          padding: 15px;
          background-color: #fafafa;
          font-weight: 500;
          color: #bdbdbd;
        }
        .apply-button{
         width: 20%;
          display: inline-block;
          text-align: center;
        }
        .apply-button .button{
          position: relative;
          bottom: 15px;
          font-weight: 700;
          font-size: 16px;
        }
        .down-arrow{
          float: right;
        }
        .img-arrow{
         height: 12px;
        }
      </style>`
  $('head').append(style);

  var listItems = $("header nav ol li");
  len = listItems.length
  if (len == 4) { listItems[0].remove() }
  var listItems = $("header nav ol li");

  listItems.each(function (idx, li) {
    var product = $(li).find('span');
    product.empty();
    var index = idx + 1;
    product.append('<div class="div-1 grey txt">' + index + '</div>');
    product.after('<span class="space">----</span>')
  });

  listItems.each(function (idx, li) {
    var product = $(li).find('a');
    product.empty();
    var index = idx + 1;
    product.append('<div class="div-1 red txt">' + index + '</div>');
    product.after('<span class="space">----</span>')
  });

  listItems.each(function (idx, li) {
    var x = $(li).find('.div-1')
    if ($(li).hasClass('breadcrumb__item breadcrumb__item--current')) { x.removeClass('grey'); x.addClass('red'); }
    if ($(li).hasClass('breadcrumb__item breadcrumb__item--completed')) { x.removeClass('grey'); x.addClass('red'); }
    if ($(li).hasClass('breadcrumb__item breadcrumb__item--blank')) { x.removeClass('red'); x.addClass('grey'); }
  });

  if ($("header nav ol li:nth-child(1)").hasClass('breadcrumb__item breadcrumb__item--current') && $("header nav ol li:nth-child(2)").hasClass('breadcrumb__item breadcrumb__item--completed')) {
    var x = $("header nav ol li:nth-child(2)").find('.div-1');
    x.removeClass('red'); x.addClass('grey');
  }
  if ($("header nav ol li:nth-child(1)").hasClass('breadcrumb__item breadcrumb__item--current') && $("header nav ol li:nth-child(3)").hasClass('breadcrumb__item breadcrumb__item--completed')) {
    var x = $("header nav ol li:nth-child(3)").find('.div-1');
    x.removeClass('red'); x.addClass('grey');
  }
  if ($("header nav ol li:nth-child(2)").hasClass('breadcrumb__item breadcrumb__item--current') && $("header nav ol li:nth-child(3)").hasClass('breadcrumb__item breadcrumb__item--completed')) {
    var x = $("header nav ol li:nth-child(3)").find('.div-1');
    x.removeClass('red'); x.addClass('grey');
  }
  $("header nav ol li").find('.space')[2].remove()

  if ($("header nav ol li:nth-child(2)").find('.div-1').hasClass('red')) {
    $("header nav ol li:nth-child(1)").find('.space').css('color', '#ed1d26')
  }
  else { $("header nav ol li:nth-child(1)").find('.space').css('color', '#bdbdbd') }

  if ($("header nav ol li:nth-child(3)").find('.div-1').hasClass('red')) {
    $("header nav ol li:nth-child(2)").find('.space').css('color', '#ed1d26')
  }
  else { $("header nav ol li:nth-child(2)").find('.space').css('color', '#bdbdbd') }


  $("#order-summary > div > div.order-summary__section.order-summary__section--discount > form:nth-child(3) > div.fieldset > div").before("<h2 class='offer'>Promotional Offer</h2>");
  $("body > div > div > div > main > div.step > div > div.section.section--reductions.hidden-on-desktop > div.section__header > h2").html("Discount Code");
  $("#checkout_reduction_code_mobile").attr("placeholder", "Discount Code");
  $("#checkout_reduction_code").attr("placeholder", "Discount Code");
  $(".link--small").html("<img class='plus-img' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4My45NDcgMzgzLjk0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBvbHlnb24gcG9pbnRzPSIwLDMwMy45NDcgMCwzODMuOTQ3IDgwLDM4My45NDcgMzE2LjA1MywxNDcuODkzIDIzNi4wNTMsNjcuODkzICAgICIgZmlsbD0iI2VkMWQyNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wb2x5Z29uPgoJCQk8cGF0aCBkPSJNMzc3LjcwNyw1Ni4wNTNMMzI3Ljg5Myw2LjI0Yy04LjMyLTguMzItMjEuODY3LTguMzItMzAuMTg3LDBsLTM5LjA0LDM5LjA0bDgwLDgwbDM5LjA0LTM5LjA0ICAgICBDMzg2LjAyNyw3Ny45MiwzODYuMDI3LDY0LjM3MywzNzcuNzA3LDU2LjA1M3oiIGZpbGw9IiNlZDFkMjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==' />");

});

$(document).on(`page:load page:change`, function () {

  $('#checkout_reduction_code').on('input', function () {
    if ($('#checkout_reduction_code').length > 0 && $('#checkout_reduction_code').val() != '') {
      $('.field__input-btn').attr('style', 'background : #ea2127 !important')
    }
    else { $('.field__input-btn').attr('style', 'background :#d3d3d3 !important') }
  });

  $('#checkout_shipping_address_phone').removeAttr('data-phone-formatter');
  $('#checkout_shipping_address_phone').removeAttr('data-phone-formatter-country-code');
  $('#checkout_shipping_address_phone').removeAttr('data-phone-formatter-country-select');
  $('#checkout_shipping_address_phone').attr('maxlength', '10');

  var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
  if ($.inArray(inputPincode,pincodes) === -1) {
    $('.address-fields :nth-child(17)').addClass('field--error');
    if ($('.address-fields :nth-child(17) p').length == 0) {
      $('.address-fields :nth-child(17) div').after(`<p class="field__message field__message--error" id="error-for-zip">Sorry, we don't deliver to this pincode.</p>`);
    }
    $('#continue_button').attr('disabled', true);
    $('#continue_button').css('background-color', '#bdbdbd');
  }
  else {
    $('.address-fields :nth-child(17) ').removeClass('field--error');
    $('#continue_button').removeAttr('disabled');
    $('#continue_button').removeAttr('style');
  }
  if (!inputPincode) {
    $('.address-fields :nth-child(17) ').removeClass('field--error');
    $('#continue_button').removeAttr('disabled');
    $('#continue_button').removeAttr('style');
  }

  $('#checkout_shipping_address_zip').on('change', function () {
    var inputPincode = parseInt($('#checkout_shipping_address_zip').val());
    if ($.inArray(inputPincode,pincodes) === -1) {
      $('.address-fields :nth-child(17)').addClass('field--error');
      if ($('.address-fields :nth-child(17) p').length == 0) {
        $('.address-fields :nth-child(17) div').after(`<p class="field__message field__message--error" id="error-for-zip">Sorry, we don't deliver to this pincode.</p>`);
      }
      $('#continue_button').attr('disabled', true);
      $('#continue_button').css('background-color', '#bdbdbd');
    }
    else {
      $('.address-fields :nth-child(17) ').removeClass('field--error');
      $('#continue_button').removeAttr('disabled');
      $('#continue_button').removeAttr('style');
    }
    if (!inputPincode) {
      $('.address-fields :nth-child(17) ').removeClass('field--error');
      $('#continue_button').removeAttr('disabled');
      $('#continue_button').removeAttr('style');
    }
  });
  if($('.reduction-code__text')[1]){
    var txt = $('.reduction-code__text')[1].innerHTML; 
    var code = new RegExp('[Ii][Nn][Ff][Oo][0-9a-zA-Z]+$')
    if(code.test(txt)){
      $.get('/cart.js').then(response => {
        var GETcart = response;
        console.log(GETcart);
        GETcart = $.parseJSON(GETcart)
        var flag = 0;
        var prod = [2162816352354, 2219059478626, 4517297586274]
        for (var i = 0; i < GETcart.items.length; i++) {
          if (prod.includes(GETcart.items[i].product_id)) {
            var variant = GETcart.items[i].variant_id
            if (flag == 0) {
              if (GETcart.items[i].quantity > 1) {
                if(GETcart.items.length == 1){
                  $.post('/cart/update.js', "updates[" + variant + "]=1").then(() => {window.location.reload()})
                }
                else{$.post('/cart/update.js', "updates[" + variant + "]=1")}
              }
            }
            if (flag != 0) {
              if( i == (GETcart.items.length - 1)){
                $.post('/cart/update.js', "updates[" + variant + "]=0").then(() => {window.location.reload()})
              }
              else{
                $.post('/cart/update.js', "updates[" + variant + "]=0")
              }
            }
            flag = 1;
          }
        }
      })
    }
  }

  // if($('.reduction-code__text')[1]){
  //   if($('.reduction-code__text')[1].innerHTML == "INFO"){
  //     $('.field__message.field__message--error')[1].innerHTML = "This coupon can only be applied to one product."
  //     $('.field__message.field__message--error')[1].style.display = "block";
  //   }
  // }

  $('.field__input-btn.btn').on("click", function (event) {
    var txt = $('#checkout_reduction_code')[0].value;
    var code = new RegExp('[Ii][Nn][Ff][Oo][0-9a-zA-Z]+$')
    if (code.test(txt)) {
      if ($('.reduction-code__text')[0]) {
        if ($('.reduction-code__text')[0].innerText == "MASKON (-Rs. 499.00)") {
          return
        }
      }
      else {
        $.get('/cart.js').then(response => {
          var GETcart = response;
          console.log(GETcart);
          GETcart = $.parseJSON(GETcart)
          var flag = 0;
          var prod = [2162816352354, 2219059478626, 4517297586274]
          for (var i = 0; i < GETcart.items.length; i++) {
            if (prod.includes(GETcart.items[i].product_id)) {
              var variant = GETcart.items[i].variant_id
              if (flag == 0) {
                if (GETcart.items[i].quantity > 1) {
                  if(GETcart.items.length == 1){
                    $.post('/cart/update.js', "updates[" + variant + "]=1").then(() => {window.location.reload()})
                  }
                  else{$.post('/cart/update.js', "updates[" + variant + "]=1")}
                }
              }
              if (flag != 0) {
                if( i == (GETcart.items.length - 1)){
                  $.post('/cart/update.js', "updates[" + variant + "]=0").then(() => {window.location.reload()})
                }
                else{
                  $.post('/cart/update.js', "updates[" + variant + "]=0")
                }
              }
              flag = 1;
            }
          }
        }
        );
      }
    }
  })

});
