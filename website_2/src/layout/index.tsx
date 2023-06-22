import React from 'react';
import { Footer, Nav, Preloader } from '../components';
import { Section } from '../shared';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <React.Fragment>
      {/* <Preloader /> */}
      <Section>
        <Nav />
        {children}
        <Footer />
      </Section>
    </React.Fragment>
  );
}
