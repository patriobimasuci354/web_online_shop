const Button = (props) => {
    const { buttonType = "button", children, css, onClick = () => { } } = props
    let mycss = `bg-blue-700 rounded-md `
    if (css) {
        mycss += css
    }
    return (
        <button className={mycss} type={buttonType} onClick={onClick} >{children}</button>
    )
}
export default Button