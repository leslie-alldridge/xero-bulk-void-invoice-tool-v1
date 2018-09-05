// alert("connected")

removePartialPayments = (apiInfo) => {
    let data = {}
    console.log(apiInfo.Invoices.length);
    
    for (let i = 0; i < apiInfo.Invoices.length; i++) {
        data = {invoices: apiInfo.Invoices[i]}
    }
    console.log('data');
    
    console.info(data); 
    // let removedPayments = data.Invoices.map((invoice) => {
    //     // invoice.Payments.length > 0 ? console.log(invoice) : console.log('nothing');
    //     if(invoice.Payments.length > 0){
    //         invoice = null;
    //     }
        
    // }) 
    // console.log(removedPayments); 
}

module.exports = {
    removePartialPayments
}