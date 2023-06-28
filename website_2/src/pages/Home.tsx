import { useState } from 'react';
import gsap, { CSSPlugin } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../layout';
import { Cta, Feature, Hero, Testimonial } from '../components';

function Home() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const [animate, setAnimate] = useState(true);

  return (
    <Layout setAnimate={setAnimate} animate={animate}>
      <Hero animate={animate} />
      <Cta />
      <Feature />
      <Testimonial />
    </Layout>
  );
}

export default Home;
