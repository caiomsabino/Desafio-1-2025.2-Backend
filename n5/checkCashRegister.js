function checkCashRegister(price, cash, cid) {
  

  const CURRENCY_VALUES = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ];


  let changeDueInCents = Math.round((cash - price) * 100);


  let totalInDrawerCents = cid.reduce((sum, [, amount]) => {
    return sum + Math.round(amount * 100);
  }, 0);

  
  if (totalInDrawerCents < changeDueInCents) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }


  if (totalInDrawerCents === changeDueInCents) {
    return { status: "CLOSED", change: cid };
  }


  
  let changeToGive = []; 

  for (let i = cid.length - 1; i >= 0; i--) {
    const denomName = cid[i][0]; 
    const denomValueCents = CURRENCY_VALUES[i][1]; 
    let amountInDrawerCents = Math.round(cid[i][1] * 100); 
    
    let amountToReturnCents = 0; 

    while (changeDueInCents >= denomValueCents && amountInDrawerCents > 0) {

      changeDueInCents -= denomValueCents;
      

      amountInDrawerCents -= denomValueCents;
      

      amountToReturnCents += denomValueCents;
    }

    if (amountToReturnCents > 0) {

      changeToGive.push([denomName, amountToReturnCents / 100]);
    }
  }


  if (changeDueInCents > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeToGive };
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


