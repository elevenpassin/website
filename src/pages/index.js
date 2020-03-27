import React from "react";
import { createGlobalStyle } from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Menu from "../components/menu";

import useSiteMetadata from "../hooks/useSiteMetadata";

import "./index.css";

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .indexHeader h1 {
    margin: 20px 0;
  }

  .menu {
    margin-bottom: 20px;
  }

  .app-container > footer {
    display: none;
  }
`;

const IndexPage = () => {
  const { title, menuItems } = useSiteMetadata();

  const filteredMenuItems = menuItems.filter(x => x.name !== "home");

  return (
    <Layout noHeader={true}>
      <SEO title="Home" />
      <div
        className="avatar"
        style={{
          height: 100,
          width: 100
        }}
      ></div>
      <Header className="indexHeader" siteTitle={title} />
      <p>
        Hey! I'm a javascript developer working on free and open source
        software. I have experience working in teams, designing and developing
        world-class projects using various modern web technologies.
      </p>
      <Menu menuItems={filteredMenuItems} />
      <GlobalStyle />
    </Layout>
  );
};

export default IndexPage;
