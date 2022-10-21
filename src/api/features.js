import { FetchData } from '../utils/fetch';

export default {
    getFeatures: async () => {
        const res = await FetchData.get('features');
        return res;
    },
    deleteFeature: async (id) => {
        const res = await FetchData.delete(`features/delete`, { // TODO: Remove the 'delete' from the path
            id
        });
        return res;
    },
    postFeature: async (message) => {
        const res = await FetchData.post('features', {
            message
        });
        return res;
    }
}