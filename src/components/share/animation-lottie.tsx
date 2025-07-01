import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useMemo, useRef } from "react";

type TAnimationPath = {
  animationPath: any;
  width?: string;
};

const AnimationLottie = ({ animationPath, width = "95%" }: TAnimationPath) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    };
  }, [animationPath, width]);

  useEffect(() => {
    return () => {
      lottieRef.current?.destroy();
    };
  }, []);

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
