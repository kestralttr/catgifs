import {connect} from 'react-redux';
import Main from './Main';
import {requestTotalCount} from "../actions/mainActions";

const mapStateToProps = state => ({
  state:state
});

const mapDispatchToProps = dispatch => ({
  requestTotalCount: () => dispatch(requestTotalCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
