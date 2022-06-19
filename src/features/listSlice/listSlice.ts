import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listRes } from "../../api/api";
import { DataType, FilterParamsType, } from "./model";
import { initialState } from "./state";

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {

        getData: (state, { payload }: PayloadAction<DataType[]>) => {
            state.data = payload
        },

        setParams: (state, { payload }: PayloadAction<FilterParamsType>) => {
            state.filters.params = payload
        },

        setIntervalCount: (state, { payload }: PayloadAction<string>) => {
            state.filters.count.intervalCount = payload
        },

        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        },

        setError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload
        },

    },

})


export const { getData, setParams, setLoading, setError, setIntervalCount } = listSlice.actions

export default listSlice.reducer

export const getListData = (forms: FilterParamsType): any => async (dispatch: any) => {

    dispatch(setLoading(true))

    try {

        const { data } = await listRes(forms)

        dispatch(getData(data.stories))
        dispatch(setLoading(false))
    } catch (err: any) {

        dispatch(setError(err))
        dispatch(setLoading(false))
        throw new Error(err)

    } finally {
        console.log('request send');
    }
}