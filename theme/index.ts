// Theme Object: used to define the theme of the application
// Using React Native Paper as the theme provider

import { GLOBAL_SCALE } from "@/constants/device";
import { DefaultTheme, MD3Theme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { ms, mvs } from "react-native-size-matters";

interface colorVariants {
	"0": string;
	"50": string;
	"100": string;
	"200": string;
	"300": string;
	"400": string;
	"500": string;
	"600": string;
	"700": string;
	"800": string;
	"900": string;
}


export interface theme extends MD3Theme {
	colors: MD3Colors & {
		white: string,
		black: string,
		primaryVariants: colorVariants,
		secondaryVariants: colorVariants,
		tertiaryVariants: colorVariants,
		errorVariants: colorVariants,
		neutralVariants: colorVariants
	},
	borderRadius: {
		none: number;
		extraSmall: number;
		small: number;
		medium: number;
		large: number;
		extraLarge: number;
		full: number;
	};
	// For spacing, will use an array of numbers, where the index is the spacing value
	spacingHorizontal: (index: number) => number;
	spacingVertical: (index: number) => number;

	// We use custom font but we respect material design typography
	// https://material.io/design/typography/the-type-system.html#type-scale

	fonts: { [key: string]: unknown };

}

export const arabicFonts = {
	displaySmall: {
		fontFamily: "Vazirmatn-Black",
		fontSize: 30,
		letterSpacing: 0,
	},

	displayMedium: {
		fontFamily: "Vazirmatn-Black",
		fontSize: 35,
		letterSpacing: 0,
	},
	displayLarge: {
		fontFamily: "Vazirmatn-Black",
		fontSize: 35,
		letterSpacing: 0,
	},

	headlineLarge: {
		fontFamily: "Vazirmatn-Bold",
		fontSize: 32,
		letterSpacing: 0,
	},
	headlineMedium: {
		fontFamily: "Vazirmatn-Bold",
		fontSize: 28,
		letterSpacing: 0,
	},
	headlineSmall: {
		fontFamily: "Vazirmatn-Bold",
		fontSize: 24,
		letterSpacing: 0,
	},

	titleLarge: {
		fontFamily: "Vazirmatn-SemiBold",
		fontSize: 22,
		letterSpacing: 0,
	},
	titleMedium: {
		fontFamily: "Vazirmatn-SemiBold",
		fontSize: 16,
		letterSpacing: 0,
	},
	titleSmall: {
		fontFamily: "Vazirmatn-SemiBold",
		fontSize: 14,
		letterSpacing: 0,
	},

	labelLarge: {
		fontFamily: "Vazirmatn-Medium",
		fontSize: 14,
		fontWeight: "500",
		letterSpacing: 0,
	},
	labelMedium: {
		fontFamily: "Vazirmatn-Medium",
		fontSize: 12,
		letterSpacing: 0,
	},
	labelSmall: {
		fontFamily: "Vazirmatn-Medium",
		fontSize: 11,
		letterSpacing: 0,
	},

	bodyLarge: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 16,
		letterSpacing: 0,
	},
	bodyMedium: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 14,
		letterSpacing: 0,
	},
	bodySmall: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 12,
		letterSpacing: 0,
	},
};
export const englishFonts = {
	displaySmall: {
		fontFamily: "Quicksand-Bold",
		fontSize: 28,
		letterSpacing: 0,
		lineHeight: 44,
	},

	displayMedium: {
		fontFamily: "Quicksand-Bold",
		fontSize: 30,
		letterSpacing: 0,
		lineHeight: 52,
	},
	displayLarge: {
		fontFamily: "Quicksand-Bold",
		fontSize: 30,
		letterSpacing: 0,
		lineHeight: 64,
	},

	headlineLarge: {
		fontFamily: "Quicksand-Bold",
		fontSize: 28,
		letterSpacing: 0,
		lineHeight: 40,
	},
	headlineMedium: {
		fontFamily: "Quicksand-Bold",
		fontSize: 25,
		letterSpacing: 0,
		lineHeight: 36,
	},
	headlineSmall: {
		fontFamily: "Quicksand-Bold",
		fontSize: 22,
		letterSpacing: 0,
		lineHeight: 32,
	},

	titleLarge: {
		fontFamily: "Quicksand-Bold",
		fontSize: 22,
		letterSpacing: 0,
		lineHeight: 28,
	},
	titleMedium: {
		fontFamily: "Quicksand-Bold",
		fontSize: 16,
		letterSpacing: 0,
		lineHeight: 24,
	},
	titleSmall: {
		fontFamily: "Quicksand-Bold",
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 20,
	},

	labelLarge: {
		fontFamily: "Quicksand-SemiBold",
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 20,
	},
	labelMedium: {
		fontFamily: "Quicksand-SemiBold",
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 16,
	},
	labelSmall: {
		fontFamily: "Quicksand-SemiBold",
		fontSize: 11,
		letterSpacing: 0,
		lineHeight: 16,
	},

	bodyLarge: {
		fontFamily: "Quicksand-Medium",
		fontSize: 16,
		letterSpacing: 0,
		lineHeight: 24,
	},
	bodyMedium: {
		fontFamily: "Quicksand-Medium",
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 20,
	},
	bodySmall: {
		fontFamily: "Quicksand-Medium",
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 16,
	},
};

