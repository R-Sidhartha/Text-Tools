import React from "react";

export default function alert(props) {
  const capitalise = (word) => {
    const text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
      <div style={{height:'30px',fontSize:'12px'}}>
    {props.alert && (
        <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        >
       <strong>{capitalise(props.alert.type)}!</strong> {props.alert.msg}
     
      </div>
      
  )}
      </div>
  )
}
