import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ProductGroup from './ProductGroup';
import Totalizers from './Totalizers';
import ButtonGroup from './ButtonGroup';

const AddToCartInfo = () => {
  const productInfo = useProduct();
  const { OrderForm: {
    items,
    totalizer
  } } = useOrderForm();
console.log(items, totalizer)
  return (
    <>
      <ProductGroup/>  //listado de productos
      <Totalizers/> //valor total
      <ButtonGroup/> //acciones

    </>
  )
}

export default AddToCartInfo
