import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Drawer extends React.Component {
	render() {
	    return (
			<View style={styles.fill}>
		        <TouchableOpacity style={styles.header} onPress={Actions.pop}>
		          <Text style={styles.text}>Welcome to the home scene.</Text>
		          <Text style={styles.text}>错误模态框</Text>
		        </TouchableOpacity>
			</View>
	    );
	}
}

const styles = {
	fill: {
		flex: 1,
	},
	header: {
		flex: 2,
		padding: 20,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		justifyContent: 'center',
	}
};

//const mapStateToProps = ({ reducer }) => ({ data } = reducer);
export default Drawer;
