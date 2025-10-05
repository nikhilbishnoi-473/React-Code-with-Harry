import React from 'react'

const Alert = (props) => {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className='container' style={{height: '60px' , marginTop: `100px`}}>
  { props.alert && <div className={`w-25  alert alert-${props.alert.type} alert-warning alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>}
</div>
  )
}

export default Alert
