import React from 'react'

const ProductGroup = (products: any) => {
  console.log("mis productos son ", products)
  return (
    <>
      {
        products.map((product:any, index:number) => {
          return(
          <div key={index}>
            <div>
              <img src={product.imageUrls.at1x} alt="" />
            </div>
            <div>
              <p>{product.name}</p>
              <p>{product.id}</p>
              <p>${product.price / 100}</p>
              <p>Cant: {product.quantity}</p>
            </div>
          </div>)
        })
      }
    </>

  )
}

export default ProductGroup
