import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet,
	Button,
	Image,
	ScrollView
} from 'react-native'


export default class AddNote extends Component {
	constructor (props) {
		super(props)
		this.state = {
			node:{"title": "",
				"note": "",
				"category_name": ""}
			
		}
	}

	static navigationOptions = {
	    headerTitle: 'Add Note',
	    headerTitleStyle: {
	    	textAlign: 'center',
	    	flexGrow: 1,
	    },
	    headerRight: (
	    	<TouchableOpacity style={{marginRight: 15}}>
	    		<Image 
					source={require('../assets/icons/checked.png')}
					onPress={this.handleNavigation}
	    		/>
	    	</TouchableOpacity>
	    ),
	};
	handleNavigation = () => {
		this.state.node.category_name = document.getElementById(txtname1).value
		
		this.state.node.value = document.getElementById(txtname2).value
        return <Redirect to ={referer} />
    	
	}
	render() {
		return(
			<ScrollView style={styles.ParentView}>
				<TextInput
					id="txtname1"
					style={styles.title} 
					placeholder="ADD TITLE ..." 
				/>
				<TextInput 
					id="txtname2"
					style={styles.description}
					multiline= {true}
					numberOfLines={10}
					placeholder="ADD DESCRIPTION ..." 
					
				/>
				<View style={{height: 100}} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	ParentView: {
		padding: 30,
	},
	title:{
		fontSize: 20,
		textAlignVertical: 'top'
	},
	description: {
		fontSize: 20,
		textAlignVertical: 'top'
	},
	picker: {
		height: 50, 
		width: 200,
		top: 10,
		borderWidth: 1,
	},
	headerTitle: {
		textAlign: 'center',
        backgroundColor: 'red',
        flexGrow:1,
        alignSelf:'center',
	}
})