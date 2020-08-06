import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PlayerComponent from '../Components/PlayerComponent'
export default class Player extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let item = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <PlayerComponent navigation={this.props.navigation} item={item} />
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
