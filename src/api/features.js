import { FetchData } from '../utils/fetch';

export default {
    getFeatures: async () => {
        const res = await FetchData.get('features');
        return res;
    },
    deleteFeature: async (id) => {
        const res = await FetchData.delete(`features/delete`, {
            id
        });
        return res;
    }
}