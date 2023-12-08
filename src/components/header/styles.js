 import styled from 'styled-components'


export const HeaderContainer = styled.header`
.HeaderContainer{
    margin-left: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 230px;
    padding-right: 280px;
    gap: 189px;
}
.ContainerCenter{
    display: flex;
    flex-direction: row;
    gap: 320px;
    width: 80vw;
    height: 680px;
    justify-content: center;
    align-items: center;
}
.logo{
    margin-top: 250px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}
.textLogo{
    display: flex;
    align-items: center;
    border-radius: 0px 12px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(162deg, rgba(241, 220, 30, 0.99) 12.45%, rgba(254, 254, 244, 0.87) 76.34%);
    display: flex;
    width: 92px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Sansita';
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

.textLogoName{

    text-align: center;
    font-family: 'Sansita';
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    background: linear-gradient(180deg, rgba(241, 220, 30, 0.99) 0%, rgba(254, 254, 244, 0.87) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.apoio{
    
    margin-top: 250px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    
}
.textApoio{
    color: #FFF;
    text-align: center;
    font-family: 'Puritan';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.apoioButton{
    width: 122px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #F8FEF4;
    cursor: pointer;
}

`
