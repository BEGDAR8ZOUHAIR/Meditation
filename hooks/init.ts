

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

		"Vazirmatn-Black": require("@/assets/fonts/Vazirmatn/Vazirmatn-Black.ttf"),
		"Vazirmatn-Bold": require("@/assets/fonts/Vazirmatn/Vazirmatn-Bold.ttf"),
		"Vazirmatn-Light": require("@/assets/fonts/Vazirmatn/Vazirmatn-Light.ttf"),
		"Vazirmatn-Regular": require("@/assets/fonts/Vazirmatn/Vazirmatn-Regular.ttf"),
		"Vazirmatn-Thin": require("@/assets/fonts/Vazirmatn/Vazirmatn-Thin.ttf"),
		"Vazirmatn-Medium": require("@/assets/fonts/Vazirmatn/Vazirmatn-Medium.ttf"),
		"Vazirmatn-ExtraBold": require("@/assets/fonts/Vazirmatn/Vazirmatn-ExtraBold.ttf"),
		"Vazirmatn-ExtraLight": require("@/assets/fonts/Vazirmatn/Vazirmatn-ExtraLight.ttf"),
		"Vazirmatn-SemiBold": require("@/assets/fonts/Vazirmatn/Vazirmatn-SemiBold.ttf"),

		"OpenSans-Bold": require("@/assets/fonts/OpenSans/OpenSans-Bold.ttf"),
		"OpenSans-ExtraBold": require("@/assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
		"OpenSans-Light": require("@/assets/fonts/OpenSans/OpenSans-Light.ttf"),
		"OpenSans-Regular": require("@/assets/fonts/OpenSans/OpenSans-Regular.ttf"),
		"OpenSans-SemiBold": require("@/assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
		"OpenSans-Medium": require("@/assets/fonts/OpenSans/OpenSans-Medium.ttf"),
	});


	useEffect(() => {
		if (fontsLoaded) {
			setDefaultTheme(lightTheme);
		}
	}, [fontsLoaded]);

	return { fontsLoaded, fontError, defaultTheme }

}