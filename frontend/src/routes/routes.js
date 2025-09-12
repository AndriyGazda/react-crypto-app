export const ROUTES = {
  HOME: '/',
  CRYPTO: {
    CRYPTO_WALLET: '/cryptoWallet',
    CRYPTO_DETAILS:(cryptoId= ':cryptoId')=> `/cryptoWallet/details/${cryptoId}`,
    CRYPTO_NEW_ASSET: (cryptoId = ':cryptoId')=> `/cryptoWallet/newAsset/${cryptoId}`,
    CRYPTO_NEW_ASSET_SUCCESS:(cryptoId = ':cryptoId')=> `/cryptoWallet/newAsset/${cryptoId}/success`
  },
  NOT_FOUND: '*'
}