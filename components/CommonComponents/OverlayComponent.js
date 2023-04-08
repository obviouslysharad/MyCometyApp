import React from 'react'
import { Dimensions, View } from 'react-native'
import { Modal, Portal, Provider } from 'react-native-paper'

const OverlayComponent = ({children}) => {
  return (
    <View style = {{backgroundColor: 'blue', height: Dimensions.get("window").height, width: Dimensions.get("window").width}}>
    <Provider style = {{backgroundColor: 'blue'}}>
        <Portal style = {{backgroundColor: 'blue'}}>
          <Modal visible style = {{backgroundColor: 'red'}}>
            {children}
          </Modal>

        </Portal>
    </Provider>
    </View>
  )
}

export default OverlayComponent