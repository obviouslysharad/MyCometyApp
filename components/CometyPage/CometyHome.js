import React from 'react'
import { View , StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { setActivePopup } from '../../store/reducers/commonData/commonDataReducer'
import store from '../../store/store'
import CometyTable from './CometyTable'

const CometyHome = () => {
    function luckyDrawHandler() {
        store.dispatch(setActivePopup("LUCKY_DRAW"))
    }
  return (
    <View style={styles.container}>
        <CometyTable/>
        <View style = {styles.luckyDrawBtnContainer}>
            <Button textColor = "white" style = {styles.luckyDrawBtn} mode="outlined" onPress = {luckyDrawHandler}>LUCKY DRAW</Button>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: '#FAFAFA'
    },
    luckyDrawBtnContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    luckyDrawBtn: {
        width: '40%',
        margin: 6,
        backgroundColor: '#6C63FF',
    }
})

export default CometyHome