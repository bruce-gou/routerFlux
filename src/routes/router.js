import React from 'react';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Actions, Router, Modal, Tabs, Drawer, Stack} from 'react-native-router-flux';

import Study from '../pages/study';
import Course from '../pages/course';
import Discover from '../pages/discover';
import Me from '../pages/me';
import Drawers from '../pages/drawer';
import ErrorModal from '../pages/errorModal';

import Details from '../pages/details';
import AnalogBrowser from '../pages/AnalogBrowser';


const transitionConfig = () => ({
	screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

export default class App extends React.Component {
	render() {
		//hideNavBar 隐藏导航栏
		return(
			<Router>
				<Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
					<Stack key="root">
						<Drawer key="drawer" hideNavBar contentComponent={Drawers}>
					      	<Tabs>
					      		<Scene key="study" title="学习" component={Study}/>
						    		<Scene key="course" title="课程库" component={Course}/>
						    		<Scene key="discover" title="发现" component={Discover}/>
						    		<Scene key="me" title="我" component={Me}/>
					      	</Tabs>
						</Drawer>
						<Scene key="details" title="详情" component={Details} />
						<Scene key="analogBrowser" title="内置浏览器" component={AnalogBrowser} />
					</Stack>
					<Scene key="errorModal" hideNavBar component={ErrorModal} />
				</Modal>
			</Router>
		);
	}
}
