import axios from "axios";
import { FilterParamsType } from "../features/listSlice/model";
import { config } from "../utils/config";
import { BASE_URL, STORYES } from "../utils/constant";

const api = axios.create({
    baseURL: BASE_URL
})

export const listRes = (params:FilterParamsType) => {
    return api.get(STORYES, config(params)).then(res => res)
}