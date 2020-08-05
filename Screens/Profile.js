import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfileComponent from '../Components/ProfileComponent'
export default function Profile() {
    return (
        <View style={styles.container}>
           
            <ProfileComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
   
        backgroundColor: '#000'
    },
    title: {
        
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 40,
        margin:10,
        marginLeft:35,
      
    }
})
