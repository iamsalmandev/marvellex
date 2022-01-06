
const setItem = (key, value) => {
  try {
    return localStorage.setItem(key, value);
  } catch {}
};

const getItem = key => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const removeItem = key => {
  try {
    return localStorage.removeItem(key);
  } catch {}
};

const tokenKey = 'token';
export const setToken = token => setItem(tokenKey, token);
export const getToken = () => getItem(tokenKey);
export const removeToken = () => removeItem(tokenKey);

