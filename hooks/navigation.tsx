/**
* This hook will be used to handle all navigation related functionalities
*/

import { CommonActions, DrawerActions, StackActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";

export interface CustomNavigationState {
	isFocused: boolean;
	navigate: (screen: string, params?: Record<string, unknown>) => void;
}

const useCustomNavigation = () => {

	const navigation = useNavigation();

	/**
	 * is Focused
	 */
	const isFocused = navigation.isFocused();
	/**
	 * Open the drawer
	 */
	const openDrawer = () => {
		navigation.dispatch(DrawerActions.openDrawer());
	};

	/**
	 * Navigate to the specified screen
	 */
	const navigate = (screen: string, params?: Record<string, unknown>) => {
		navigation.dispatch(CommonActions.navigate(screen, params));
	};

	/**
	 * push the specified screen to the navigation stack
	 */
	const push = (screen: string, params?: Record<string, unknown>) => {
		navigation.dispatch(StackActions.push(screen, params));
	};

	/**
	 * Go back to the previous screen
	 */
	const goBack = () => {
		router.back();
	};

	/**
	 * replace the current screen with the specified screen
	 */
	const replace = (screen: string, params?: Record<string, unknown>) => {
		navigation.dispatch(StackActions.replace(screen, params));
	};

	/**
	 * Reset the navigation stack to the specified screen
	 */
	const reset = (screen: string, params?: Record<string, unknown>) => {
		navigation.reset({ index: 0, routes: [{ name: screen as never, params }] });
	};

	/**
	 * Reset to the specified screen
	 */
	const resetToHome = () => {
		navigation.dispatch(CommonActions.reset({
			routes: [{ key: "(tabs)", name: "(tabs)" }]
		}));

	};

	const backToSettings = () => {
		navigation.dispatch(CommonActions.reset({
			routes: [{ key: "(tabs)", name: "(tabs)", params: { screen: "settings" } }]
		}));
	};

	/**
	 * can go back
	 */
	const canGoBack = () => {
		return navigation.canGoBack();
	};

	/**
	 * Reset Params
	 */
	const resetParams = () => {
		navigation.dispatch(CommonActions.setParams({}));
	};


	/**
	 * Get Last Route
	 */
	const getLastRoute = () => {
		return navigation.getState().routes[navigation.getState().routes.length - 1];
	};

	/**
	 * Get The Current Route
	 */
	const getCurrentRoute = () => {
		return navigation.getState().routes[navigation.getState().routes.length - 1];
	};

	/**
	 * pop count
	 */
	const popCount = (count: number) => {
		navigation.dispatch(StackActions.pop(count));
	};

	return {
		navigate,
		goBack,
		replace,
		reset,
		openDrawer,
		push,
		canGoBack,
		isFocused,
		resetParams,
		getLastRoute,
		getCurrentRoute,
		resetToHome,
		backToSettings,
		popCount
	};

};

export {
	useCustomNavigation
};
