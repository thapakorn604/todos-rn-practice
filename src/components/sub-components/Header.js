import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <View style={styles.header}>
                <Text style={styles.headerText}>{ this.props.title }</Text>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    header : {
        marginTop : 50,
        justifyContent : 'center',
        flexDirection : 'row'
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 30
    },
})
export default Header;