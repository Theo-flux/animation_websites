import { useState } from 'react';
import Layout from '../layout';
import { Cta, Feature, Hero, Testimonial } from '../components';

function Home() {
  const [animate, setAnimate] = useState(true);

  console.log(animate);

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
