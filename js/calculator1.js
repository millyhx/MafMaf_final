// **** CALCULATOR 1 ****

$('.dropdown-toggle').dropdown()

$(".btn_gb").click(function(event){
  var data_gb = this.getAttribute("data-gb");
  var data_cost = parseInt(this.getAttribute("data-cost"));
  $(".price_month").text(data_cost);
  $ (".price_annual").text(data_cost * 12);
});


//Shopping Cart

$(".addToBag").click(function(event){
  var click = 0;
  click++;
  $ ("#itemsInBag").text(click);
  console.log(click);

})
