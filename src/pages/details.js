import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
class Course extends React.Component {
	render() {
	    return (
			<View style={styles.fill}>
		        <View style={styles.header}>
		          <Text style={styles.text}>Welcome to the home scene.</Text>
		          <Text style={styles.text}>详情页面</Text>
		        </View>
			</View>
	    );
	}
}
const styles = {
	fill: {
		flex: 1,
	},
	header: {
		flex: 4,
		padding: 20,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		justifyContent: 'center',
	}
};
// action
const action = data => ({
	type: 'data',
	payload: data,
});
//const mapStateToProps = ({ reducer }) => ({ data } = reducer);
export default Course;