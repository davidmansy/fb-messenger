import React from 'react'

/*

Here you can create your controlled and uncontrolled Input.

Hints:
- To make this component uncontrolled from the outer components the state should be managed internally somewhere in this component.
- To make this component controlled it should receive a prop with the value to display in the input. 
- If the Input receives the value prop then it should be controlled, if it doesn't receive the value prop then it should be uncontrolled.
- You can add the class form-control to your Input to encapsulate the style. This way you can use 
  <Input value={someValue} onChange={handleChange} /> and the style becomes an implementation detail of Input

*/

class Input extends React.Component {
  state = {
    value: ''
  }

  render() {
    const {value, className, handleChange, ...otherProps} = this.props;
    const inputValue = this.state.value || value;
    return <input value={inputValue} onChange={handleChange} className={`form-control ${className}`} {...otherProps} />
  }
}

export default Input;
