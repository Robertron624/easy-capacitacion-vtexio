import React from "react";
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css'

import ButtonGroup from "./ButtonGroup";
// import Totalizers from "./Totalizers";
// import ProductGroup from "./ProductGroup";

const AddToCartInfo = ({blockClass}:any) => {
  const container = generateBlockClass(styles.container, blockClass),
        container__item = generateBlockClass(styles.container__item, blockClass)

  const productInfo = useProduct();

  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()

  console.log('GTM Informacion de producto -> ', productInfo)
  console.log('GTM Items del orderForm -> ', items)
  console.log('GTM Totalizers del orderForm -> ', totalizers);


  return(
    <div className={container}>
      {/* <ProductGroup products={items} /> */}
      {
        items.map((item:any, index:number)=>{
          return(
            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} alt="product image" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: {totalizers[0]?.value}</p>
      </div>


      <ButtonGroup /> {/* Acciones */}
    </div>
  )
}

export default AddToCartInfo
