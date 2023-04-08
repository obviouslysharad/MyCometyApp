import {useSelector} from 'react-redux'

export const getSelectedCometyName = () => useSelector((state) => state?.cometyData?.selectedCometyName);

export const getUsersData = () => useSelector((state) => state?.cometyData?.usersData);

export const getCometyAmount = () => useSelector((state) => state?.cometyData?.cometyAmount);

export const getCometyStartDate = () => useSelector((state) => state?.cometyData?.cometyStartDate);

export const getCometyData = () => useSelector((state) => state?.cometyData);