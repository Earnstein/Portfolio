const LineGradient = ({ width, styles }) => {
  const gradientWidth = width || "w-full"
  const LineStyles = styles || ""
  return (
    <div className={`${gradientWidth} ${LineStyles} h-[1px] bg-gradient-rainblue`}/>
  )
}

export default LineGradient;