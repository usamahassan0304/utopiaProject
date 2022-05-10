import styled from "styled-components";
import discordIcon from '../../assets/images/i15.png'

export const CommonButtonStyle = styled.div`
    box-sizing : border-box;
    display: inline-block;
    text-align : center;
    padding : 8px 32px;
    color : white;
    cursor : pointer;
    background-color : #5562EA;
    border : 1px solid #5562EA;
    border-radius : 20px;
    font-size : 18px;
    font-weight : 600;
    margin-top: 20px;
`;

export const DiscordIcon = styled.img.attrs({
    src : `${discordIcon}`
})`
    height : 30px;
    width : 30px;
    background-color : #5562EA;
`;