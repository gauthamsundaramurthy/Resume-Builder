import React from 'react'
import './CustomInput.css'

class CustomInput extends React.Component {

  constructor () {
    super()
    this.target = React.createRef()
    this.saveInfo = this.saveInfo.bind(this)
  }
  saveInfo () {
    let field = this.target.current.name
    let value = this.target.current.value
    this.props.saveBasicInfo(field, value)
  }
  render () {
    return (
      <div className='input-container'>
        <label htmlFor={this.props.id} className={this.props.labelCss}>
          {this.props.label}
        </label>
        <input type={this.props.type} ref={this.target} id={this.props.id} name={this.props.name} className={this.props.fieldCss} placeholder={this.props.placeholder} onChange={this.saveInfo} autoComplete='off' />
      </div>
    )
  }
}

export default CustomInput
