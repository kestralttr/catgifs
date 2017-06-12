import {connect} from 'react-redux';
import Main from './Main';
import {requestGIF} from "../actions/mainActions";

const mapStateToProps = state => ({
  state:state
});

const mapDispatchToProps = dispatch => ({
  requestGIF: (offset) => dispatch(requestGIF(offset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
