import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IDimensions } from '../../../interfaces/IDimensions'
import { IMenu } from '../../../interfaces/IMenu'
import Logo from '../Logo'
import { HeaderContainer, HeaderMenu, HeaderMenuItem } from './styles'

export default function Header() {
    const dispatch = useDispatch()

    const [menu] = useState<IMenu[]>([
        { id: 0, testId:'inicio',title: 'Início', active: false },
        { id: 1, testId:'contatos',title: 'Contatos', active: false }
    ])

    const dimension: IDimensions = { height: '40px', width: '150px' }

    const handlePage = (page: IMenu) => {
        dispatch({ type: 'UPDATE_PAGE', currentPage: page })
    }

    return (
        <HeaderContainer>
            <Logo {...dimension} />
            <HeaderMenu>
                {menu.map(m => {
                    return (
                        <HeaderMenuItem data-testid={`menu-${m.testId}`} key={m.id} onClick={() => handlePage(m)}>
                            {m.title}
                        </HeaderMenuItem>
                    )
                })}
            </HeaderMenu>
        </HeaderContainer>
    )
}