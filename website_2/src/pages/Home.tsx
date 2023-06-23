import Layout from '../layout';
import { Cta, Feature, Hero, Testimonial } from '../components';

function Home() {
  return (
    <Layout>
      <Hero />
      <Cta />
      <Feature />
      <Testimonial />
    </Layout>
  );
}

export default Home;
