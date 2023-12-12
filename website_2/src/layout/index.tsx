import React from 'react';
import { Footer, Nav, Preloader } from '../components';
import { Section } from '../shared';

interface ILayoutProps {
  children: React.ReactNode;
  animate: boolean;
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Layout({
  animate,
  setAnimate,
  children,
}: ILayoutProps) {
  return (
    <React.Fragment>
      <Preloader setAnimate={setAnimate} /> 
      <Section>
        <Nav animate={animate} />
        {children}
        <Footer />
      </Section>
    </React.Fragment>
  );
}
