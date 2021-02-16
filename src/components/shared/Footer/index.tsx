import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IDimensions } from '../../../interfaces/IDimensions';
import { IMenu } from '../../../interfaces/IMenu';
import Logo from '../Logo';
import { FooterContainer, FooterMenu, FooterMenuItem } from './styles';

export default function Footer() {
    
    const dispatch = useDispatch()

    const dimension: IDimensions = { height: '25px', width: '100px' }

    const [menu, setMenu] = useState<IMenu[][]>([
        [{ id: 0, title: 'Como funciona', active: false },
        { id: 1, title: 'Termos de uso', active: false }],
        [{ id: 2, title: 'Nossos valores', active: false },
        { id: 3, title: 'Contatos', active: false }]
    ])

    const handlePage = (page: IMenu) => {
        dispatch({ type: 'UPDATE_PAGE', currentPage: page })
    }

    return (
        <FooterContainer>
            <Logo {...dimension} />
            {menu.map(m => {
                return (
                    <FooterMenu key={Math.random()}>
                        {m.map(item => {
                            return (
                                <FooterMenuItem key={item.id} onClick={() => handlePage(item)}>
                                    <span>{item.title}</span>
                                </FooterMenuItem>
                            )
                        })}
                    </FooterMenu>
                )
            })}
        </FooterContainer>
    );
};

function dispatch(arg0: { type: string; currentPage: IMenu; }) {
    throw new Error('Function not implemented.');
}
