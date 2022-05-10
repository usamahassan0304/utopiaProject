import styled from "styled-components";
import header from "../../assets/images/mainImg2.png"

export const StyledHome = styled.div``;

// Header

export const Header = styled.img.attrs({
    src : `${header}`
})`
    width : 100%;
`;

export const HeaderText = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color : #fff;
        margin-top : 50px;
        margin-bottom : 50px;

        h3{
            padding : 5px;
        }
    }
`;

