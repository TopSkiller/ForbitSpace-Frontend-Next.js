exports.ids = [47];
exports.modules = {

/***/ "JoM1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Token/components/Banner.jsx
var __jsx = external_react_default.a.createElement;




const Banner = () => {
  return __jsx(BoxSection, null, __jsx(WrapContainer, null, __jsx(Content, {
    className: "title-banner text-dark text-visi"
  }, __jsx(Text, null, "FBS Token"), __jsx(SubText, null)), __jsx(WrapImg, null, __jsx(ImgHalf, null, __jsx("img", {
    src: "../images/home-page/liquidity.png",
    alt: ""
  })))));
};

const BoxSection = external_styled_components_default.a.section`
  position: relative;
  font-family: sans-serif;
  /* min-height: 88vh; */
  padding: 4vh 0 0;
  @media (max-width: 770px) {
    padding-top: 60px;
    /* min-height: 80vh; */
  }
`;
const WrapContainer = external_styled_components_default()(external_reactstrap_["Container"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 1650px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapImg = external_styled_components_default.a.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImgHalf = external_styled_components_default.a.div`
  width: 100%;
  text-align: left;
  img {
    width: 100%;
    height: auto;
  }
`;
const Content = external_styled_components_default.a.div`
  margin-left: 80px;
  width: 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;
const Text = external_styled_components_default.a.p`
  font-size: 4rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 25px;
  }
`;
const SubText = external_styled_components_default.a.p`
  font-size: 22px;
  font-weight: 300;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./client/components/Footer/index.jsx + 1 modules
var Footer = __webpack_require__("yZXQ");

// CONCATENATED MODULE: ./client/components/Token/index.jsx
var Token_jsx = external_react_default.a.createElement;





const Index = () => {
  return Token_jsx(WrapperBackground, null, Token_jsx(WrapContent, null, Token_jsx(components_Banner, null), Token_jsx(BackgroundImg, {
    src: "./images/background-line-min.png"
  })), Token_jsx(Footer["a" /* default */], null));
};

const WrapperBackground = external_styled_components_default.a.div`
  position: relative;
  font-family: helvetica neue;
  position: relative;
  overflow-x: hidden;
  background-size: auto;
  @media (max-width: 576px) {
    overflow-x: hidden;
  }
`;
const WrapContent = external_styled_components_default.a.div`
  min-height: calc(100vh - 330px);
`;
const BackgroundImg = external_styled_components_default.a.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* height: calc(100% + 100vh); */
  min-height: 100vh;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: 576px) {
    position: fixed;
  }
`;
/* harmony default export */ var Token = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "yZXQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./client/components/Footer/constants.js
const DataSocialLinkFooter = [{
  link: "https://medium.com/@forbitspace",
  url: "./images/icon-social-footer/1.svg"
}, {
  link: "https://www.reddit.com/r/forbitspace/",
  url: "./images/icon-social-footer/2.svg"
}, {
  link: "https://discord.gg/8tBuBPeZ",
  url: "./images/icon-social-footer/3.svg"
}, {
  link: "https://github.com/forbitspace",
  url: "./images/icon-social-footer/4.svg"
}, {
  link: "https://t.me/forbitspace",
  url: "./images/icon-social-footer/5.svg"
}, {
  link: "https://twitter.com/forbitspace",
  url: "./images/icon-social-footer/6.svg"
}];
const navContent = [{
  link: "",
  nav: "Space Trade",
  contents: [{
    link: "/aggregation",
    content: "Aggregation Protocol"
  }, {
    link: "/liquidity",
    content: "Liquidity Protocol"
  }, {
    link: "/limit",
    content: "Limit Order Protocol"
  }, {
    link: "/derivative",
    content: "Derivative Protocol"
  }]
}, {
  link: "",
  nav: "Governance",
  contents: [{
    link: "/token",
    //../images/pdf/fbs-token-1.pdf
    content: "FBS Token",
    outLink: true,
    disable: true
  }, {
    link: "/dao",
    content: "Space Dao"
  }, {
    link: "",
    content: "Pools",
    disable: true
  }, {
    link: "",
    content: "Farming",
    disable: true
  }, {
    link: "",
    content: "Stacking",
    disable: true
  }]
}, {
  link: "",
  nav: "Developers",
  contents: [{
    link: "",
    content: "Documentation"
  }, {
    link: "../images/pdf/white-paper.pdf",
    content: "Whitepaper",
    outLink: true
  }, {
    link: "",
    content: "Github"
  }, {
    link: "",
    content: "Audits",
    disable: true
  }, {
    link: "",
    content: "Bug bounty",
    disable: true
  }]
}, {
  nav: "Self-custody",
  link: "/selfcustody",
  contents: [{
    link: "/bridge",
    content: "Bridge Space"
  }, {
    link: "/mobile-wallet",
    content: "Mobile wallet"
  }, {
    link: "/smart-contract",
    content: "Smart contract wallet"
  }, {
    link: "/assets",
    content: "Asset management"
  }]
}, {
  nav: "Support",
  // disable: true,
  link: "",
  contents: [{
    link: "https://help.forbitspace.com/",
    content: "Help Center",
    outLink: true
  }, {
    link: "../images/pdf/terms-of-service.pdf",
    content: "Term of Service",
    outLink: true
  }, {
    link: "../images/pdf/privacy-policy.pdf",
    content: "Privacy Policy",
    outLink: true
  }]
}];
// CONCATENATED MODULE: ./client/components/Footer/index.jsx
var __jsx = external_react_default.a.createElement;





const Index = () => {
  return __jsx("footer", {
    className: "footer"
  }, __jsx(FooterMenu, null, __jsx(external_reactstrap_["Container"], null, __jsx(ListMenu, null, navContent.map((item, index) => __jsx("ul", {
    className: "text-visi"
  }, __jsx(TitleFooter, null, " ", item.link ? __jsx(Link, {
    href: item.link
  }, item.nav) : item.nav, " "), item.contents.map((item, index) => __jsx("li", null, !item.disable ? item.outLink ? __jsx("a", {
    href: item.link,
    target: "_blank"
  }, item.content) : __jsx(Link, {
    href: item.link
  }, item.content) : __jsx(Blank, {
    href: "/"
  }, item.content))))), __jsx("ul", {
    className: "text-visi"
  }, __jsx(SubTitleFooter, null, "Subscribe to our newsletter for updates"), __jsx("form", {
    action: ""
  }, __jsx(WrapperInput, null, __jsx(Input, {
    type: "text",
    className: "text bg-input-dark",
    placeholder: "your@email.com",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    required: true
  })), __jsx("button", {
    type: "submit"
  }, __jsx("i", {
    className: "fa fa-arrow-right"
  }))), __jsx(Copyright, {
    className: "text-dark"
  }, "\xA9 2021 forbitspace"), __jsx(SocialLink, null, DataSocialLinkFooter.map((item, index) => {
    return __jsx(Link, {
      href: item.link,
      target: "_blank",
      key: index
    }, __jsx(Icon, {
      src: item.url,
      alt: "icon social media"
    }));
  })))))), __jsx(BackgroundFooter, null));
};

const BackgroundFooter = external_styled_components_default.a.div`
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
`;
const Link = external_styled_components_default.a.a`
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;
const Icon = external_styled_components_default.a.img`
  max-width: 20px;
  width: 100%;
  transition: all ease-in-out 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const SocialLink = external_styled_components_default.a.div``;
const FooterMenu = external_styled_components_default.a.section`
  position: relative;
  padding: 30px 0 0;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 40px 0;

    &:after {
      content: none;
    }
  }
