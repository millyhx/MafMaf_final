// **** CALCULATOR 2 ****

var total = 0;
var gb_price = 0;
var min_price = 0;


// Gigabytes
$("#myMinDiv").hide();
$(".btn_gb").click(function(event){
  var data_gb = this.getAttribute("data-gb");
  $("#myMinDiv").show();
  gb_price = parseInt(this.getAttribute("data-cost-gb"));
  pay_frequency();
  console.log('total gb ' + total);
})

// Minutes
$(".btn_min").click(function(event){
 var data_min = this.getAttribute("data-min");
  min_price = parseInt(this.getAttribute("data-cost-min"));
  pay_frequency();
  console.log('total min ' + total);
})

function pay_frequency() {
  total = gb_price + min_price;
  $(".price_month").text(total);
  $ (".price_annual").text(total * 12);
}

if ($(".btn_gb").hasClass('active')){
    $(".btn_gb").this.getAttribute("data-gb");
}
