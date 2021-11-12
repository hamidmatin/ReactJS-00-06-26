import React from 'react'

export const HOCSample = ({ price }) => {

  const dollarCurrency = formatCurrency('$', '.')
  const rialCurrency = formatCurrency('ریال', '/')
  return (
    <div className='container'>      
      <p>price = {dollarCurrency(price)}</p>
      <p style={{direction: 'rtl'}}>مبلغ = {rialCurrency(price)}</p>
    </div>
  )
}


const formatCurrency = (currencySymbol,  decimalSeparator) => {
  // ....
  return (value) => {
    const wholePart = Math.trunc( value / 100 );

    let fractionalPart = (value % 100).toString();
    fractionalPart = fractionalPart.padStart(2, '0')

    return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
  }
}

