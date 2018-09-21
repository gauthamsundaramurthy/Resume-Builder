import React from 'react'
import './HomePage.css'

// import CustomInput from '../reusables/customInput/CustomInput'
import CustomInputContainer from '../../containers/CustomInputContainer'

class HomePage extends React.Component {
  constructor () {
    super()
    this.addField = this.addField.bind(this)
    // this.updateFieldValues = this.updateFieldValues.bind(this)
  }

  addField (section, e) {
    this.props.addDynamicField(section)
  }
  
  updateFieldValues (e) {
    this.props.updateFieldValues(e.target.name, e.target.id, e.target.value)
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
                    <div contentEditable={true} className='label sectionLabel'> Field </div>
                    <input type='text' name='education' id={index} placeholder='value' className='field sectionField' onChange={this.updateFieldValues.bind(this)} />
                  </div>
                )
              }
              <div className='add-field' onClick={this.addField.bind(this, 'education')}> + Field </div>
            </div>
          </div>

          <div className='section-container'>
            <div className='title'> Experience * </div>
            <div className='description'>
              <CustomInputContainer type='text' label='Company' placeholder='Company name ' name='experience company' labelCss='label sectionLabel' fieldCss='field sectionField' />
              <CustomInputContainer type='text' label='Designation' placeholder='Designation' name='experience designation' labelCss='label sectionLabel' fieldCss='field sectionField' />
              {
                this.props.additionalInfo_experience.map(data =>
                  <div className='input-container'>
                    <div contentEditable={true} className='label sectionLabel' > Field </div>
                    <input type='text' placeholder='value' className='field sectionField' />
                  </div>
                )
              }
              <div className='add-field' onClick={this.addField.bind(this, 'experience')}> + Field </div>
            </div>
          </div>

          <button className='button'>Submit</button>
        </div>

      </div>
    )
  }
}

export default HomePage
