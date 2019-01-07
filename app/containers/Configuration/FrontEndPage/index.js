import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import FrontEndPage from './FrontEndPage';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
  frontEndList: makeSelectRepos(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'frontend', reducer });

export default compose(withReducer, withConnect)(FrontEndPage);

export { mapDispatchToProps };

