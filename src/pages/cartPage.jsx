import { useDispatch, useSelector } from "react-redux"
import Button from "../components/elements/button/button"
import HeaderLayout from "../components/layouts/headerLayout"
import { deleteDataCart } from "../redux/actions/dataCart"

const CartPage = () => {
    const dispatch = useDispatch()
    const dataCarts = useSelector(state => state.dataCart.data)

    const handleBuyButton = () => {
        alert('Berhasil Membeli !')
    }

    return (
        <>
            <HeaderLayout></HeaderLayout>
            <div className="min-h-screen flex justify-center flex-col items-center pt-20">
                <h1 className="text-4xl font-bold mb-2">My cart = {dataCarts.length || 0}</h1>
                {dataCarts.length > 0 ? (
                    dataCarts.map((e, i) => (
                        <div key={i} className="flex max-w-[40rem] h-[7rem] w-full text-white bg-blue-500 p-1 rounded-lg mb-3">
                            <img className="max-w-[10rem] w-full h-full object-cover me-6 rounded-l-lg" src={e.image} alt={e.title} />
                            <div className="flex flex-col justify-between grow">
                                <div className="flex justify-between items-start">
                                    <div className="w-[92%]">
                                        <h1 className="text-xl font-bold ">{e.title.substring(0, 45)}...</h1>
                                        <p className="text-xs italic">Rating: {e.rating.rate}/5</p>
                                    </div>
                                    <div className="bg-white text-black px-2 font-bold rounded-md">
                                        <p>{e.qwt}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-1">
                                    <div className="bg-white text-black font-bold px-2">Rp {e.price.toLocaleString('ID-id', { styles: 'currency', currency: 'IDR' })}</div>
                                    <div className="">
                                        <button onClick={() => dispatch(deleteDataCart(e.id))} className="text-xs bg-red-500 py-[0.1rem] px-2 me-2 rounded-md tracking-wider">Delete</button>
                                        <Button onClick={handleBuyButton} css="bg-green-600 px-4 tracking-widest font-bold text-sm me-3">Buy</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                ) : (
                    <p className="mt-2 text-xs text-red-500 tracking-wider italic">Data cart Not Found !</p>
                )}

            </div>
        </>
    )
}

export default CartPage
