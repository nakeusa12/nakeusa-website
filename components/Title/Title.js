const Title = ({text, fontSize, strokeWidth, fontWeigth, fontTitle, textTitle}) => {
  return (
    <>
      <h2 className={`${fontTitle} font-bold`}>{textTitle}</h2>
      <h3 className={`${fontSize} ${fontWeigth} text-fill-transparent text-stroke ${strokeWidth} text-stroke-white paint-fsm font-title uppercase`}>{text}</h3>
    </>
 )
}

export default Title;