import { FilterParamsType } from "../features/listSlice/model";

export const config = (params:FilterParamsType) => {
    return {
        params: { ...params }
    }
};

