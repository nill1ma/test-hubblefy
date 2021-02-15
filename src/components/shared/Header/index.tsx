import React, { useState } from 'react'
import { IDimensions } from '../../../interfaces/IDimensions'
import { IMenu } from '../../../interfaces/IMenu'
import Logo from '../Logo'
import { HeaderContainer, HeaderMenu, HeaderMenuItem } from './styles'
export default function Header() {

    const [menu, setMenu] = useState<IMenu[]>([
        { id: 0, title: 'Home', active: false },
        { id: 1, title: 'Contacts', active: false }
    ])
    const dimension:IDimensions = {height:'40px', width:'150px'}

    return (
        <HeaderContainer>
            <Logo {...dimension} />
            <HeaderMenu>
                {menu.map(m => {
                    return (
                        <HeaderMenuItem>
                            {m.title}
                        </HeaderMenuItem>
                    )
                })}
            </HeaderMenu>
        </HeaderContainer>
    )
}