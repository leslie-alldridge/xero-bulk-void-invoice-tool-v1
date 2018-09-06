removePayments = (apiInfo) => {
    let data = {}
    data.invoices = [];
    
    for (let i = 0; i < apiInfo.length; i++) {
        data.invoices.push(apiInfo[i])
    }

    const result = data.invoices.filter(invoice => 
        invoice.Payments.length < 1)
        
  return result
}

checkAll = (bx) => {
    let invTotal = document.getElementById('invoiceNums')
    let cbs = document.getElementsByClassName('checkbox');
    let arr = []

  for(let i=0; i < cbs.length; i++) {
      cbs[i].checked = bx.checked;
        if(cbs[i].checked == false){
            console.log(cbs[i]);
        } else {
            arr.push(cbs[i].name)
        }
    }
    
    invTotal.value = arr;
    console.log(arr);
    return arr
}

checkSingle = () => {
    let cbs = document.getElementsByClassName('checkbox');
    let invTotal = document.getElementById('invoiceNums')
    let checkArr = [];
    // console.log(bx);
    for(let i=0; i < cbs.length; i++) {
          if(cbs[i].checked == false){
            //   console.log(cbs[i]);
          } else {
            checkArr.push(cbs[i].name)
          }
      }
      invTotal.value = checkArr

}

module.exports = {
    removePayments,
    checkAll,
    checkSingle
}