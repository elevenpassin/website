import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Menu from "../components/menu";

import useSiteMetadata from "../hooks/useSiteMetadata";

const IndexPage = () => {
  const { title, menuItems } = useSiteMetadata();

  return (
    <Layout noHeader={true}>
      <SEO title="Home" />
      <Header siteTitle={title} />
      <p>
        Hey! I'm a javascript developer working on free and open source
        software. I have experience working in teams, designing and developing
        world-class projects using various modern web technologies.
      </p>
      <Menu menuItems={menuItems} />
    </Layout>
  );
};

export default IndexPage;
