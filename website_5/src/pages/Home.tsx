import { useState } from 'react';
import gsap, { CSSPlugin } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../layout';
import { Advantage, Hero } from '../components';

function Home() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const [animate, setAnimate] = useState(true);

  return (
    <Layout setAnimate={setAnimate} animate={animate}>
      <Hero />
      <Advantage />
    </Layout>
  );
}

export default Home;
