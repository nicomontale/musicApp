import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import BannerComponents from '../Components/BannerComponents'
import CatalogComponents from '../Components/CatalogComponents'
import SongsComponents from '../Components/SongsComponent';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Discover extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.inputcontainer}>
            <TextInput placeholder="Search.." placeholderTextColor="#fff" style={styles.input}/>
            </View>
            <TouchableOpacity style={styles.search}>
            
            <Icon name="ios-search" size={25} color="#fff"/>
            </TouchableOpacity>
            <ScrollView>
            <Text style={styles.title}>Recently serched..</Text>
            <SongsComponents navigation={this.props.navigation}/>
            <CatalogComponents navigation={this.props.navigation}/>
            
            
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({ container: {
    flex:1,
    backgroundColor: '#000'
}, title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
    margin:10,
    marginLeft:30,
    marginTop: 25,
    
},
input: {
    marginTop: 50,
    marginLeft: 20,
    width: '80%',
    height: 40,
    padding: 10,
    backgroundColor:'#ff5b77',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#ff5b77',
    fontSize: 20
},
inputcontainer: {
    flexDirection:'row'.navigation
},
search: {
    height: 40,
    justifyContent: "center",
    alignItems: 'center',
    position:'absolute',
    right: 75,
    marginTop: 50
}
})


