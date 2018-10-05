import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import sample from 'lodash/sample';
import { overlay } from '../../config/theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin: 0 auto;
  max-width: 87rem;
  width: 87%;
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;

const Item = styled.div`
  // padding: 0 5%;
  margin: 2.5%;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  // padding: 0 5%;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    opacity: 1;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  opacity: 0.85;
  padding: 3%;
  position: absolute;
  bottom: 0;
  max-height: 20%;
  width: 100%;
  z-index: 10;

  div {
    font-size: 0.8rem;
    letter-spacing: -0.02rem;
    margin-bottom: 0.2rem;
  }

  h2 {
    opacity: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    font-weight: normal;
    margin-bottom: 0;
  }
`;

const ProjectListing = ({ projectEdges }) => (
  <Wrapper>
    {projectEdges.map(project => {
      const overlayColor = sample(overlay);
      return (
        <Item key={project.node.fields.slug}>
          <Content>
            <ImageWrapper>
              <Img fluid={project.node.frontmatter.cover.childImageSharp.fluid} />
            </ImageWrapper>
            <Link to={project.node.fields.slug}>
              <Overlay style={{ backgroundColor: overlayColor }}>
              <div>
                {project.node.frontmatter.service.join(', ')}
              </div>
              <h2>Client: {project.node.frontmatter.client}</h2>
              </Overlay>
            </Link>
          </Content>
        </Item>
      );
    })}
  </Wrapper>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired,
};
