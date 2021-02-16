import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IDimensions } from '../../../interfaces/IDimensions'
import { IMenu } from '../../../interfaces/IMenu'
import Logo from '../Logo'
import { HeaderContainer, HeaderMenu, HeaderMenuItem } from './styles'
export default function Header() {
    const dispatch = useDispatch()

    const [menu, setMenu] = useState<IMenu[]>([
        { id: 0, title: 'Início', active: false },
        { id: 1, title: 'Contatos', active: false }
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
                        <HeaderMenuItem key={m.id} onClick={() => handlePage(m)}>
                            {m.title}
                        </HeaderMenuItem>
                    )
                })}
            </HeaderMenu>
        </HeaderContainer>
    )
}