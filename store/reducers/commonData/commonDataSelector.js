import {useSelector} from 'react-redux'

export const getActivePopup = () => useSelector(state => state?.commonData?.activePopup);