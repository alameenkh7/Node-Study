var prompt=require("prompt");
prompt.start();
"use strict";
const TAX_AMOUT=0.08; //tax rate
var bank_balance=314.55;//starting bank_balance
var price=99.99;


prompt.get(['count'],function (err,res) {
  var total=findTotal(res.count);
  if(total<bank_balance){
    console.log("continue shopping");
    console.log("current total price is "+total.toFixed(2));
    
  }else {
    console.log("stop shopping You have no more balance");
  }
});










/*
find the total amount for a phone
inputs are amount for single phone and the count;
 */
function findTotal(count){
  price*=count;
  price+=(price*TAX_AMOUT);  //amount with tax;
  return price;
}
