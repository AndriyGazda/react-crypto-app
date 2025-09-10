import { create } from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";
import {percentDifference} from "../utils.js";
import {fakeFetchCrypto, fetchAssets} from "../api/api.js";

const mapAssets = (assets, result) =>  assets.map(asset => {
    const coin = result.find(coin => coin.id === asset.id);
    if (!coin) return asset;

    return {
      grow: asset.price < coin.price,
      growPercent: percentDifference(asset.price, coin.price),
      totalAmount: asset.amount * coin.price,
      totalProfit: asset.amount * coin.price - asset.amount * asset.price,
      name: coin.name,
      ...asset
    };
  });

const cryptoStore = (set, get) => ({
  loading: false,
  crypto: [],
  assets: [],

  preload: async () => {
    const storedAssets = get().assets;
    if (storedAssets.length > 0) return;

    set({loading: true});
    const {result} = await fakeFetchCrypto();
    const fetchedAssets = await fetchAssets();

    set({
      assets: mapAssets(fetchedAssets, result),
      crypto: result,
      loading: false
    });
  },

  addAsset: (newAsset) => {
    const {crypto, assets} = get();
    const updatedAssets = mapAssets([...assets, newAsset], crypto);
    set({assets: updatedAssets});
  }
});

export const useStore = create()(
  persist(cryptoStore, {
    name: 'crypto-storage',
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      if (!state.assets.length) {
        state.preload();
      }
    }
  })
);

export const useAssets = () => useStore((state) => state.assets);
export const useCrypto = () => useStore((state) => state.crypto);
export const useLoading = () => useStore((state) => state.loading);
export const useAddAsset = () => useStore.getState().addAsset;
export const usePreload = () => useStore.getState().preload;

