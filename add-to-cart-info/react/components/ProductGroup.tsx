import React from 'react'

type Props = {
  products: []
}

const ProductGroup = ({products}: Props) => {

  console.log("Mis productos en productGroup son -> ", products)

  return (
    <div>
      Mi producto
    </div>
  )
}


export default ProductGroup
