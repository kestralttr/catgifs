import {connect} from 'react-redux';
import Main from './Main';
import {requestTotalCount,requestGIF} from "../actions/mainActions";

const mapStateToProps = state => ({
  state:state
});

const mapDispatchToProps = dispatch => ({
  requestTotalCount: () => dispatch(requestTotalCount()),
  requestGIF: (offset) => dispatch(requestGIF(offset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
