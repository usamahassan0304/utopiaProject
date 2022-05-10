import styled from "styled-components";
import listImg from "../../assets/images/i14.png";

export const RoadmapStyle = styled.div`
.container{
    margin-top: 30px;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    margin-bottom : 30px;
}`;

export const RoadmapHeadingStyle = styled.div`
    p{
            color : #fff;
            font-size : 64px;
            font-weight : 600
        }
`;

export const RoadmapContentStyle = styled.div`
    width:100%;
    height : 100%;
    margin:20px;
    position: relative;
    border : 4px solid transparent;
    border-radius: 0.8rem;
    border-image : linear-gradient(45deg, #ff0, #f0f, #f00, #00f, #0f0);
    border-image-slice : 1;
    h1{
        color: #fff;
        padding:30px;
    }

    ul li{
        list-style:none;
        color : #fff;
        padding : 12px;
        margin-left : 10%;
        font-size:18px;
    }
`;

export const ListImageStyle = styled.img.attrs({
   src : `${listImg}` 
})`
    height : 40px;
    width : 40px;

`