import { connect } from 'react-redux'
import CustomInput from '../components/reusables/customInput/CustomInput'
import {saveBasicInfo, saveSectionInfo} from '../redux/actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

/* to update global redux data  (Write to redux) */

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveBasicInfo: (field, value) => {
      let section = field.split(' ')[0]
      if (section === 'education') {
        dispatch(saveSectionInfo('education', field.split(' ')[1], value))
      } else if (section === 'experience') {
        dispatch(saveSectionInfo('experience', field.split(' ')[1], value))
      } else {
        dispatch(saveBasicInfo(field, value))
      }
    }
  }
}

const CustomInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomInput)

export default CustomInputContainer
