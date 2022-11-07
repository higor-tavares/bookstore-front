const integerToCurrency = (value) =>{
    return `R$ ${(value/100).toFixed(2)}`.replace('.',',');
}
export default integerToCurrency;