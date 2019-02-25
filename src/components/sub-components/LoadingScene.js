import React from 'react';
import { View, ActivityIndicator} from "react-native"

const LoadingScene = props => {
    return (
        <View style={{flex:1,backgroundColor:'white',alignContent:'center',justifyContent : "center",}}>
            <ActivityIndicator/>
        </View>
    )
}

export default LoadingScene