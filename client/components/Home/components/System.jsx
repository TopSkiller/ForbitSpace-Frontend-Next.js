import styled from "styled-components";
import { ContributorData, DataSocialLinkFooter } from "../constants";
const System = () => {
  const ContributorRender = ({ data, title }) => {
    console.log(data);
    return (
      <WrapperInner>
        <div className="header">{title}</div>
        <div className="img-content">
          {data.map((item) => (
            <div className="img-holder">
              <a href="/#">
                <img src={`./images/logo-contributor/${item.img}.svg`} alt="" />
              </a>
            </div>
          ))}
        </div>
      </WrapperInner>
    );
  };

  return (
    <WrapperSystem>
      <div className="container">
        <ContributorRender
          data={ContributorData}
          title={"Ecosystem partners"}
        />
        <ContributorRender data={ContributorData} title={"Contributors"} />
        <BecomeBox>
          <div className="content">
            <div className="header-content">Join the community</div>
            <div className="inner-content">
              Learn more about Maker, chat with the team, others in the
              community,
              <br />
              and have your say in shaping the future of decentralized finance.
            </div>
          </div>
        </BecomeBox>{" "}
        <SocialLink>
          {DataSocialLinkFooter.map((item, index) => {
            return (
              <Link href={item.link} target="_blank" key={index}>
                <Icon src={item.url} alt="icon social media"></Icon>
              </Link>
            );
          })}
        </SocialLink>
      </div>
    </WrapperSystem>
  );
};

const WrapperSystem = styled.section`
  @media (min-width: 1440px) {
    max-width: 1320px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    padding: 45px 0;
  }
`;
const WrapperInner = styled.div`
  .header {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    color: #fff;

    @media (max-width: 415px) {
      font-size: 30px;
    }
  }
  .img-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 45px;
    gap: 10px;

    @media (max-width: 415px) {
      padding: 30px 40px;
    }
  }
  .img-holder {
    width: 19%;
    padding: 25px 0;

    img {
      height: auto;
      width: auto;
    }

    @media (max-width: 945px) {
      width: 22.5%;
    }

    @media (max-width: 768px) {
      width: 32%;
    }

    @media (max-width: 574px) {
      width: 45%;
    }

    @media (max-width: 415px) {
      width: 70%;
    }
  }
`;

const BecomeBox = styled.div`
  .content {
    text-align: center;
  }
  .header-content {
    font-size: 50px;
    font-weight: 600;
  }
  .inner-content {
    font-size: 24px;
  }
  @media (max-width: 786px) {
    .header-content {
      font-size: 30px;
    }
    .inner-content {
      font-size: 18px;
    }
  }
`;
const SocialLink = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px 0;
`;
const Link = styled.a`
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  max-width: 40px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 576px) {
    max-width: 25px;
  }
`;

export default System;
