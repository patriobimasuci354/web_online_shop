import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Button from "../components/elements/button/button"
import HeaderLayout from "../components/layouts/headerLayout"
import { getOneProduct } from "../services/getProduct"
import { addDataCart } from "../redux/actions/dataCart"

const DetailProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        getOneProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])

    return (
        <>
            <HeaderLayout></HeaderLayout>
            <div className="min-h-screen pt-16 flex flex-col">
                <div className="">
                    <div className="inline-block pb-1 text-2xl font-bold ms-3 border-b-2 border-black">Detail Product</div>
                </div>
                <div className="h-fu ll flex justify-center items-center">
                    {product ? (
                        <div className="max-w-lg w-full border-2 bg-slate-800 p-3 rounded-lg text-white">
                            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                            <img className="h-72 w-full object-cover" src={product.image} alt={product.title} />
                            <p className="text-sm my-2 font-bold">Rating {product.rating.rate}/5</p>
                            <p className="text-justify mt-2">{product.description}</p>
                            <Button onClick={() => dispatch(addDataCart(product))} type="button" css="w-full mt-5">add Cart</Button>
                        </div>
                    ) : (
                        <h1 className="font-bold">Loading...</h1>
                    )}

                </div>
            </div>
        </>
    )
}

export default DetailProduct