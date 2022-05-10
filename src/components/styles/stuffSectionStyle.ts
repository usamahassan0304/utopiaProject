import styled, { StyledComponent } from "styled-components";
import img1 from "../../assets/images/img3.png";
import img2 from "../../assets/images/img4.png";
import img3 from "../../assets/images/img5.png";
import img4 from "../../assets/images/i5.png";
import img5 from "../../assets/images/i6.png";
import img6 from "../../assets/images/i7.png";
import img7 from "../../assets/images/i4.png";
import img8 from "../../assets/images/i8.png";
import img9 from "../../assets/images/i9.png";
import img10 from "../../assets/images/i10.png";



export const StuffHeadingStyle = styled.div`
    .container {
            display : flex ;
            justify-content : center;
            margin-top : 30px;
        p{
            color : #fff;
            font-size : 64px;
            font-weight : 600;

            @media screen and (max-width: 767px) {
                font-size : 48px;
            }
        }
    }
`;

export const StuffContentStyle = styled.div`  
    p{
        color : #fff;
        margin-top: 30px;
        font-size : 24px;
        font-weight : 600;
        margin-bottom : 30px;
    }

    @media screen and (max-width: 767px) {
                font-size : 18px;
                text-align : center
    }
    @media screen and (max-width: 992px) {
        p{
            margin-left : 40px;
        }
    }
`;

export const StuffSideContentHeadingStyle = styled.div`
    font-size : 48px;
    font-weight : 600;
    color : white;
    text-transform : uppercase;
    @media screen and (max-width: 767px) {
                font-size : 30px;
                text-align : center
    }
    @media screen and (max-width: 992px) {
                margin-left : 40px;
    }
`;

export const StuffContentListStyle = styled.div`
    @media screen and (max-width: 767px) {
       p{
        font-size : 18px;
        text-align : start;
       } 
    }
`;

export const StuffButtonsStyle1 = styled.div`
    display:flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

export const StuffButtonsStyle2 = styled.div`
    margin-top:20px;
    margin-bottom : 20px;
`;

export const SerumButtonStyle = styled.div`
    box-sizing : border-box;
    display: inline-block;
    text-align : center;
    width:45%;
    color : green;
    text-transform: uppercase;
    background-color : #33FF80;
    border : 2px solid #ACFF33;
    border-radius : 30px;
    font-size : 18px;
    font-weight : 600;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        font-size : 14px;
    }
`;

export const VirusButtonStyle = styled.div`
    box-sizing : border-box;
    display: inline-block;
    text-align : center;
    width:45%;
    color : yellow;
    text-transform: uppercase;
    background-color : #1E1D22;
    border : 2px solid yellow;
    border-radius : 30px;
    font-size : 18px;
    font-weight : 600;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        font-size : 14px;
    }
`;

export const QueueButtonStyle = styled.div`
    box-sizing : border-box;
    display: inline-block;
    text-align : center;
    margin-top:;
    width:100%;
    color : #fff;
    text-transform: uppercase;
    background-color : #1E1D22;
    border : 2px solid #fff;
    border-radius : 30px;
    font-size : 18px;
    font-weight : 600;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        font-size : 14px;
    }
`;

export const StuffHeadingImageStyle = styled.img.attrs({
    src : `${img7}`
})`
    height : 85px;
    width : 85px;
    margin-bottom : 20px;
`;



export const StuffListImageStyle1 = styled.img.attrs({
    src : `${img9}`
})`
    height : 50px;
    width : 50px;
`;

export const StuffListImageStyle2 = styled.img.attrs({
    src : `${img8}`
})`
    height : 50px;
    width : 50px;
`;

export const StuffListImageStyle3 = styled.img.attrs({
    src : `${img10}`
})`
    height : 50px;
    width : 50px;
`;

export const SerumButtonImageStyle = styled.img.attrs({
    src: `${img4}`
})`
    background-color : #33FF80;
    height : 40px;
    width : 40px;
    margin-bottom:10px;
    @media screen and (max-width: 767px) {
        width : 30px;
        height : 30px;
    }
`;

export const VirusButtonImageStyle = styled.img.attrs({
    src: `${img5}`
})`
    background-color : #1E1D22;
    height : 40px;
    width : 40px;
    margin-bottom:10px;

    @media screen and (max-width: 767px) {
        width : 30px;
        height : 30px;
    }
`;

export const QueueButtonImageStyle = styled.img.attrs({
    src: `${img6}`
})`
    background-color : #1E1D22;
    height : 40px;
    width : 40px;
    margin-bottom:10px;

    @media screen and (max-width: 767px) {
        width : 35px;
        height : 35px;
    }
`;

export const FirstSideImageStyle = styled.img.attrs({
    src: `${img1}`
})`
    max-width : 100%;
`;

export const SecondSideImageStyle = styled.img.attrs({
    src: `${img2}`
})`
    max-width : 100%;
`;

export const ThirdSideImageStyle = styled.img.attrs({
    src: `${img3}`
})`
    max-width : 100%;
` ;

