import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from '@/utils/dva';

@connect(({ home }) => ({ $data: home }))
class Study extends React.Component {
	constructor(props) {
		super(props);
	}
	goNext = () => {	
		this.props.dispatch({ type: 'home/test' })
	}
	contactBaidu = () => {
		var baiduURL = 'http://www.baidu.com/'
		Linking.canOpenURL(baiduURL).then(supported => {
			if(!supported) {
				console.warn('Can\'t handle url: ' + baiduURL);
			} else {
				return Linking.openURL(baiduURL);
			}
		}).catch(err => console.error('An error occurred', baiduURL));
	}
	render() {
		const { name, flg } = this.props.$data;
	    return (
			<View style={styles.fill}>
		        <View style={styles.header}>
		          <Text style={styles.text}>Welcome to the home scene.</Text>
		          <Text style={styles.text}>学习</Text>
		        </View>
		        <Button onPress={Actions.analogBrowser}>打开内置浏览器</Button>
		        <Button onPress={this.contactBaidu}>打开外部浏览器</Button>
		        <Button onPress={Actions.errorModal}>打开模态框</Button>
		        <Button onPress={this.goNext}>{name}</Button>
		        {
		        		flg ? <Button onPress={Actions.details}>详情页面</Button> : null
		        }
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
export default Study;
