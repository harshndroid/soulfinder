export default {
  getItem(key) {
    if (!key) throw new Error('Key is required to access item');
    return JSON.parse(localStorage.getItem(key));
  },
  setItem(key, value) {
    if (!key || !value || typeof value !== 'object')
      throw new Error('Key/Value is required to store item');
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key) {
    if (!key) throw new Error('Key is required to access item');
    localStorage.removeItem(key);
  },
};
