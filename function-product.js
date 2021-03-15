

$(document).ready(function () {
    // showLoading();

    const urlParams = new URLSearchParams(location.search);
    if (!urlParams.has('variant')) {
        $(".prodct_variant li").each(function (count, item) {
            if ($(item).hasClass('activevar')) { $(item).removeClass('activevar') }
        });
        $(".prodct_variant li:first").addClass('activevar')
    }
    else {
        $(".prodct_variant li").each(function (count, item) {
            if ($(item).hasClass('activevar')) { $(item).removeClass('activevar') }
            if (item.title == $('#SingleOptionSelector-0').find(":selected").text()) { $(item).addClass('activevar') }
        });
    }



    $('.select-color').first().click();
    $('.product-main-poh').show();

    $(".activevar").click();
    hideLoading();
    $(document).trigger("productDataLoaded");


    // Action on Click of custom variation.
    $(document).on("click touchstart", ".poh_variant , .veriant_sect", function () {
        $('.poh_variant,.veriant_sect').removeClass('activevar');
        $(this).addClass('activevar');
           showLoading();
        var current_variant = $(this).attr('id');
        var current_title = $(this).attr('title');
        $('.product-variation').find('#ProductSelect-product-custom').val(current_variant);
        $('.clickyboxes').find('a[data-value="' + current_title + '"]').trigger('click');


        setTimeout(function(){ hideLoading();}, 500);


    });

    $(document).on('keyup', '#product-qnty', function () {
        $('#Quantity').val($(this).val());
    });

    $(document).on('click', 'button.btn.btn-primary.btn-lg.btn-block', function () {
        $('#AddToCart-product-custom').click();
    });

    $(document).on('click', 'button.btn.btn-secondary.btn-lg.btn-block', function () {
        $('.shopify-payment-button__button').click();
    });

    $(document).on('click', '.card-header', function () {
        $('.collapse').removeClass('show');
        $(this).next('.collapse').addClass('show');
    });
    $(".btn--sold-out").insertBefore(".row.mt-3");

    // setTimeout(() => {
    //     hideLoading();
        
    // }, 1000);

});
function showLoading() {
    $(".loading").show();
}
function hideLoading() {
    $(".loading").hide();
}
