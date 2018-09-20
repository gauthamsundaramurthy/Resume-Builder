import React from 'react'
import './HomePage.css'

// import CustomInput from '../reusables/customInput/CustomInput'
import CustomInputContainer from '../../containers/CustomInputContainer'

class HomePage extends React.Component {
  constructor () {
    super()
    this.addField = this.addField.bind(this)
  }

  addField () {

  }
  
  render () {
    return (
      <div className='home-page-container'>
        <div className='resume'>
          <CustomInputContainer type='text' label='Name' placeholder='Your name' name='name' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='email' label='Email Id' placeholder='Your email' name='email' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='text' label='Address' placeholder='Your address' name='address' labelCss='label' fieldCss='field' />
          <CustomInputContainer type='text' label='Contact number' placeholder='Contact number' name='contactNumber' labelCss='label' fieldCss='field' />
          
          <div className='section-container'>
            <div className='title'> Education * </div>
            <div className='description'>
              <CustomInputContainer type='text' label='Institute' placeholder='College name ' name='education institute' labelCss='label sectionLabel' fieldCss='field' />
              <CustomInputContainer type='text' label='Degree' placeholder='Degree' name='education degree' labelCss='label sectionLabel' fieldCss='field' />
              
              <div className='add-field' onClick={this.addField}> + Field </div>
            </div>
          </div>

          <div className='section-container'>
            <div className='title'> Experience * </div>
            <div className='description'>
              <CustomInputContainer type='text' label='Company' placeholder='Company name ' name='experience company' labelCss='label sectionLabel' fieldCss='field' />
              <CustomInputContainer type='text' label='Designation' placeholder='Designation' name='experience designation' labelCss='label sectionLabel' fieldCss='field' />
              
              <div className='add-field' onClick={this.addField}> + Field </div>
            </div>
          </div>

          <button className='button'>Submit</button>
        </div>

      </div>
    )
  }
}

export default HomePage
