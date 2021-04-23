import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native'
import moment from 'moment';

export default class CardHeaderFooterExample extends Component {

    handleNavigation = () => {
        this.props.navigation.navigate('EditNote', this.props.item)
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.parentView} 
                onPress={this.handleNavigation}
            >

                <View style={{
                                borderRadius: 10, 
                                padding: 15,
                                backgroundColor:'#C0EB6A'  
                                               
                            }}>

                    <Text numberOfLines={1} style={styles.title}>
                        {this.props.item.title}
                    </Text>
                    
                    <Text numberOfLines={5} style={styles.note}>
                        {this.props.item.note}
                    </Text>
                </View>
                
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    parentView: {
        borderRadius: 10,
        margin: 13,
        flex: 1,   
    },
    title: {
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 10,
    },
    note: {
        color: 'white',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
    }
})