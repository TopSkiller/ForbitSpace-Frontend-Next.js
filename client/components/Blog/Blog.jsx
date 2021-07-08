import React from "react";
import styled from "styled-components";
import Item from "./components/Item";
import ItemFeature from "./components/ItemFeature";
import { Container, Row, Col } from "reactstrap";
import { DataBlog } from "./constants/index";

const Blog = () => {
  const renderItem = (element) => {
    return (
      <Item
        Title={element.title}
        Dreption={element.dreption}
        Dates={element.dates}
        Image={element.image}
        Pu={element.link}
        Author={element.author}
      />
    );
  };

  return (
    <BoxBlog>
      <Container>
        <Row>
          <Col>
            <TitleBlog className="text-visi">forbitswap Blog</TitleBlog>
            <DrepBlog className="drep-visi">
              News, stories, and announcements from forbitswap.{" "}
              <a href="/" className="link-visi">
                Subscribe
              </a>
            </DrepBlog>
          </Col>
          <ItemFeature />
          {DataBlog.map((item) => renderItem(item))}
        </Row>
      </Container>
    </BoxBlog>
  );
};

const BoxBlog = styled.section`
  position: relative;
  padding: 40px 0;
`;

const TitleBlog = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
  color: #000000;
  font-weight: bold;
`;

const DrepBlog = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
  color: #656363;
  font-weight: 500;

  a {
    color: #000;
    text-decoration: none !important;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 770px) {
    margin-bottom: 25px;
  }
`;

export default Blog;
