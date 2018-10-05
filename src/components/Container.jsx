import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacer.horizontal};
  max-width: ${props => props.theme.container[props.type]};
  text-align: center;
  ${props =>
    props.type === 'text' &&
    css`
      > img {
        height: 100px;
        margin-bottom: 2.5rem;
      }
      h2 {
        font-size: 1.25rem;
        text-align: center;
      }
      p {
        // font-size: 1.25rem;
        letter-spacing: -0.003em;
        line-height: 1.58;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        text-align: center;
      }
    `};

  > a {
    color: #333333;
    font-size: 1.25rem;
    display: block;
    margin-top: 2rem;
    text-decoration: none;
  }
  
  h2.heading {
    color: #3E3A39;
    position: relative;
    display: inline-block;
    padding: 0 34%;
    margin-top: 2.5rem;
    text-align: center;
  }
  h2.heading:before, h2.heading:after{
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 43%;
    height: 2px;
    background-color: #3E3A39;
  }
    
  h2.heading:before {left:0;}
  h2.heading:after {right: 0;}
`;

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['base', 'text']),
  className: PropTypes.string,
};

Container.defaultProps = {
  type: 'base',
  className: null,
};
