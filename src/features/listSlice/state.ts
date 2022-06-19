import { IListType } from "./model";

export const initialState: IListType = {
    data: [],
    filters: {
        params: {
            limit: '20',
            order: 'top',
            page_token: '98807224-712f-4658-9d31-98f77773333',
            languages: 'en,fr'
        },
        count: {
            intervalCount: '3000'
        }

    },
    loading: false,
    error: []
}