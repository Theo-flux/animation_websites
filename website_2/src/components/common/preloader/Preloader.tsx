import React, { useState, useEffect, useRef } from 'react';
import {
  PreloaderContainer,
  Logo,
  Counter,
  Progress,
  Follow,
} from './preloader.css';
import gsap, { CSSPlugin, Power4 } from 'gsap';
gsap.registerPlugin(CSSPlugin);

interface ILoaderProps {
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Loader({ setAnimate }: ILoaderProps) {
  const followRef = useRef(null);
  const parentRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const [counter, setCounter] = useState<number>(0);

  const reveal = () => {
    const tl = gsap.timeline();

    tl.to(
      followRef.current,
      {
        width: '100%',
        duration: 1.2,
        delay: 0.7,
        ease: Power4.easeInOut,
      },
      1
    )
      .to(
        counterRef.current,
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
          ease: Power4.easeInOut,
        },
        2
      )
      .to(
        logoRef.current,
        {
          y: -10,
          opacity: 0,
          duration: 0.5,
          ease: Power4.easeInOut,
        },
        2
      )
      .to(followRef.current, {
        height: '100%',
        duration: 0.8,
        ease: Power4.easeInOut,
      })
      .to(followRef.current, {
        top: '0px',
        height: '0%',
        duration: 1.5,
        ease: Power4.easeInOut,
      })
      .to(parentRef.current, {
        height: '0%',
        duration: 1.5,
        delay: -1.6,
        ease: Power4.easeInOut,
        onComplete: () => {
          console.log('animation completed!');
          setAnimate(true);
        },
      });
  };

  useEffect(() => {
    const count = setInterval(() => {
      counter < 100 ? setCounter(counter + 1) : setCounter(100);
    }, 5);

    return () => clearInterval(count);
  });

  useEffect(() => {
    counter === 100 && reveal();
  }, [counter]);

  return (
    <PreloaderContainer ref={parentRef}>
      <Counter ref={counterRef}>{counter}%</Counter>
      <Follow ref={followRef}></Follow>
      <Progress width={counter} ref={progressRef}></Progress>
      <Logo ref={logoRef}>iRecplus</Logo>
    </PreloaderContainer>
  );
}
