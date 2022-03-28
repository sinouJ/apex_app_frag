import { FetchData } from '../utils/fetch';

export default {
    getFeatures: async () => {
        const res = await FetchData.get('features');
        return res;
    }
}