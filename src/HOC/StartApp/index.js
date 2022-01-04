import React from "react"
import AnimatedLottieView from 'lottie-react-native'
import animation from '../../assets/index'
import { View } from "react-native"
import BackgroundView from "../../components/BackgroundView"
const StartApp =
    Component => ({ isFetching, children, ...props }) => {
        if (isFetching) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <AnimatedLottieView source={animation} autoPlay loop />
                </View>
            )
        }
        return <Component {...props}>{children}</Component>


    }
export default StartApp;