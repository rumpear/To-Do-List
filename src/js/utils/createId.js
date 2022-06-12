export const createId = () => {
  const listID = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10; i++) {
    listID[i] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return listID.join('');
};
