import React from "react"
import AnimatedLottieView from 'lottie-react-native'
import animation from '../../assets/index'
const withLoading =
    Component => ({ isFetching, children, ...props }) => {
        if (isFetching) {
            return (
                <AnimatedLottieView source={animation} autoPlay loop />
            )
        }
        return <Component {...props}>{children}</Component>


    }
export default withLoading;