import { useState } from 'react';
import gsap, { CSSPlugin } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../layout';
import { Advantage, Discount, Hero, Product } from '../components';

function Home() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const [animate, setAnimate] = useState(true);

  return (
    <Layout setAnimate={setAnimate} animate={animate}>
      <Hero />
      <Product />
      <Advantage />
      <Discount />
    </Layout>
  );
}

export default Home;
