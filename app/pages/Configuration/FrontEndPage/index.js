import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import FrontEndPage from './FrontEndPage';
import { makeSelectFrontEndList } from './selectors';
import reducer from './reducer';

const mapDispatchToProps = () => ({});

const mapStateToProps = createStructuredSelector({
  frontEndList: makeSelectFrontEndList(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'frontend', reducer });

export default compose(
  withReducer,
  withConnect,
)(FrontEndPage);

export { mapDispatchToProps };
