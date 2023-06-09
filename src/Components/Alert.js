import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
  
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() +lower.slice(1);
        
        }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{display : 'absolute'}}>
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
</div>
  )
}

export default Alert