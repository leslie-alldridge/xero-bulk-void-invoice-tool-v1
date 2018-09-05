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

module.exports = {
    removePayments
}