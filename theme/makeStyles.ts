import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { theme } from "./index";

/**
 * @author ayaStar
 * This function is used to create styles for components
 * @param cb - A function that returns a StyleSheet object
 * @returns A function that returns a StyleSheet object
 * @example
 * const useStyles = makeStyles((theme) => ({
 *  container: {},
 * }));
 */


export const makeStyles = <
	T extends StyleSheet.NamedStyles<T>,
	P extends Record<string, unknown> = Record<string, unknown>
>(
	cb:
		| ((
			theme: theme,
			props?: P
		) => T | StyleSheet.NamedStyles<T>)
		| StyleSheet.NamedStyles<T>
		| T
) => {
	return (props?: P) => {
		const theme = useTheme();

		if (typeof cb === "function") return StyleSheet.create(cb(theme, props));

		return StyleSheet.create(cb);
	};
};

// over useTheme to use theme type instead of MD3Theme
export const useAppTheme = () => useTheme<theme>();