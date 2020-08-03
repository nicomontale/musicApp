import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BannerComponents from '../Components/BannerComponents'
import CatalogComponents from '../Components/CatalogComponents'
export default class Home extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.container}>
            
            <BannerComponents navigation={this.props.navigation}/>
            <CatalogComponents navigation={this.props.navigation}/>
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
    color: '#000',
    marginTop: 40,
    margin:10,
    marginLeft:15
}})


