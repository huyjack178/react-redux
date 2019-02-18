import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import UserPage from './UserPage';
import {  makeSelectUserList } from './selectors';
import reducer from './reducer';

const mapDispatchToProps = () => ({});

const mapStateToProps = createStructuredSelector({
  userList: makeSelectUserList(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'user', reducer });

export default compose(
  withReducer,
  withConnect,
)(UserPage);

export { mapDispatchToProps };
