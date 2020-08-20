import {TACOS, TACOSGRANDES, QUESADILLAS, XTRA} from '../../data/dummyMenu';

const initialState = {
  availableProducts: [TACOS, TACOSGRANDES, QUESADILLAS, XTRA],
};

export default (state = initialState, action) => {
  return state;
};
