import React from "react";
import { Wrapper,Logo, IconsWrapper, Line, Image, Text, Icons } from "./Footer.styled";
import logo from '../../../assets/farm-barn-icon.png';
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <Image>
            <img class="Logo" src={logo} alt="Logo" />
        </Image>
        <Text>My Farm</Text>
      </Logo>
      <Line />
      <IconsWrapper>
          <Icons component={YoutubeOutlined} color='#000000'/>
          <Icons component={TwitterOutlined} color='#000000' />
          <Icons component={LinkedinOutlined} color='#000000'/>
          <Icons component={InstagramOutlined} color='#000000'/>
      </IconsWrapper>
      <Line />
      <Text>© Farm all rights reserved</Text>
    </Wrapper>
  );
};

export default Footer;