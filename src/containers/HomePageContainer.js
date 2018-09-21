import { connect } from 'react-redux'
import {addDynamicField, updateField} from '../redux/actions/actions'
import HomePage from '../components/homePage/HomePage'

const mapStateToProps = (state, ownProps) => {
  return {
    additionalInfo_education: state.saveBasicDetails.education.additionalInfo,
    additionalInfo_experience: state.saveBasicDetails.experience.additionalInfo,
    formData: state.saveBasicDetails
  }
}

/* to update global redux data  (Write to redux) */

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDynamicField: (section) => {
      dispatch(addDynamicField(section))
    },
    updateField: (actionType, section, index, fieldName, fieldValue) => {
      dispatch(updateField(actionType, section, index, fieldName, fieldValue))
    }
  }
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer
