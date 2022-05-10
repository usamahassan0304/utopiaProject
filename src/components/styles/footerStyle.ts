import styled from "styled-components";
import footerImg from "../../assets/images/img2.png";
import footerImg2 from "../../assets/images/i16.png";
import openseaImg from "../../assets/images/i2.png";
 

export const FooterStyle = styled.div``;

export const FooterImageStyle = styled.img.attrs({
    src : `${footerImg}`
})`
    width : 100%;
`;

export const LowerFooter = styled.div`
    margin-bottom : 50px;
`;

export const FooterLogo = styled.img.attrs({
    src : `${footerImg2}`
})`
    width : 50%;
`;

export const FooterText = styled.div`
    h4{
        color : #fff;
        font-size : 48px;
        font-weight : 600;
        letter-spacing : 5px;
    }

    h6{
        color : red;
        font-size : 18px;
    }
`;


export const FooterButton = styled.div`
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

export const OpenseaIcon = styled.img.attrs({
    src : `${openseaImg}`
}) `
    height : 30px;
    width : 30px;
    background-color : #5562EA;
`;