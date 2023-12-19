const Label = (props) => {
    const { htmlFor, children, css } = props
    let mycss = `font-bold block`
    if (css) {
        mycss = `${css} ${mycss}`
    }
    return (
        <label className={mycss} htmlFor={htmlFor}> {children}</label >
    )
}

export default Label