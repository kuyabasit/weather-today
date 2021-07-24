import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SHOW_ALERT, REMOVE_ALERT } from '../types';
import { useReducer } from 'react';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Show Alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
        }),
      3000
    );
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
