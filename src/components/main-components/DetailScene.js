import React from 'react';
import { View, Text } from "react-native"

const DetailScene = props => {
    const detail = props.navigation.getParam("detail", "No Detail")
    return (
        <View style={{flex:1, padding:10}}>
            <Text>
                { detail }
            </Text>
        </View>
    )
}

DetailScene.navigationOptions = {
    title : "Detail"
}

export default DetailScene