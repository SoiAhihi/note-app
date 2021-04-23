import React, { Component } from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	Modal,
	StatusBar,
	ActivityIndicator
} from 'react-native';

// Components
import NoteCard from '../components/card';
import Sorting from '../components/Sorting';


class Home extends Component {

	state = {
		notes: [
			{
			"id": 0,
			"title": "React Redux",
			"note": "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
			}
			
		]
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Notes-App',
		    headerTitleStyle: {
		    	textAlign: 'center',
		    	flexGrow: 1,
		    },
		} 
	};

	handleNavigation = () => {
		this.props.navigation.navigate('AddNote')
	}

	render () {
		return (
			<View style={styles.parentView}>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<FlatList 
					style={styles.flatList}
					data={this.state.notes}
					numColumns={2}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => {
						return(
							<NoteCard item={item} navigation={this.props.navigation} />
						)
					}}
				/>
				<TouchableOpacity 
					style={styles.actionButton}
					onPress={this.handleNavigation}
				>
					<Text style={styles.actionButtonLogo}>+</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


export default Home;



const styles = StyleSheet.create({
	parentView: {
		backgroundColor: '#FFFFFF',
		flex: 1,
		position: 'relative'
	},
	search: {
		width: '90%',
		alignSelf: 'center',
		marginTop: 30,
		backgroundColor: 'white',
		elevation: 4,
		borderRadius: 50,
		paddingHorizontal: 25,
		fontSize: 20,
	},
	flatList: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	actionButton: {
		width: 70,
		height: 70,
		backgroundColor: 'white',
		borderRadius: 100, 
		position: 'absolute',
		elevation: 10,
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 30,
		right: 30
	},
	actionButtonLogo: {
		fontSize: 30,
		fontWeight:'bold'
	},
	isLoading: {
		marginTop: 100,
	},
	isError: {
		alignSelf: 'center',
		fontSize: 20,
		marginTop: 100,
	}
})