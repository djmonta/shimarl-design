import React from 'react';
import styled from 'react-emotion';
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`;


const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`;

const Footer = () => (
  <Wrapper>
    <SocialMedia>
      <a href="https://www.instagram.com/shimarldesign" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </SocialMedia>
    Copyright &copy; 2018. All right reserved.{' '}
    <a href="https://www">Shimarl Design</a>.
  </Wrapper>
);

export default Footer;
