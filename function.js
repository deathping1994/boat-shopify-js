var appurl = "https://app.boat-lifestyle.com/";
var shop_name = Shopify.shop;

var POHproductDetail = "";
var pohpro_id = meta.product.id;
var shopId = "";

$(document).ready(function () {
  showLoading();

  const urlParams = new URLSearchParams(location.search);
  if (!urlParams.has("variant")) {
    $(".prodct_variant li").each(function (count, item) {
      if ($(item).hasClass("activevar")) {
        $(item).removeClass("activevar");
      }
    });
    $(".prodct_variant li:first").addClass("activevar");
  } else {
    $(".prodct_variant li").each(function (count, item) {
      if ($(item).hasClass("activevar")) {
        $(item).removeClass("activevar");
      }
      if (item.title == $("#SingleOptionSelector-0").find(":selected").text()) {
        $(item).addClass("activevar");
      }
    });
  }
  //$(".prodct_variant li:first").addClass("activevar");
  /* $(".prodct_variant li").each(function(count,item){
        if($(item).hasClass('activevar')){$(item).removeClass('activevar')}
        if(item.title ==  $('#SingleOptionSelector-0').find(":selected").text()){ $(item).addClass('activevar') }
   });*/

  // Get product data
  showLoading();
  $.ajax({
    url: appurl+"getproductdata.php",
    type: "POST",
    data: { shop_name: shop_name, product_id: pohpro_id },
    dataType: "json",
    success: function (response) {
      if (response.result == "true" && response.data != null) {
        POHproductDetail = response.data;
        shopId = response.data.shop_id;

        $(".select-color").first().click();
        $(".product-main-poh").show();

        $(".activevar").click();

        if (response.data.video != "" && response.data.video != null) {
          $(".veriant_sect.videoIframe").attr("data-src", response.data.video);
        }
        if (response.data.video != "" && response.data.video != null) {
          $(".video").attr("video-url", response.data.video);
        }
      }
      hideLoading();
      $(document).trigger("productDataLoaded");
    },
  });

  // Action on Click of custom variation.
  $(document).on(
    "click touchstart",
    ".poh_variant , .veriant_sect",
    function () {
      if (shop_name == "boatlifestylein.myshopify.com") {
        $(".poh_variant,.veriant_sect").removeClass("activevar");
        $(this).addClass("activevar");
        showLoading();
        var current_variant = $(this).attr("id");
        var current_title = $(this).attr("title");
        $(".product-variation")
          .find("#ProductSelect-product-custom")
          .val(current_variant);
        $(".clickyboxes")
          .find('a[data-value="' + current_title + '"]')
          .trigger("click");

        $.each(POHproductDetail[current_variant], function (section, v) {
          $.each(this, function (k, v) {
            if (section == "section-1") {
              $(".product-topbanner").attr("src", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".product-topbanner").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".main-product-image-box").find("img").attr("src", "");
              $(".main-product-image-box")
                .find("img")
                .attr("src", v.section_image);
              $(".product-buyGrid")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".product-buyGrid").html(v.description);
              }
            } else if (section == "section-2") {
              $(".productpart-twoImage").find("img").removeAttr("src");
              $(".productpart-twoImage").find("img").addClass("lazyload");
              $(".productpart-twoImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-two").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-two").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-two-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-two-content").html(v.description);
              }
            } else if (section == "section-3") {
              $(".productpart-thirdImage").find("img").removeAttr("src");
              $(".productpart-thirdImage").find("img").addClass("lazyload");
              $(".productpart-thirdImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-third").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-third").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-third-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-third-content").html(v.description);
              }
            } else if (section == "section-5") {
              $(".productpart-fourthImage").find("img").removeAttr("src");
              $(".productpart-fourthImage").find("img").addClass("lazyload");
              $(".productpart-fourthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-fourth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-fourth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-fourth-content,.productpart-fourthImage")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-fourth-content").html(v.description);
              }

              var descriptionhtml = "";
              descriptionhtml += '<table class="descsection4table">';
              $.each(v.description_table, function (index, value) {
                descriptionhtml += "<tr>";
                descriptionhtml += "<td>" + value.tablefield + "</td>";
                descriptionhtml += "<td>" + value.fieldvalue + "</td>";
                descriptionhtml += "</tr>";
              });

              descriptionhtml += "</table>";
              $(".descsection4table").remove();
              $(".productSpecificationbox").append(descriptionhtml);
            } else if (section == "section-4") {
              $(".productpart-fourthImageA").find("img").removeAttr("src");
              $(".productpart-fourthImageA").find("img").addClass("lazyload");
              $(".productpart-fourthImageA")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-fourthA").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-fourthA").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }

              if (v.description != "" && v.description != null) {
                $(".productpart-fourth-contentA").html(v.description);
              }
              $(".productpart-fourth-contentA,.productpart-fourthImageA")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              var descriptionhtml = "";
              descriptionhtml += '<table class="descsection4table">';
              $.each(v.description_table, function (index, value) {
                descriptionhtml += "<tr>";
                descriptionhtml += "<td>" + value.tablefield + "</td>";
                descriptionhtml += "<td>" + value.fieldvalue + "</td>";
                descriptionhtml += "</tr>";
              });

              descriptionhtml += "</table>";
              $(".descsection4table").remove();
              $(".productSpecificationbox").append(descriptionhtml);
            } else if (section == "section-7") {
              $(".productpart-footerImage").find("img").removeAttr("src");
              $(".productpart-footerImage").find("img").addClass("lazyload");
              $(".productpart-footerImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-footer").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-footer").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".ac-tab-content-faq,.productpart-footerImage")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              $(".ac-tab-content-heading_big").html(v.heading_big);
              $(".ac-tab-content-heading_small").html(v.heading_small);
              if (v.whats_new != "" && v.whats_new != null) {
                $(".ac-tab-content-whatsnew").html(v.whats_new);
              }

              if (v.faq != "" && v.faq != null) {
                $(".ac-tab-content-faq").html(v.faq);
              }

              //if(response.data.video != '' && response.data.video != null){
              //    $(".video").attr("video-url", response.data.video);
              //}
              /*if(v.section_video != '' && v.section_video != null){
                            $(".video").attr("video-url", v.section_video);                        
                        }*/

              // var descriptionhtml = '';
              // descriptionhtml += '<table class="descsection4table">';
              /* $.each(v.description_table, function(index, value) {
                            
                          
                                descriptionhtml += '<tr>';
                                descriptionhtml += '<td>'+value.tablefield+'</td>';
                                descriptionhtml += '<td>'+value.fieldvalue+'</td>';
                                descriptionhtml += '</tr>';
                                
                        });*/

              //descriptionhtml += '</table>';
              //$('.descsection4table').remove();
              //$('.productSpecificationbox').append(descriptionhtml);
            } else {
              $(".productpart-fifthImage").find("img").removeAttr("src");
              $(".productpart-fifthImage").find("img").addClass("lazyload");
              $(".productpart-fifthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-fifth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-fifth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-fifth-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-fifth-content").html(v.description);
              }
            }

            //demo test product
            if (section == "section-1") {
              $(".product-topbanner").attr("src", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".product-topbanner").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".main-product-image-box").find("img").attr("src", "");
              $(".main-product-image-box")
                .find("img")
                .attr("src", v.section_image);
              $(".product-buyGrid")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".product-buyGrid").html(v.description);
              }
            } else if (section == "section-2") {
              $(".new-productpart-twoImage").find("img").removeAttr("src");
              $(".new-productpart-twoImage").find("img").addClass("lazyload");
              $(".new-productpart-twoImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new-productPart-two").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new-productPart-two").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".new-productpart-two-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".new-productpart-two-content").html(v.description);
              }
            } else if (section == "section-3") {
              $(".new-productpart-thirdImage").find("img").removeAttr("src");
              $(".new-productpart-thirdImage").find("img").addClass("lazyload");
              $(".new-productpart-thirdImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new-productPart-third").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new-productPart-third").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".new-productpart-third-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".new-productpart-third-content").html(v.description);
              }
            } else if (section == "section-5") {
              $(".new-productpart-fourthImage").find("img").removeAttr("src");
              $(".new-productpart-fourthImage")
                .find("img")
                .addClass("lazyload");
              $(".new-productpart-fourthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new-productPart-fourth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new-productPart-fourth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".new-productpart-fourth-content,.new-productpart-fourthImage")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".new-productpart-fourth-content").html(v.description);
              }

              var descriptionhtml = "";
              descriptionhtml += '<table class="descsection4table">';
              $.each(v.description_table, function (index, value) {
                descriptionhtml += "<tr>";
                descriptionhtml += "<td>" + value.tablefield + "</td>";
                descriptionhtml += "<td>" + value.fieldvalue + "</td>";
                descriptionhtml += "</tr>";
              });

              descriptionhtml += "</table>";
              $(".descsection4table").remove();
              $(".productSpecificationbox").append(descriptionhtml);
            } else if (section == "section-4") {
              $(".new--fourthImageA").find("img").removeAttr("src");
              $(".new--fourthImageA").find("img").addClass("lazyload");
              $(".new--fourthImageA")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new--fourthA").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new--fourthA").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }

              if (v.description != "" && v.description != null) {
                $(".new--fourth-contentA").html(v.description);
              }
              $(".new--fourth-contentA,.new--fourthImageA")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              var descriptionhtml = "";
              descriptionhtml += '<table class="descsection4table">';
              $.each(v.description_table, function (index, value) {
                descriptionhtml += "<tr>";
                descriptionhtml += "<td>" + value.tablefield + "</td>";
                descriptionhtml += "<td>" + value.fieldvalue + "</td>";
                descriptionhtml += "</tr>";
              });

              descriptionhtml += "</table>";
              $(".descsection4table").remove();
              $(".productSpecificationbox").append(descriptionhtml);
            } else if (section == "section-7") {
              $(".new-productpart-footerImage").find("img").removeAttr("src");
              $(".new-productpart-footerImage")
                .find("img")
                .addClass("lazyload");
              $(".new-productpart-footerImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new-productPart-footer").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new-productPart-footer").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".ac-tab-content-faq,.new-productpart-footerImage")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              $(".ac-tab-content-heading_big").html(v.heading_big);
              $(".ac-tab-content-heading_small").html(v.heading_small);
              if (v.whats_new != "" && v.whats_new != null) {
                $(".ac-tab-content-whatsnew").html(v.whats_new);
              }
              console.log("sssssss" + v.faq);
              if (v.faq != "" && v.faq != null) {
                $(".ac-col").html(v.faq);
              }
            } else if(section == "section-8") {
              $(".description.user-content.padded-row").prepend(
                '<div class = "usp_section_web usp"></div>'
              );
              $(".usp_section_web").css(
                "background-image",
                "url(" + v.background_image + ")"
              );
            // document.getElementsByClassName('usp_section_web')[0].style.backgroundImage= v.background_image
              $(".usp").css({
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center",
                width: "100%",
              });

              function web_view_helper(x) {
                $(".usp_section_web").css({
                  display: "block",
                  height: x,
                });
                $(".usp_section_mobile").css("display", "none");
              }

              function update_usp_web() {
                if ($(window).width() >= 1250) {
                  web_view_helper("150px");
                } else if (
                  $(window).width() > 766 &&
                  $(window).width() < 1250
                ) {
                  web_view_helper("100px");
                }
              }

              update_usp_web();

              $(window).resize(function () {
                update_usp_web();
              });
            } 
            else if (section == "section-9") {
              $(".description.user-content.padded-row").prepend(
                '<div class = "usp_section_mobile usp"></div>'
              );
              $(".usp_section_mobile").css(
                "background-image",
                "url(" + v.background_image + ")"
              );
              $(".usp").css({
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center",
                width: "100%",
              });

              function mobile_view_helper(x) {
                $(".usp_section_mobile").css({
                  display: "block",
                  height: x,
                });
                $(".usp_section_web").css("display", "none");
              }

              function update_usp_mobile() {
                if ($(window).width() > 620 && $(window).width() <= 766) {
                  mobile_view_helper("830px");
                } else if (
                  $(window).width() > 450 &&
                  $(window).width() <= 620
                ) {
                  mobile_view_helper("650px");
                } else if ($(window).width() <= 450) {
                  mobile_view_helper("510px");
                }
              }

              update_usp_mobile();

              $(window).resize(function () {
                update_usp_mobile();
              });
            }

            //if(response.data.video != '' && response.data.video != null){
            //    $(".video").attr("video-url", response.data.video);
            //}
            /*if(v.section_video != '' && v.section_video != null){
                            $(".video").attr("video-url", v.section_video);                        
                        }*/

            // var descriptionhtml = '';
            // descriptionhtml += '<table class="descsection4table">';
            /* $.each(v.description_table, function(index, value) {
                            
                          
                                descriptionhtml += '<tr>';
                                descriptionhtml += '<td>'+value.tablefield+'</td>';
                                descriptionhtml += '<td>'+value.fieldvalue+'</td>';
                                descriptionhtml += '</tr>';
                                
                        });*/

            //descriptionhtml += '</table>';
            //$('.descsection4table').remove();
            //$('.productSpecificationbox').append(descriptionhtml);
            else {
              $(".new-productpart-fifthImage").find("img").removeAttr("src");
              $(".new-productpart-fifthImage").find("img").addClass("lazyload");
              $(".new-productpart-fifthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".new-productPart-fifth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".new-productPart-fifth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".new-productpart-fifth-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".new-productpart-fifth-content").html(v.description);
              }
            }
          });
        });
        $(".single-option-selector").val(current_title).change();

        setTimeout(function () {
          hideLoading();
        }, 500);
      } else if (shop_name == "boat-nirvana.myshopify.com") {
        $(".veriant_sect").removeClass("activevar");
        $(this).addClass("activevar");
        showLoading();
        var current_variant = $(this).attr("id");
        var current_title = $(this).attr("title");

        $(".clickyboxes")
          .find('a[data-value="' + current_title + '"]')
          .trigger("click");

        //$('.product-variation').find('#ProductSelect-product-custom').val(current_variant);
        $.each(POHproductDetail[current_variant], function (section, v) {
          $.each(this, function (k, v) {
            if (section == "section-1") {
              $(".product-buyGrid")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".product-buyGrid").html(v.description);
              }
            } else if (section == "section-2") {
              var checkblanck = $(".productpart-twoImage").find("img").length;

              if (checkblanck == "") {
                $(".productpart-twoImage").append('<img src="" >');
              }

              $(".productpart-twoImage").find("img").removeAttr("src");
              $(".productpart-twoImage").find("img").addClass("lazyload");
              $(".productpart-twoImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-two").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-two").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-two-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-two-content").html(v.description);
              }
            } else if (section == "section-3") {
              var checkblanck = $(".productpart-thirdImage").find("img").length;

              if (checkblanck == "") {
                $(".productpart-thirdImage").append('<img src="" >');
              }

              $(".productpart-thirdImage").find("img").removeAttr("src");
              $(".productpart-thirdImage").find("img").addClass("lazyload");
              $(".productpart-thirdImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-third").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-third").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-third-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-third-content").html(v.description);
              }
            } else if (section == "section-4") {
              var checkblanck = $(".productpart-fourthImage").find("img")
                .length;

              if (checkblanck == "") {
                $(".productpart-fourthImage").append('<img src="" >');
              }

              $(".productpart-fourthImage").find("img").removeAttr("src");
              $(".productpart-fourthImage").find("img").addClass("lazyload");
              $(".productpart-fourthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-fourth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-fourth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-fourth-content,.productpart-fourthImage")
                .find("h1,h2,h3,h4,h5,h6,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-fourth-content").html(v.description);
              }

              var descriptionhtml = "";
              descriptionhtml += '<table class="descsection4table">';
              $.each(v.description_table, function (index, value) {
                descriptionhtml += "<tr>";
                descriptionhtml += "<td>" + value.tablefield + "</td>";
                descriptionhtml += "<td>" + value.fieldvalue + "</td>";
                descriptionhtml += "</tr>";
              });

              descriptionhtml += "</table>";
              $(".descsection4table").remove();
              $(".productSpecificationbox").append(descriptionhtml);
            } else {
              var checkblanck = $(".productpart-fifthImage").find("img").length;

              if (checkblanck == "") {
                $(".productpart-fifthImage").append('<img src="" >');
              }

              $(".productpart-fifthImage").find("img").removeAttr("src");
              $(".productpart-fifthImage").find("img").addClass("lazyload");
              $(".productpart-fifthImage")
                .find("img")
                .attr("data-src", v.section_image);
              $(".productPart-fifth").css("background-image", "");
              if (v.background_image != "" && v.background_image != null) {
                $(".productPart-fifth").css(
                  "background-image",
                  "url(" + v.background_image + ")"
                );
              }
              $(".productpart-fifth-content")
                .find("h1,h2,h3,h4,h5,h6,p,label")
                .attr("style", "color: " + v.color + " !important");

              if (v.description != "" && v.description != null) {
                $(".productpart-fifth-content").html(v.description);
              }
            }
          });
        });
      }
    }
  );

  $(document).on("keyup", "#product-qnty", function () {
    $("#Quantity").val($(this).val());
  });

  $(document).on(
    "click",
    "button.btn.btn-primary.btn-lg.btn-block",
    function () {
      $("#AddToCart-product-custom").click();
      // alert($(".btn--sold-out").text());
    }
  );

  $(document).on(
    "click",
    "button.btn.btn-secondary.btn-lg.btn-block",
    function () {
      $(".shopify-payment-button__button").click();
    }
  );

  $(document).on("click", ".card-header", function () {
    $(".collapse").removeClass("show");
    $(this).next(".collapse").addClass("show");
  });
  $(".btn--sold-out").insertBefore(".row.mt-3");
});
function showLoading() {
  $(".loading").show();
}
function hideLoading() {
  $(".loading").hide();
}
