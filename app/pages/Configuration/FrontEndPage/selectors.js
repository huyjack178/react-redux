/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectFrontEnd = (state) => state.get('frontend');

const makeSelectFrontEndList = () =>
  createSelector(
    selectFrontEnd,
    (frontEndState) => frontEndState.get('frontEndList'),
  );

export { selectFrontEnd, makeSelectFrontEndList };
