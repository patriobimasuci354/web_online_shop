const Input = (props) => {
    const { tipe, id, placeholder, css } = props
    let mycss = `bg-slate-100 px-3 py-2 rounded-md w-full`
    if (css) {
        mycss = mycss + css
    }
    return (
        <input className={mycss} type={tipe} id={id} placeholder={placeholder} />
    )
}
export default Input