import {useSelector} from 'react-redux'

export const getActivePopup = () => useSelector(state => state?.commonData?.activePopup);

export const getActivePopupProps = () => useSelector(state => state?.commonData?.activePopupProps);

export const getActiveScreen = () => useSelector(state => state?.commonData?.activeScreen);

