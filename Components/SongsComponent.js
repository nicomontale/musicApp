import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SongsComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
