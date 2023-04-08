import {useSelector} from 'react-redux'

export const getDisplayOverlay = () => useSelector(state => state?.commonData?.displayOverlay)