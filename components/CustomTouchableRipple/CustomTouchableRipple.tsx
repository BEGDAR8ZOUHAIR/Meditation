import React from 'react';
import { Pressable, Animated, StyleSheet } from 'react-native';
import { MotiView } from 'moti'

const TouchableRipple = ({ children, onPress, style }) => {
	const animated = new Animated.Value(0);

	const onPressIn = () => {
		Animated.timing(animated, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const onPressOut = () => {
		Animated.timing(animated, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const rippleAnimation = {
		backgroundColor: '#000',
		opacity: animated.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 0.1],
		}),
	};

	return (
		<Pressable
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			style={[styles.button, style]}
		>
			<Animated.View style={[StyleSheet.absoluteFill, rippleAnimation]} />
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		overflow: 'hidden',
		position: 'relative',
	},
});

export default TouchableRipple;