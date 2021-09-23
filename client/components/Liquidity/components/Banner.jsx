import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import LiquidityAnimation from "./LiquidityAnimation";

const Banner = () => {
  return (
    <BoxSection>
      <WrapContainer>
        <WrapImg>
          <ImgHalf>
            {/* <img src="../images/home-page/liquidity.png" alt="" /> */}
            <LiquidityAnimation />
          </ImgHalf>
        </WrapImg>
        <Content className="title-banner text-dark text-visi">
          <Title>Liquidity Pool</Title>
          <SubText>
            With <span>forbitspace</span>, the decentralized protocol that
            empowering traders to provide liquidity to pools and collect extra
            rewards in FBS tokens for participating in liquidity mining
            programs.
            <br />A next-generation automated market maker that protects users
            from front-running attacks and offers capital efficiency to
            liquidity providers. Enables you to deposit digital assets into
            liquidity pools while earning interest in real-time in the form of
            FBS Tokens. Liquidity providers collect rewards on assets locked in
            pools and extra yield farming rewards in FBS tokens.
          </SubText>
          {/* <WrapperButtonApp>
            <ButtonBanner href="/">Google Play</ButtonBanner>
            <ButtonBanner href="/">App Store</ButtonBanner>
          </WrapperButtonApp> */}
        </Content>
      </WrapContainer>
    </BoxSection>
  );
};

const BoxSection = styled.section`
  position: relative;
  /* min-height: 88vh; */
  padding: 10vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const WrapImg = styled.div`
  width: 50%;
  transform: scale(0.9);
  transform-origin: right;
  @media (max-width: 768px) {
    width: 100%;
    transform: scale(0.8);
    transform-origin: center;
  }
`;
const ImgHalf = styled.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled.div`
  margin-left: 40px;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  @media (max-width: 576px) {
    font-size: 45px;
    letter-spacing: 2px;
  }
`;
const SubText = styled.div`
  font-size: 26px;
  font-weight: 200;
  font-family: sans-serif;
  span {
    font-style: italic;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default Banner;
