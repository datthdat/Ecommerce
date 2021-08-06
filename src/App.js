import React, { useEffect, useState } from 'react'
// import Products from './components/Products/Products'
// import Navbar from './components/Navbar/Navbar'

import { Products, Navbar, Mic } from './components'
import { commerce } from './lib/commerce'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCard] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    const fetchCards = async () => {
        // Lấy xuống data
        const cart = await commerce.cart.retrieve()
        setCard(cart)
        // setCard(await commerce.cart.retrieve())
    }

    // const handleAddToCart = async (productId, quantity) => {
    //     const item = await commerce.cart.add(productId, quantity)
    //     setCard(item.cart)
    // }
    // console.log("Cart item", cart);

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCard(item.cart)
    }
    console.log("Click", cart);

    //Update to New 123

    useEffect(() => {
        fetchProducts()
        fetchCards()
    }, [])

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default App
