import { types } from '../types/types';

export const mascotaAddNew = (e) => ({
    type: types.mascotaAddNew,
    payload: e
});

export const mascotaSetItem = (e) => ({
    type: types.mascotaSetItem,
    payload: e
});

export const mascotaUpdateItem = (e) => ({
    type: types.mascotaEditItem,
    payload: e
});

export const mascotaDeleteItem = (e) => ({
    type: types.mascotaDeleteItem,
    payload: e
});