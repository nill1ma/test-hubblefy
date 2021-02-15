import React from 'react';
import { LogoArea, LogoImg } from './styles'
import logo from '../../../assets/hubblefy_logo_h.png'
import { IDimensions } from '../../../interfaces/IDimensions';

export default function Logo(props:IDimensions) {
    return (
        <LogoArea>
            <LogoImg height={props.height} width={props.width} src={logo} />
        </LogoArea>
    );
}
