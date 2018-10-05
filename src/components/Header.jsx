import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  background: ${props => props.theme.brand.secondary};
  color: #fff;
  margin-bottom: 6rem;
  padding: 4rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const Header = ({ children }) => (
  <Wrapper>
    <h1>{children}</h1>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
