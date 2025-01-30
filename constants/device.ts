/**
 * Device constants
 * @author ayaStar
 * @description This file contains the constants related to the device
 */

import { Dimensions } from "react-native";
import { mvs } from "react-native-size-matters";


export const SCREEN_WIDTH: number = Dimensions.get("window").width;
export const SCREEN_HEIGHT: number = Dimensions.get("window").height;

export const GLOBAL_SCALE: number = 1;


/**
 * Tab bar height
 */
export const TAB_BAR_HEIGHT: number = mvs(65, GLOBAL_SCALE);