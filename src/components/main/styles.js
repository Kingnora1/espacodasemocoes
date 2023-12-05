import styled from "styled-components";

export const MainContainer = styled.main`

.MainContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 48px;
    margin-top: 98px;
}

.textLogoConteiner{
    display: flex;
    align-items: center;
    border-radius: 0px 12px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(162deg, rgba(241, 220, 30, 0.99) 12.45%, rgba(254, 254, 244, 0.87) 76.34%);
    display: flex;
    width: 207px;
    height: 169.756px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    font-family: 'Scheherazade New';
    font-size: 120px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #000;
}

    .textAbout{
        text-align: center;
        display: flex;
        width: 800px;
        /* height: 200px; */
        flex-shrink: 0;
        color: white;
        font-size: 32px;
}
`
