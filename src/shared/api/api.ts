import axios from 'axios';
import { STORAGE_KEYS } from '../const/storageKeys';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(STORAGE_KEYS.AUTH) || '',
  },
});
