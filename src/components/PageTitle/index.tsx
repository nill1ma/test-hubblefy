import React from 'react'
import { useSelector } from 'react-redux'
import { PageTitleContainer, PageTitleContent } from './styles'


export default function PageTitle() {
    const page = useSelector((state:any)=>state.page.data)
    
    return (
        <PageTitleContainer>
            <PageTitleContent>
                Hubblefy {page.title}
            </PageTitleContent>
        </PageTitleContainer>
    )
}