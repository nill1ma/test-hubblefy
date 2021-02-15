import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:900px;
    height: 50px;
    padding:10px;
    background:rgba(0,0,0,0.3);
`
export const HeaderMenu = styled.div`
    display:flex;
`
export const HeaderMenuItem = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    padding:10px;
    color:#2c2c2c   ;
    font-weight:700;
    cursor: pointer;
    &:hover{
        background:#FFFFFF;
    }
`