import React from 'react';
import { Cores } from '../../interfaces/IForm';
import { RequestFormGroup, RequestFormLabel, RequestFormSelectBox, RequestFormSelectOption } from './styles';

export default function Select(props: any) {

    return (
        <RequestFormGroup>
            <RequestFormLabel>{props.label}</RequestFormLabel>
            <RequestFormSelectBox data-testid='cores' onChange={(e: any) => props.handleForm('cores', e.target.value)}>
                {Object.keys(Cores).map(cor => {
                    return (
                        isNaN(Number(cor)) ?
                            <RequestFormSelectOption key={cor} value={cor}>{cor}</RequestFormSelectOption>
                            : <></> 
                    )
                })}
            </RequestFormSelectBox>
        </RequestFormGroup>
    )
}