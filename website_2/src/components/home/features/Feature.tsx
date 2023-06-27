import { useEffect, useRef } from 'react';
import gsap, { CSSPlugin, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Div } from '../../../shared';
import {
  FeatureContainer,
  Top,
  Bottom,
  Title,
  SubTitle,
  CardContainer,
  IconCase,
  StyledCommandIcon,
  CardTitle,
  CardText,
} from './feature.css';

const features = [
  {
    id: 'card',
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    id: 'card',
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    id: 'card',
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
  {
    id: 'card',
    title: 'This is the first feature',
    text: 'Identify the most influential using posting with your template.',
  },
];

interface ICardProps {
  feat: {
    id: string;
    title: string;
    text: string;
  };
}

const Card = ({ feat }: ICardProps) => {
  const { id, title, text } = feat;
  return (
    <CardContainer className={id}>
      <IconCase>
        <StyledCommandIcon />
      </IconCase>

      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default function Feature() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const divRef = useRef(null);

  const topAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      [
        divRef.current,
        titleRef.current,
        subTitleRef.current,
        document.querySelectorAll('.card'),
      ],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: Power4.easeInOut,
        scrollTrigger: {
          trigger: divRef.current,
          // markers: true,
          start: 'top 90%',
          end: 'top top',
          scrub: true,
        },
      }
    );
  };

  useEffect(() => {
    topAnimation();
  });

  return (
    <FeatureContainer>
      <Div ref={divRef}>
        <Top>
          <Title ref={titleRef}>Track any hashtag(s) Performance</Title>
          <SubTitle ref={subTitleRef}>
            Don’t waste time on search manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time.
          </SubTitle>
        </Top>
        <Bottom>
          {features.map((feat, index) => {
            return <Card key={index} feat={feat} />;
          })}
        </Bottom>
      </Div>
    </FeatureContainer>
  );
}
