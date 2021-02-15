import React, { useState } from 'react';
import { IDimensions } from '../../../interfaces/IDimensions';
import { IMenu } from '../../../interfaces/IMenu';
import Logo from '../Logo';
import { FooterContainer, FooterMenu, FooterMenuItem } from './styles';

export default function Footer() {
    const dimension: IDimensions = { height: '25px', width: '100px' }

    const [menu, setMenu] = useState<IMenu[][]>([
        [{ id: 0, title: 'Como funciona', active: false },
        { id: 1, title: 'Termos de uso', active: false }],
        [{ id: 0, title: 'Nossos valores', active: false },
        { id: 1, title: 'Contatos', active: false }]
    ])

    return (
        <FooterContainer>
            <Logo {...dimension} />
            {menu.map(m => {
                return (
                    <>
                        <FooterMenu>
                            {m.map(item => {
                                return (
                                    <>
                                        <FooterMenuItem>
                                            <span>{item.title}</span>
                                        </FooterMenuItem>
                                    </>
                                )
                            })}
                        </FooterMenu>
                    </>
                )
            })}
        </FooterContainer>
    );
};