const theme = {
	...DefaultTheme,
	borderRadius: {
		none: 0,
		extraSmall: 8,
		small: 12,
		medium: 24,
		large: 36,
		extraLarge: 48,
		full: 9999,
	},
	spacingHorizontal: (index: number) => ms([0, 4, 8, 12, 16, 24, 32, 48, 56, 64, 72, 80, 96, 128][index], GLOBAL_SCALE),
	spacingVertical: (index: number) => mvs([0, 4, 8, 12, 16, 24, 32, 48, 56, 64, 72, 80, 96, 128][index], GLOBAL_SCALE),
	fonts: arabicFonts,
};

const lightVariants = {
	white: "#FFFFFF",
	black: "#000000",
	primaryVariants: {
		"50": "#E5FBF6",
		"100": "#CAF6EC",
		"200": "#96EED9",
		"300": "#61E5C6",
		"400": "#2DDCB3",
		"500": "#1DB18E",
		"600": "#178C71",
		"700": "#116955",
		"800": "#0C4638",
		"900": "#06231C",
	},
	secondaryVariants: {
		"50": "#FFF9EB",
		"100": "#FFF5DB",
		"200": "#FFE8AD",
		"300": "#FFDB80",
		"400": "#FFC83D",
		"500": "#FFB500",
		"600": "#E6A400",
		"700": "#CC9200",
		"800": "#A87900",
		"900": "#7A5800",
	},
	tertiaryVariants: {
		"50": "#E5F2FF",
		"100": "#CCE5FF",
		"200": "#99CAFF",
		"300": "#66B0FF",
		"400": "#3396FF",
		"500": "#007BFF",
		"600": "#0063CC",
		"700": "#004A99",
		"800": "#003166",
		"900": "#001933",
	},
	errorVariants: {
		"50": "#FFF5F5",
		"100": "#FFEBEB",
		"200": "#FFCCCC",
		"300": "#FFADAD",
		"400": "#FF8585",
		"500": "#FF4242",
		"600": "#FA0000",
		"700": "#DB0000",
		"800": "#B80000",
		"900": "#850000",
	},
	neutralVariants: {
		"0": "#FFFFFF",
		"50": "#f9f9fb",
		"100": "#eaeaf1",
		"200": "#cbcbdc",
		"300": "#afafca",
		"400": "#9191b6",
		"500": "#7272a1",
		"600": "#5a5a87",
		"700": "#454568",
		"800": "#33334d",
		"900": "#161622",
	},
};

