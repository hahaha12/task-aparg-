import { listRes } from "../api/api";
import { calculateIntervalCount } from "./calculateIntervalCount";

export const getIntervalData = (params, count) => {
   

    const interval = setInterval(() => {

        listRes(params)

    }, calculateIntervalCount(count))

    return () => clearInterval(interval);
}