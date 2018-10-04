import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ProjectListing, ProjectPickup, Layout, Container } from 'components';

const Index = ({
  data: {
    allMarkdownRemark: { edges: projectEdges },
  },
}) => (
  <Layout>
    <Container>
      <h2 className="heading">Pick Up</h2>
      <ProjectPickup />
      <h2 className="heading">Works</h2>
      <ProjectListing projectEdges={projectEdges} />
    </Container>
  </Layout>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
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
`;
