

import { darkTheme, lightTheme } from "@/theme";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export default function useInit() {
	const [defaultTheme, setDefaultTheme] = useState(darkTheme);

	const [fontsLoaded, fontError] = useFonts({
		"Quicksand-Light": require("@/assets/fonts/Quicksand/Quicksand-Light.ttf"),
		"Quicksand-Regular": require("@/assets/fonts/Quicksand/Quicksand-Regular.ttf"),
		"Quicksand-Medium": require("@/assets/fonts/Quicksand/Quicksand-Medium.ttf"),
		"Quicksand-Bold": require("@/assets/fonts/Quicksand/Quicksand-Bold.ttf"),
		"Quicksand-SemiBold": require("@/assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
	});


	useEffect(() => {
		if (fontsLoaded) {
			setDefaultTheme(lightTheme);
		}
	}, [fontsLoaded]);

	return { fontsLoaded, fontError, defaultTheme }

}