import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import config from '../../config/website';
import theme from '../../config/theme';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 2rem 0 3rem 0;
  a {
    color: ${props => props.theme.colors.body_color};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
    img {
      margin-bottom: 0;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0 3rem 0;
    flex-wrap: wrap;
  }
`;

const active = css`
  color: ${theme.brand.primary} !important;
  border-bottom: 2px solid #666;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 ${props => props.theme.spacer.horizontal};
  font-size: 1.3rem;
  a:not(:first-child) {
    margin-left: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`;

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-size: 23px;
    font-family: ${`${config.headerFontFamily}, sans-serif`};
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
    img {
      height: 45px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
        
    a {
      margin: 0 auto;
      text-align:center;
      img {
        // margin: 0 auto;
        max-width: 80%;
        height: auto;
      }
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`;

const Navigation = () => (
  <Wrapper>
    <Name>
      <Link to="/"><img src={config.siteLogo}/></Link>
    </Name>
    <Nav>
      <Link
        to="/works"
        activeClassName={css`
          ${active};
        `}
      >
        Works
      </Link>
      <Link
        to="/about"
        activeClassName={css`
          ${active};
        `}
      >
        About
      </Link>
      <Link
        to="/contact"
        activeClassName={css`
          ${active};
        `}
      >
        Contact
      </Link>
    </Nav>
  </Wrapper>
);

export default Navigation;
