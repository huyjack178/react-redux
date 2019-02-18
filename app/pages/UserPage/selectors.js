/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectUserList = () =>
  createSelector(
    selectUser,
    (userState) => userState.get('userList'),
  );

export { selectUser, makeSelectUserList };
