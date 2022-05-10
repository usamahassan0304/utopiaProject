import styled from "styled-components";
import img1 from "../../assets/images/i11.png";
import img2 from "../../assets/images/i12.png";
import img3 from "../../assets/images/i13.png";

export const FeatureHeadingStyle = styled.div`
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

export const FeatureContentStyle = styled.div`
    .container{
        color : #fff;
        text-align: center;
        p{
            font-size : 28px;
            font-weight : 300;
            text-align:center;
        }
    }
`

export const FeatureTopImage1 = styled.img.attrs({
    src : `${img1}`
})`
    width: 130px;
    height : 120px;
`
export const FeatureTopImage2 = styled.img.attrs({
    src : `${img2}`
})`
    width: 130px;
    height : 120px;
`
export const FeatureTopImage3 = styled.img.attrs({
    src : `${img3}`
})`
    width: 130px;
    height : 120px;
`
