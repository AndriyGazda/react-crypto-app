import { cryptoAssets, cryptoData } from '../data.js';

export const fakeFetchCrypto = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1000);
  });
};

export const fetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
};

// const url = 'https://openapiv1.coinstats.app/coins';
// const options = {method: 'GET', headers: {'X-API-KEY': 'vzMk2oSpmTAQNyj7f6pUi3ZK033MqEH119pvFUk18Pc='}, body: undefined};
//
// try {
//   const response = await fetch(url, options);
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
