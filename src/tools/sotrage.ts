export type StoreType<DT> = {
  get: (key: string) => DT | undefined;
  set: (key: string, value: DT) => void;
};

const isLocalStorageAvailable =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export type LocalStorageStoreOptionsType = {
  keyPrefix: string;
};

const getKey = (key: string, prefix?: string): string => {
  const prefixKey = prefix ? `${prefix}_` : '';
  return `${prefixKey}${key}`;
};

export function createLocalStorageStore<DT>(options?: LocalStorageStoreOptionsType): StoreType<DT> {
  return {
    get: (key: string) => {
      if (isLocalStorageAvailable) {
        try {
          return JSON.parse(
            window.localStorage.getItem(getKey(key, options?.keyPrefix)) || '',
          ) as DT;
        } catch (error) {
          console.log('[Local Storage Store] Error retrieving state.');
        }
      }
      return undefined;
    },
    set: (key, value) => {
      if (isLocalStorageAvailable) {
        window.localStorage.setItem(getKey(key, options?.keyPrefix), JSON.stringify(value));
      }
    },
  };
}
