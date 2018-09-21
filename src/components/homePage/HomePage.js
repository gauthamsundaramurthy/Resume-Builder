import React from 'react'
import './HomePage.css'

// import CustomInput from '../reusables/customInput/CustomInput'
import CustomInputContainer from '../../containers/CustomInputContainer'

class HomePage extends React.Component {
  constructor () {
    super()
    this.addField = this.addField.bind(this)
  }

  addField (section, index, e) {
    let key = (section + index + 'key').toString()
    let value = (section + index + 'value').toString()
    this.setState({
      [key]: 'field',
      [value]: ''
    })
    this.props.addDynamicField(section)
  }

  updateFieldName (e) {
    let section = e.target.id.split(' ')[0]
    let index = e.target.id.split(' ')[1]
    let fieldName = e.target.innerHTML
    let fieldValue = this.state[section + index + 'value']
    this.setState({
      [section + index + 'key']: fieldName
    })
    this.props.updateField('UPDATE_FIELD_NAME', section, index, fieldName, fieldValue)
  }

  updateFieldValue (e) {
    let section = e.target.name
    let index = e.target.id
    let fieldName = this.state[section + index + 'key']
    let fieldValue = e.target.value
    this.setState({
      [section + index + 'value']: fieldValue
    })
    this.props.updateField('UPDATE_FIELD_VALUE', section, index, fieldName, fieldValue)
  }

  render () {
    return (
      <div className='home-page-container'>
        <header> Resume Generator </header>
        <div className='resume'>
          <CustomInputContainer type='text' label='Name' placeholder='Your name' name='name' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='email' label='Email Id' placeholder='Your email' name='email' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='text' label='Address' placeholder='Your address' name='address' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='text' label='Phone number' placeholder='Phone number' name='contactNumber' labelCss='label' fieldCss='field' />
          
          <div className='section-container'>
            <div className='title'> Education * </div>
            <div className='description'>
              <CustomInputContainer type='text' label='Institute' placeholder='College name ' name='education institute' labelCss='label sectionLabel' fieldCss='field sectionField' />
              <CustomInputContainer type='text' label='Degree' placeholder='Degree' name='education degree' labelCss='label sectionLabel' fieldCss='field sectionField' />
              {
                this.props.additionalInfo_education.map( (data, index) =>
                  <div key={index} className='input-container'>
                    <div contentEditable={true}  id={'education' + ' ' + index} className='label sectionLabel' onInput={this.updateFieldName.bind(this)}>Field</div>
                    <input type='text' name='education' id={index} placeholder='value' className='field sectionField' onChange={this.updateFieldValue.bind(this)} />
                  </div>
                )
              }
              <div className='add-field' onClick={this.addField.bind(this, 'education', this.props.additionalInfo_education.length)}> + Field </div>
            </div>
          </div>

          <div className='section-container'>
            <div className='title'> Experience * </div>
            <div className='description'>
              <CustomInputContainer type='text' label='Company' placeholder='Company name ' name='experience company' labelCss='label sectionLabel' fieldCss='field sectionField' />
              <CustomInputContainer type='text' label='Designation' placeholder='Designation' name='experience designation' labelCss='label sectionLabel' fieldCss='field sectionField' />
              {
                this.props.additionalInfo_experience.map((data, index) =>
                  <div key={index} className='input-container'>
                    <div contentEditable={true} id={'experience' + ' ' + index} className='label sectionLabel' onInput={this.updateFieldName.bind(this)} >Field</div>
                    <input type='text' name='experience' id={index} placeholder='value' className='field sectionField' onChange={this.updateFieldValue.bind(this)} />
                  </div>
                )
              }
              <div className='add-field' onClick={this.addField.bind(this, 'experience', this.props.additionalInfo_experience.length)}> + Field </div>
            </div>
          </div>

          <button className='button'>Submit</button>
        </div>

      </div>
    )
  }
}

export default HomePage
