import { useSelector } from "react-redux";

export const getMonthsList = () => useSelector(state => state?.cometyMonthly?.monthsList)

export const getAllMonthsData = () => useSelector(state => state?.cometyMonthly?.dataAllMonths)