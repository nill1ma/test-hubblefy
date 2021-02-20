import styled from 'styled-components'

export const RequestFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:10px;
    width:780px;
    min-height:250px;
    padding:10px;
    /* height:250px;
    min-height:350px; */
    background:rgba(0,0,0, 0.2);
    `
export const RequestFormGroup = styled.div`
    display:flex;
    justify-content:${props=>props.isButton? 'flex-end' : 'space-between'};
    width:400px;
    margin:1px;
`
export const RequestFormLabel = styled.label`
`
export const RequestFormInput = styled.input`
    padding-left:2px;
    width:300px;
    border-radius:2px;
`
export const RequestFormSelectBox = styled.select`
    padding:10px 0;
    width:303px;
    background:#FFFFFF;
    border-radius:2px;
`
export const RequestFormSelectOption = styled.option`
`
export const RequestFormTextArea = styled.textarea`
    padding-left:2px;
    min-width:300px;
    max-width:300px;
    min-height:60px;
    max-height:60px;
    border-radius:2px;
`

export const RequestFormButton = styled.button`
    width:100px;
    align-self:flex-start;
    margin-top:10px;
    padding:15px;
    border:none;
    outline:none;
    border-radius:5px;
    font-weight:bold;
    color:#FFFFFF;
    background:rgba(0,0,255, 0.6);
    cursor: pointer;
`

export const RequestFormSuccessful = styled.div`
    width:100%;
    height:20px;
    padding:10px;
    margin:10px 0;
    border-radius:5px;
    background:rgba(100,255,1,0.8);
    color:rgba(0,0,0,0.7);
    font-weight:bold;
`