const UPDATE_LOGIN = 'UPDATE-LOGIN';
const UPDATE_PASSWORD = 'UPDATE-PASSWORD';
const FIRE_LOGIN = 'FIRE-LOGIN';

let initialState = {
  email: '',
  password: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      let stateCopy = {...state};
      stateCopy.email = action.text;
      console.log(stateCopy.email);
      return stateCopy;
    }
    case UPDATE_PASSWORD: {
      stateCopy = {...state};
      stateCopy.password = action.text;
      return stateCopy;
    }
    case FIRE_LOGIN: {
      stateCopy = {...state}
      stateCopy.password = '';
      stateCopy.email = '';
      return stateCopy;
    }

    default: {
      return state;
    }
  }
};

export const passwordChangedCreator = (text) => ({type: UPDATE_PASSWORD,text: text});
export const loginChangedCreator = (text) => ({type: UPDATE_LOGIN, text: text});
export const fireUserCreator = () => ({type: FIRE_LOGIN});

export default loginReducer;
