// **** CALCULATOR 3 ****

var price_sim1 = ["14.00", "20.00", "30.00", "40.00"];
var price_sim2 = ["21.20", "32.00", "50.00", "68.00"];
var price_sim3 = ["28.40", "44.00", "70.00", "96.00"];
var price_sim4 = ["35.60", "56.00", "90.00", "124.00"];
var price_sim5 = ["42.80", "68.00", "110.00", "152.00"];

var total = 0;
var number_sim = 0;
var number_gb = 0;
var price;
var gb;
var sim;

// SIM cards and GB clicks
  $("#myGbDiv").hide();

  $(".btn_sim").click(function(event){
    number_sim = this.getAttribute("data-sim");
    $("#myGbDiv").show();

    $(".btn_gb").click(function(event){
      number_gb = this.getAttribute("data-gb");
      package_combos();
      pay_frequency()

    });
  });


//Function 1
  function package_combos() {

    switch (number_gb){
      case '1':
        gb = 0;
        break;
      case '10':
        gb = 1;
        break;
      case '20':
        gb = 2;
        break;
      case '40':
        gb = 3;
        break;
    }

    switch (number_sim){
      case '1':
        price = price_sim1[gb];
        break;
      case '2':
        gb = 1;
        price = price_sim2[gb];
        break;
      case '3':
        gb = 2;
        price = price_sim3[gb];
        break;
      case '4':
        gb = 3;
        price = price_sim4[gb];
        break;
      case '5':
        gb = 3;
        price = price_sim5[gb];
        break;
    }
  }

  //Function 2
  function pay_frequency() {
    $(".price_month").text(price);
    $ (".price_annual").text(price * 12);
  }

  //Shopping Cart
  $(".addToBag").click(function(event){
    var click = 0;
    click++;
    $ ("#itemsInBag").text(click);
    console.log(click);

  })
