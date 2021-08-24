require.config({baseUrl: "./scripts", paths: { c2:"./credit2"}})


define(["c2", "cdn4jquery", "./product2"], function(credits,jq,products) {

    console.log("Function : purchaseProduct");
  
    return {
        purchaseProduct: function() {
          
                var credit = credits.getCredits();
                jq();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      }
    }
  });