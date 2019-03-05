//模拟内置浏览器
import React from 'react';
import { View, Text, Linking, WebView } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class AnalogBrowser extends React.Component {
	constructor(props) {
		super(props);
	}
	_injectJavaScript = () => `
        var a = document.getElementsByTagName('a');
        for(var i = 0; i < a.length; i++){
            a[i].onclick = function (event) {
                window.postMessage(this.href);
                event.preventDefault();
            }
        }
    `
	render() {
		console.log(this.props)
	    return (
			<WebView 
                style={{flex: 1}}
                source={{uri: 'http://www.baidu.com'}}
            />
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
export default AnalogBrowser;
