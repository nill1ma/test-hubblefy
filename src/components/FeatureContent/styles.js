import styled from 'styled-components'

export const FeatureContentContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:10px;
    width:800px;
    height:200px;
    background:rgba(0,0,0, 0.2);
    `
export const FeatureContentItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:380px;
    height:180px;
    border:1px solid red;
`
export const FeatureContentImg = styled.img`
    width:380px;
    height:180px;
`

export const FeatureContentText = styled.span`
    font-weight:${props=>props.weight};
    margin:10px;
    text-align:justify;
`