import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
// import ProductGroup from './ProductGroup';
// import Totalizers from './Totalizers';
// import ButtonGroup from './ButtonGroup';
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
import ButtonGroup from './ButtonGroup'

// type orderFormProps = {
//     items: object[],
//     totalizers: object[]
// }
const AddToCartInfo = ({blockClass}: {blockClass: string}) => {

  const container = generateBlockClass(styles.container, blockClass)
  const container__items = generateBlockClass(styles.container__items, blockClass)
  const productInfo = useProduct();
  const {orderForm: {items, totalizers} }= useOrderForm();
  //const { items, totalizers } = orderForm
console.log("Mis totales", totalizers, "product info: ", productInfo)
  return (
    <div className={container}>
      {
        items.map((item:any, index:number)=>{
          return(
            <div key={index} className={container__items}>
              <div>
                <img src={item.imageUrls.at1x} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id} </p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers[0]?.value/100}</p>
      </div>
      <ButtonGroup/>
    </div>
    // <div className={classes}>
    //   <ProductGroup products={items}/>  {/*//listado de productos*/}
    //   <Totalizers totalizer={totalizers[0]}/> {/*//valor total*/}
    //   <ButtonGroup/> {/*//acciones*/}

    // </div>
  )
}

export default AddToCartInfo
