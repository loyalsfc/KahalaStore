import { createContext, useEffect, useState } from "react"

const Context = createContext()

function ContextProvider({children}){
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/categories`)
        .then(result => result.json())
        .then(data => setCategories(data))

        fetch(`https://api.escuelajs.co/api/v1/products`)
        .then(result => result.json())
        .then(data => setProducts(data))
    },[])   


    return(
        <Context.Provider value={{categories, products}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}