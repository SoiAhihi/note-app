import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet,
	Image
} from 'react-native'



export default class EditNote extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: this.props.navigation.state.params.title,
			note: this.props.navigation.state.params.note,
		}
	}

	titleChange = (value) => {
		this.setState({
			title: value
		})
	}

	noteChange = (value) => {
		this.setState({
			note: value
		})
	}

	static navigationOptions = {
	    headerTitle: 'Edit Note',
	    headerTitleStyle: {
	    	textAlign: 'center',
	    	flexGrow: 1,
	    },
	};

	render() {
		return(
			<View style={styles.ParentView}>
				<TextInput
					style={styles.title} 
					value={this.state.title}
					onChangeText={this.titleChange}
					placeholder="ADD TITLE ..." 
				/>
				<TextInput 
					style={styles.description}
					value={this.state.note}
					multiline= {true}
					numberOfLines={10}
					onChangeText={this.noteChange}
					placeholder="ADD DESCRIPTION ..." 
				/>
				
			</View>
		)
	}
}


const styles = StyleSheet.create({
	ParentView: {
		margin: 30,
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
})