`;
const ListMenu = external_styled_components_default.a.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 25px;

  ul {
    padding-left: 0;
    width: calc(100% / 6);
    // text-align:right;

    form {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      input {
      }

      button {
        width: 60px;
        height: 30px;
        border: none;
        outline: none;
        background-image: linear-gradient(
          17deg,
          #00ff36 -68%,
          #00ee57 -43%,
          #00c5ad 14%,
          #00a4f1 57%,
          #0b18fc 154%,
          #0d00ff 171%
        );
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
        background-size: 200%;
        background-position: 99%;

        i {
          color: #fff;
          font-size: 12px;
        }

        &:hover {
          background-size: 200%;
          background-position: right;
        }
      }
    }

    li {
      font-size: 12px;
      font-weight: 300;
      font-family: sans-serif;
      margin-bottom: 4px;
      a {
        text-decoration: none;
        color: #4e4f50;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 1024px) {
      width: calc(100% / 5);
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      /* width: calc(100% / 6); */
      margin-right: 0;
      text-align: left;
      form {
        justify-content: center;
      }
      :last-child {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 576px) {
      width: 50%;
    }
  }
`;
const Blank = external_styled_components_default.a.div`
  font-size: 12px;
`;
const TitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  a {
    text-decoration: none;
  }
`;
const SubTitleFooter = external_styled_components_default.a.div`
  margin-bottom: 10px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 100;
`;
const Copyright = external_styled_components_default.a.p`
  font-size: 14px;
  font-weight: 300;
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  height: 30px;
  margin-right: 5px;
  font-family: "Averta";
  font-size: 14px;
  padding: 10px 15px;
  line-height: 20px;
  outline: 0;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border-radius: 10px;
  position: relative;
  border: none;
  background: #cff3f4;
  border: 1px solid #0047b2;
`;
const WrapperInput = external_styled_components_default.a.div`
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
`;
/* harmony default export */ var Footer = __webpack_exports__["a"] = (Index);

/***/ })

};;