import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import sample from 'lodash/sample';
import { overlay } from '../../config/theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 0 auto;
  max-width: 72rem;
  width: 87%;
  text-align: left;
`;

const Item = styled.div`
  // padding: 0 5%;
  position: relative;
  margin: 2.5%;
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
  // margin: 0 2.5%;
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
    z-index: 1;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    h2 {
      font-size: inherit;
    }
    div {
      font-size: 0.9rem;
    }
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
  // height: 100%;
  left: 0;
  opacity: .85;
  padding: 2.5%;
  position: absolute;
  bottom: 0;
  max-height: 20%;
  width: 100%;
  z-index: 1;

  div {
    font-size: 0.7rem;
    letter-spacing: -0.02rem;
    margin-bottom: 0.2rem;
  }

  h2 {
    opacity: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    font-weight: normal;
    margin-bottom: 0;
  }
`;

const ProjectPickup = () => (
  <StaticQuery
    query={graphql`
      query ProjectPickup {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: {tag: { in: ["pickup"] } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tag
                service
                client
                cover {
                  childImageSharp {
                    fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
    <Wrapper>
      {data.allMarkdownRemark.edges.map(project => {
        const overlayColor = sample(overlay);
        return (
          <Item key={project.node.fields.slug}>
            <Content>
              <ImageWrapper>
                <Img fluid={project.node.frontmatter.cover.childImageSharp.fluid} />
              </ImageWrapper>
              <Link to={project.node.fields.slug}>
                <Overlay style={{ backgroundColor: overlayColor }}>
                  <div>{project.node.frontmatter.service.join(', ')}</div>
                  <h2>Client: {project.node.frontmatter.client}</h2>
                </Overlay>
              </Link>
            </Content>
          </Item>
        );
      })}
    </Wrapper>
    )}
  />
);

export default ProjectPickup;

// ProjectPickup.propTypes = {
//   projectEdges: PropTypes.array.isRequired,
// };
