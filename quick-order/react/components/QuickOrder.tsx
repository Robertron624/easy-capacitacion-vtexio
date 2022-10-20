import React, {useState, useEffect} from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from "../graphql/updateCart.graphql"
import GET_PRODUCT from "../graphql/getProductBySku.graphql"

const QuickOrder = () => {

  const [inputText, setInputText] = useState("")
  const [search, setSearch] = useState("")

  const [addToCart]= useMutation(UPDATE_CART)

  const [getProductData, {data}] = useLazyQuery(GET_PRODUCT)

  const handleChange = (event: any) => {
    setInputText(event.target.value)
  }

  useEffect(()=>{
    if(!data){
      console.log("Oiga ingrese algo normal")
    }
    else{
      const {productId} = data.product.product
      let skuId = parseInt(productId)
      addToCart({
        variables:{
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: 1
            }
          ]
        }
      })
      .then(()=>{
        window.location.href = "/checkout"
      })

    }

  }, [data, search])

  const addProductToCart = () => {
    // Ingresar declaracion de la mutacion
    console.log("El resultado de mi producto, input text antes de invocar getProductData -> ", inputText)
      getProductData({
        variables:{
          sku: inputText
        }
      })
  }

  const searchProduct = (event: any) => {
    event.preventDefault()

    if(!inputText){
      alert("Oiga, ingrese algo")
    }
    else{
      // Setear el input al search
      setSearch(inputText)
      addProductToCart()
    }
  }

  return (
    <div>
      <h2>Compra rapida de ITGlobers</h2>
      <form
        action=""
        onSubmit={searchProduct}
      >
        <div>
          <label htmlFor="sku">Ingresa el numero de sku</label>
          <input id="sku" type="text" onChange={handleChange}
          />
        </div>
        <input type="submit" value="AÑADIR AL CORRITO" />
      </form>

    </div>
  )
}

export default QuickOrder
