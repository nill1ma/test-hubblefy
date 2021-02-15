import React from 'react'
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem } from './styles'

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo></HeaderLogo>
            <HeaderMenu>
                <HeaderMenuItem></HeaderMenuItem>
            </HeaderMenu>
        </HeaderContainer>
    )
}