import PropTypes from "prop-types"
function Button({index,hexValue,colorName,handleClick}){
    return <>
     <button
                   className='rounded text-xl w-18 h-auto px-1 py-1 text-center' 
                  id={"btn"+index} 
                  type="button" 
                  style={{backgroundColor:hexValue}}
                  onClick={()=>handleClick(hexValue)}
                  value={colorName}
                  >{colorName}</button> 
    </>
}
Button.propTypes={
    index:PropTypes.number,
    hexValue:PropTypes.string,
    colorName:PropTypes.string,
    handleClick:PropTypes.func
}
export default Button;