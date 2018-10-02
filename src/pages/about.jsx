import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header><img src="/logos/logo-g.png" /></Header>
    <Container type="text">
      <h2>略歴</h2>
      <p>
      2002年から十数年間、空間装飾の会社で働く傍、個人で様々な仕事を請け負い、<br/>
      2015年3月、フリーランスとして独立。
      </p>
      <h2>事業内容</h2>
      <p>
      グラフィックデザイン・ウェブデザイン・ロゴデザイン・店舗全般・展示什器制作・DTPデザイン
      </p>
    </Container>
  </Layout>
);

export default About;
