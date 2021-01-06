import React from 'react'

const TextInput = ({label, name, value, type, onChange, otherClass, required}) => {
    return (
        <div className={`d-flex flex-column mb-3 ${otherClass}`}>
            <label style={{color: "#363636", margin: 0}} htmlFor="">{label} {required && <span className="text-danger" >*</span> }</label>
            <input name={name} style={{backgroundColor: "#E9E9EA", height: 33, border: 0, borderRadius: "3px"}} value={value} onChange={onChange} type={type} required={required} />
        </div>
    )
}

export default TextInput
