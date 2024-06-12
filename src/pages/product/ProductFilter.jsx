import {useEffect, useState} from "react";
import ProductCard from "@/components/ProductCard.jsx";
import FloatingButton from "@/pages/product/FloatingButton.jsx";

export default function ProductFilter() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 60)))
            .catch(err => {
                console.log('Err', err)
            })
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="grid grid-cols-6 gap-2 p-1">
                {
                    products.map(product => (<ProductCard product={product} key={product.id} />))
                }
            </div>
            <FloatingButton />
        </>
    )
}
