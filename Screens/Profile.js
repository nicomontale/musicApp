import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileComponent from '../Components/ProfileComponent'
import SongsComponent from '../Components/SongsComponent'
export default class Profile extends Component{
    constructor(props) {
        super(props);
    }
   render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <ProfileComponent/>
            <Text style={styles.title}>History</Text>
            <SongsComponent navigation={this.props.navigation}/>
            </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
   
        backgroundColor: '#000'
    },
    title: {
        
        fontSize: 26, 
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        margin:10,
        marginLeft:35,
      
    }
})