const darkVariants = {
	white: "#FFFFFF",
	black: "#000000",
	primaryVariants: {
		"50": "#E5FBF6",
		"100": "#CAF6EC",
		"200": "#96EED9",
		"300": "#61E5C6",
		"400": "#2DDCB3",
		"500": "#1DB18E",
		"600": "#178C71",
		"700": "#116955",
		"800": "#0C4638",
		"900": "#06231C",
	},
	secondaryVariants: {
		"50": "#FFF9EB",
		"100": "#FFF5DB",
		"200": "#FFE8AD",
		"300": "#FFDB80",
		"400": "#FFC83D",
		"500": "#FFB500",
		"600": "#E6A400",
		"700": "#CC9200",
		"800": "#A87900",
		"900": "#7A5800",
	},
	tertiaryVariants: {
		"50": "#E5F2FF",
		"100": "#CCE5FF",
		"200": "#99CAFF",
		"300": "#66B0FF",
		"400": "#3396FF",
		"500": "#007BFF",
		"600": "#0063CC",
		"700": "#004A99",
		"800": "#003166",
		"900": "#001933",
	},
	errorVariants: {
		"50": "#FFF5F5",
		"100": "#FFEBEB",
		"200": "#FFCCCC",
		"300": "#FFADAD",
		"400": "#FF8585",
		"500": "#FF4242",
		"600": "#FA0000",
		"700": "#DB0000",
		"800": "#B80000",
		"900": "#850000",
	},
	neutralVariants: {
		"0": "#1C1E21",
		"50": "#272A2F",
		"100": "#3A3E45",
		"200": "#4d525c",
		"300": "#606773",
		"400": "#7c8492",
		"500": "#9ea4ae",
		"600": "#bfc3ca",
		"700": "#dee0e3",
		"800": "#eeeff1",
		"900": "#ffffff",
	},
};

const lightTheme: theme = {
	...theme,
	colors: {
		...DefaultTheme.colors,
		...lightVariants,
		primary: "#1DB18E",
		onPrimary: "#FFFFFF",
		primaryContainer: "#E5FBF6",
		onPrimaryContainer: "#1DB18E",

		secondary: "#FFB500",
		onSecondary: "#FFFFFF",
		secondaryContainer: "#FFF9EB",
		onSecondaryContainer: "#CC9200",

		tertiary: "#007BFF",
		onTertiary: "#FFFFFF",
		tertiaryContainer: "#E5F2FF",
		onTertiaryContainer: "#007BFF",

		error: "#FF4242",
		onError: "#FFFFFF",
		errorContainer: "#FFF5F5",
		onErrorContainer: "#FF4242",

		background: "#FFFFFF",
		onBackground: "#33334D",
		surface: "#F9F9FB",
		onSurface: "#33334D",
		surfaceVariant: "#EAEAF1",
		onSurfaceVariant: "#33334D",

		outline: "#F9F9FB",
		outlineVariant: "#EAEAF1",
	},
};

const darkTheme: theme = {
	...theme,
	colors: {
		...DefaultTheme.colors,
		...darkVariants,
		primary: "#1DB18E",
		onPrimary: "#161622",
		primaryContainer: "#06231C",
		onPrimaryContainer: "#2DDCB3",

		secondary: "#FFB500",
		onSecondary: "#FFFFFF",
		secondaryContainer: "#7A5800",
		onSecondaryContainer: "#FFDB80",

		tertiary: "#007BFF",
		onTertiary: "#161622",
		tertiaryContainer: "#001933",
		onTertiaryContainer: "#3396FF",

		error: "#FF4242",
		onError: "#161622",
		errorContainer: "#850000",
		onErrorContainer: "#FF8585",

		background: "#1C1E21",
		onBackground: "#EEEFF1",
		surface: "#272A2F",
		onSurface: "#EEEFF1",
		surfaceVariant: "#3A3E45",
		onSurfaceVariant: "#EEEFF1",

		outline: "#272A2F",
		outlineVariant: "#3A3E45",


	},
};

export { darkTheme, lightTheme };

