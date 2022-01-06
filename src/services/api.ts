import axios_ from 'axios';
const baseURL = process.env.REACT_APP_BACKEND_URL || '';

export const login = (timestamp: string, signature: string) => {
  axios_
    .post(`${baseURL}/auth/marketplace`, { timestamp, signature })
    .then((response) => {
      return;
    })
    .catch((e) => {
      console.log('login error', e);
    });
};
