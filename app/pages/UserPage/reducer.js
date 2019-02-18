/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  userList: [
    {
      id: '1',
      name: 'huyjack1',
      balanceMode: 'http',
      backendName: 'skynex-backend',
      bindAddress: '*',
      bindPort: '6969',
    },
    {
      id: '2',
      name: 'huyjack2',
      balanceMode: 'http',
      backendName: 'skynex-backend',
      bindAddress: '*',
      bindPort: '6969',
    },
  ],
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
