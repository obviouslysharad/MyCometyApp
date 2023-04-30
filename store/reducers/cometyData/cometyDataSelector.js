import {useSelector} from 'react-redux'

export const getSelectedCometyName = () => useSelector((state) => state?.cometyData?.selectedCometyName);

export const getUsersData = () => useSelector((state) => state?.cometyData?.usersData);

export const getCometyAmount = () => useSelector((state) => state?.cometyData?.cometyAmount);

export const getCometyStartDate = () => useSelector((state) => state?.cometyData?.cometyStartDate);

export const getCometyData = () => useSelector((state) => state?.cometyData);

export const getWinnerOfTheMonth = () => useSelector((state) => state?.cometyData?.winnderOfTheMonth);

export const getInterestOfTheMonth = () => useSelector((state) => state?.cometyData?.interestOfTheMonth);

export const getActiveMonth = () => useSelector((state) => state?.cometyData?.activeMonth);