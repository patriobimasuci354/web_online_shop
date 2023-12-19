import { useEffect, useState } from "react"
import Button from "../components/elements/button/button"
import HeaderLayout from "../components/layouts/headerLayout"
import { getProducts } from "../services/getProducts"
import { useLoginValidation } from "../hooks/useLoginValidation"
import { useDispatch } from "react-redux"
import { addDataCart } from "../redux/actions/dataCart"

const ProductsPage = () => {
    useLoginValidation()
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getProducts((status, dataProducts) => {
            if (status === "succes") {
                dataProducts.forEach(e => {
                    e.price = 100000 * e.id
                })
                setProducts(dataProducts)
            }
        })
    }, [])

    return (
        <>
            <HeaderLayout></HeaderLayout>
            <div className="pt-20">
                <h1 className="ms-8 mb-3 text-2xl font-extrabold border-b-2 border-black inline-block pb-1">Get your product</h1>
                <div className="min-h-screen flex justify-evenly items-start flex-wrap gap-1">
                    {products.length > 0 ? (
                        products.map((data, i) => (
                            <div key={i} className="PRODUCTCARD mb-3 max-w-[15rem] min-h-[18rem] bg-slate-800 text-white p-3 rounded-xl">
                                <a href={`/product/${data.id}`} >
                                    <img className="h-[8rem] w-full object-cover" src={data.image} alt={data.title} />
                                </a>
                                <a href={`/product/${data.id}`}>
                                    <h1 className="font-bold mt-1 text-xl">{data.title.substring(0, 15)}...</h1>
                                </a>
                                <h5 className="text-xs">Rating {data.rating.rate} / 5</h5>
                                <p className="text-sm mt-3">{data.description.substring(0, 80)}...</p>
                                <div className="flex justify-around mt-3">
                                    <p className="font-bold">{data.price.toLocaleString('ID-id', { styles: 'currency', currency: 'IDR' })}</p>
                                    <div className="">
                                        <a href={`/product/${data.id}`} className="rounded-md px-3 text-xs me-1 bg-green-600">Detail</a>
                                        <Button onClick={() => dispatch(addDataCart(data))} type="button" css="px-2">add Cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="font-bold">loading...</h1>
                    )}
                </div>
            </div>
        </>
    )
}
export default ProductsPage