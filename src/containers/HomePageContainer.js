import { connect } from 'react-redux'
import {addDynamicField, updateFieldValues} from '../redux/actions/actions'
import HomePage from '../components/homePage/HomePage'

const mapStateToProps = (state, ownProps) => {
  return {
    additionalInfo_education: state.saveBasicDetails.education.additionalInfo,
    additionalInfo_experience: state.saveBasicDetails.experience.additionalInfo
  }
}

/* to update global redux data  (Write to redux) */

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDynamicField: (section) => {
      dispatch(addDynamicField(section))
    },
    updateFieldValues: (section, index, value) => {
      dispatch(updateFieldValues(section, index, value))
    }

  }
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer
