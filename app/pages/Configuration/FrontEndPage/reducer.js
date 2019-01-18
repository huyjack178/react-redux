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
  frontEndList: [
    {
      id: '1',
      name: 'skynex',
      balanceMode: 'http',
      backendName: 'skynex-backend',
      bindAddress: '*',
      bindPort: '6969',
    },
    {
      id: '2',
      name: 'skynex',
      balanceMode: 'http',
      backendName: 'skynex-backend',
      bindAddress: '*',
      bindPort: '6969',
    },
  ],
});

function frontendReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default frontendReducer;
