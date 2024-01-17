import Lottie from "lottie-react"
import { useRef } from "react"
import animationData from "../assets/portfolio-animation.json";


const Animation = () => {
    const animationRef = useRef(null);
  return (
    <Lottie
      style={{ width: "100%", height: "100%" }}
      animationData={animationData}
      lottieRef={animationRef}
      onComplete={() => {
        animationRef.current?.goToAndPlay(45, true);
        animationRef.current?.setSpeed(0.7);
      }}
      loop={false}
    />
  )
}

export default Animation;