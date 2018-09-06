// alert('yo')

function removePayments (apiInfo) {
    // console.log(apiInfo);
    let data = {}
    data.invoices = [];

    console.log(apiInfo.length);
    
    for (let i = 0; i < apiInfo.length; i++) {
        data.invoices.push(apiInfo[i])
    }

    
    // console.log('data');
    // console.info(data); 
    const result = data.invoices.filter(invoice => 
        invoice.Payments.length < 1)
    

        console.log(result);
        console.log(result.length);
        
  return result
}

function checkAll (bx) {
    var invTotal = document.getElementById('invoiceNums')

    var cbs = document.getElementsByClassName('checkbox');
    let arr = []

  for(var i=0; i < cbs.length; i++) {
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

module.exports = {
    removePayments,
    checkAll
}