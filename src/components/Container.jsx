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

  h2.heading {
    color: #3E3A39;
    position: relative;
    display: inline-block;
    padding: 0 32rem;
    margin-top: 1.5rem;
    text-align: center;
  }
  h2.heading:before, h2.heading:after{
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 30rem;
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
