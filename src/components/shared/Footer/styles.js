import styled from 'styled-components'

export const FooterContainer = styled.div`
    display:flex;
    align-items:center;
    width:900px;
    height: 80px;
    padding:10px;
    background:rgba(0,0,0,0.3);
    position:absolute;
    bottom:0;
`
export const FooterMenu = styled.ul`
    display:flex;
    flex-direction:column;
`
export const FooterMenuItem = styled.li`
    display:flex;
    font-size:10px;
    padding:5px 0;
    color:#2c2c2c;
    font-weight:700;
    list-style:none;
    cursor: pointer;
    &:hover{
        font-weight:bold;
        color:#000000;
        font-weight:bold;
        padding:4px 0;
        border-bottom:1px solid rgba(255,255,255,0.5);
    }
`