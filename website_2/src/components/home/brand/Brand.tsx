import { useEffect, useRef } from 'react';
import gsap, { CSSPlugin, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrandContainer, BrandGrid, BrandFigure, BrandImg } from './brand.css';
import { Div } from '../../../shared';
import Airbnb from '../../../assets/images/brands/airbnb.svg';
import Google from '../../../assets/images/brands/google.svg';
import Netflix from '../../../assets/images/brands/netflix.svg';
import Slack from '../../../assets/images/brands/slack.svg';
import Uber from '../../../assets/images/brands/uber.svg';

const brands = [
  {
    id: 'brand',
    name: 'slack',
    image: Slack,
  },

  {
    id: 'brand',
    name: 'airbnb',
    image: Airbnb,
  },

  {
    id: 'brand',
    name: 'uber',
    image: Uber,
  },

  {
    id: 'brand',
    name: 'netflix',
    image: Netflix,
  },

  {
    id: 'brand',
    name: 'google',
    image: Google,
  },
];

export default function Brand() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const brandContRef = useRef(null);

  const brandAnimation = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      document.querySelectorAll('.brand'),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: Power4.easeInOut,
        stagger: 0.1,
        scrollTrigger: {
          trigger: brandContRef.current,
          start: 'top 80%',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    brandAnimation();
  });

  return (
    <BrandContainer ref={brandContRef}>
      <Div>
        <BrandGrid>
          {brands.map((brand, index) => {
            const { id, name, image } = brand;
            return (
              <BrandFigure className={id} key={index}>
                <BrandImg src={image} alt={name} />
              </BrandFigure>
            );
          })}
        </BrandGrid>
      </Div>
    </BrandContainer>
  );
}
