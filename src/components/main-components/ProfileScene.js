import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'

import Header from '../sub-components/Header'

class ProfileScene extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { profile } = this.props
        return ( 
            <View style={styles.container}>
                <Header title="Profile"/>
                <View style={{flexDirection:"row", justifyContent:'space-between',margin: 50}}>
                    <Text>
                        { profile.firstName }
                    </Text>
                    <Text>
                        { profile.lastName }
                    </Text>
                    <Text>
                        { profile.lastUpdate }
                    </Text>
                </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex : 1,
    },
})
 
export default ProfileScene;