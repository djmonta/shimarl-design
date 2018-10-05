import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container type="text">
      <h1>Contact</h1>
      <a href="mailto:shimarldesign@gmail.com">shimarldesign&#064;gmail.com</a>
    </Container>
  </Layout>
);

export default Contact;
