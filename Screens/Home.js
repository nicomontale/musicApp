import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BannerComponents from '../Components/BannerComponents'
import CatalogComponents from '../Components/CatalogComponents'
import SongsComponents from '../Components/SongsComponent';
export default class Home extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.container}>
            
            <BannerComponents navigation={this.props.navigation}/>
            <CatalogComponents navigation={this.props.navigation}/>
            
            <Text style={styles.title}>Songs</Text>
            <SongsComponents navigation={this.props.navigation}/>
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
    marginLeft:35,
    marginTop: -20
}})


