import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("myFirstApp.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("myFirstApp.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("myFirstApp.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("myFirstApp.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("myFirstApp.SideDrawer", () => SideDrawer, store, Provider);

// Start an App
export default () => Navigation.startSingleScreenApp({
	screen: {
		screen: "myFirstApp.AuthScreen",
		title: "Login"
	}
	})
