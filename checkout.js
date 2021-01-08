
var listItems = $("header nav ul li");
len = listItems.length
  if(len==4){listItems[0].remove()}
var listItems = $("header nav ul li");
listItems.each(function(idx, li) {
  var product = $(li).find('span');
  product.empty();
  var index = idx + 1;
  product.append('<div class="div-1 grey txt">' + index +'</div>');
  product.after('<span class="space">----</span>')
});

listItems.each(function(idx, li) {
  var product = $(li).find('a');
  product.empty();
  var index = idx + 1;
  product.append('<div class="div-1 red txt">' + index +'</div>');
  product.after('<span class="space">----</span>')
});

listItems.each(function(idx, li) {
  var x =$(li).find('.div-1')
  if($(li).hasClass('breadcrumb__item breadcrumb__item--current')){x.removeClass('grey');x.addClass('red');}
  if($(li).hasClass('breadcrumb__item breadcrumb__item--completed')){x.removeClass('grey');x.addClass('red');}
  if($(li).hasClass('breadcrumb__item breadcrumb__item--blank')){x.removeClass('red');x.addClass('grey');}
});

if($("header nav ul li:nth-child(1)").hasClass('breadcrumb__item breadcrumb__item--current') && $("header nav ul li:nth-child(2)").hasClass('breadcrumb__item breadcrumb__item--completed')){
var x =$("header nav ul li:nth-child(2)").find('.div-1');
x.removeClass('red');x.addClass('grey');
	}
$("header nav ul li").find('.space')[2].remove()

if($("header nav ul li:nth-child(2)").find('.div-1').hasClass('red')){
$("header nav ul li:nth-child(1)").find('.space').css('color','#ed1d26')
	}
  else{$("header nav ul li:nth-child(1)").find('.space').css('color','#bdbdbd')}
if($("header nav ul li:nth-child(3)").find('.div-1').hasClass('red')){
$("header nav ul li:nth-child(2)").find('.space').css('color','#ed1d26')
	}
  else{$("header nav ul li:nth-child(2)").find('.space').css('color','#bdbdbd')}

$('#checkout_shipping_address_phone').removeAttr('data-phone-formatter')
$('#checkout_shipping_address_phone').attr('maxlength','10')

$('#checkout_reduction_code').on('input', function() {
  if($('#checkout_reduction_code').length > 0 && $('#checkout_reduction_code').val() != ''){
  $('.field__input-btn').attr('style','background : #ea2127 !important') }
  else{$('.field__input-btn').attr('style','background :#d3d3d3 !important') }
});

$("#order-summary > div > div.order-summary__section.order-summary__section--discount > form:nth-child(3) > div.fieldset > div").before("<h2 class='offer'>Promotional Offer</h2>");   
$("body > div > div > div > main > div.step > div > div.section.section--reductions.hidden-on-desktop > div.section__header > h2").html("Discount Code");
$("#checkout_reduction_code_mobile").attr("placeholder", "Discount Code");
$("#checkout_reduction_code").attr("placeholder", "Discount Code");      
$(".link--small").html("<img class='plus-img' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4My45NDcgMzgzLjk0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBvbHlnb24gcG9pbnRzPSIwLDMwMy45NDcgMCwzODMuOTQ3IDgwLDM4My45NDcgMzE2LjA1MywxNDcuODkzIDIzNi4wNTMsNjcuODkzICAgICIgZmlsbD0iI2VkMWQyNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wb2x5Z29uPgoJCQk8cGF0aCBkPSJNMzc3LjcwNyw1Ni4wNTNMMzI3Ljg5Myw2LjI0Yy04LjMyLTguMzItMjEuODY3LTguMzItMzAuMTg3LDBsLTM5LjA0LDM5LjA0bDgwLDgwbDM5LjA0LTM5LjA0ICAgICBDMzg2LjAyNyw3Ny45MiwzODYuMDI3LDY0LjM3MywzNzcuNzA3LDU2LjA1M3oiIGZpbGw9IiNlZDFkMjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==' />");


