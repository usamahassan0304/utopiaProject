import styled from "styled-components";
import logo from "../../assets/images/logo-01.png";
import discordIcon from "../../assets/images/i1.png";
import twitterIcon from "../../assets/images/i3.png";
import openseaIcon from "../../assets/images/i2.png";

export const StyledTopbar = styled.div``
export const LogoStyle = styled.img.attrs({
    src : `${logo}`
})`
    height:100%;
    width: 50%;
`;

export const DashboardButton = styled.div`
    text-align : center;
    padding : 8px 32px;
    color : white;
    background-image : linear-gradient(60deg, #ff0, #f0f, #00f );
    transition: transform .3s;
    border-radius : 20px;
    font-size : 15px;
    font-weight : 600;

    &:hover {
        transform: scale(1.2)
    }
`;

export const DiscordIconStyle = styled.img.attrs({
    src : `${discordIcon}`
})`
    height : 45px;
    width : 45px;
`;

export const TwitterIconStyle = styled.img.attrs({
    src : `${twitterIcon}`
})`
    height : 45px;
    width : 45px;
`;

export const OpenseaIconStyle = styled.img.attrs({
    src : `${openseaIcon}`
})`
    height : 45px;
    width : 45px;
`;