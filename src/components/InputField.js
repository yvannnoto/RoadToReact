import React, { Fragment, useEffect, useRef } from 'react'

function InputField({ id, value, type = 'text', onInputChange, placeholder, isFocused }) {

  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <Fragment>
      <input ref={inputRef} type={type} className="form-control" id={id} onChange={onInputChange} value={value} placeholder={placeholder} autoFocus={isFocused} />
    </Fragment>
  )
}

export default InputField