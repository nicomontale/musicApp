import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PlayerComponent from '../Components/PlayerComponent'
export default class Player extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <PlayerComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: 
    {
        flex:1
    }
})
