import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import ConfigurationTemplate from "../../templates/Configuration";
import {actions} from '../../modules/chat/index';

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      messages: bindActionCreators(actions.messages, dispatch),
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ConfigurationTemplate);