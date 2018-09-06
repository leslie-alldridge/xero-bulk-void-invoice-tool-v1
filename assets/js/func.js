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
    var cbs = document.getElementsByClassName('checkbox');
  for(var i=0; i < cbs.length; i++) {
    // if(cbs[i].type == 'checkbox') {
      cbs[i].checked = bx.checked;
    
  }
  console.log(cbs);
  
}

module.exports = {
    removePayments,
    checkAll
}