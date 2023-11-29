import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const Wish_Context = ({ children}) => {
  const [wish, setWish] = useState(localStorage.getItem('wisss') ? JSON.parse(localStorage.getItem('wisss')) : [])
    const [products, setProducts] = useState([])
  const da ={
    getProducts,
    setProducts,
    haddleAddWish,
    hadlleRemoveWish,
    hadlleRemoveAllWish,
    wish,
    setWish,
    products
  }
    useEffect(() => {
        localStorage.setItem('wisss', JSON.stringify(wish))
      }, [wish])
      async function getProducts() {
        const data = await fetch('http://localhost:3000/products')
        const res = await data.json()
        setProducts(res)
        
      }
      function haddleAddWish(x) {
        if (!wish.find(item => item.id === x.id)) {
          setWish([...wish, x])
        }
      }
      function hadlleRemoveWish(id) {
        setWish(wish.filter(x => x.id !== id))
      }
      function hadlleRemoveAllWish() {
          setWish([])
        }
    
    return (
            <Context.Provider value={da}>
                {children}
            </Context.Provider>
            
    )
}

export const useWish=()=>useContext(Context)