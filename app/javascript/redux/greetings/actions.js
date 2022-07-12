import Message from './service';

export const greetingsActions = () => (dispatch) => {
  Message().then((data) => {
    console.log('Actions datattt', data.message);
    dispatch({
      type: 'SET_GREETING',
      payload: data.message,
    });
  });
};
