import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import RequestForm from '.'
import { Cores } from '../../interfaces/IForm'

describe('Should form exists', () => {
    it('Should register and show the successful message', async () => {
        const { getByTestId, findByText, getByRole } = render(<RequestForm />)
        const nome = getByTestId('nome')
        const email = getByTestId('email')
        const quantidade = getByTestId('quantidade')
        const cores = getByTestId('cores')
        fireEvent.change(nome, { target: { value: 'Nil' } })
        fireEvent.change(email, { target: { value: 'nil@email.com' } })
        fireEvent.change(quantidade, { target: { value: 5 } })
        fireEvent.change(cores, { target: { value: Cores.LARANJA } })
        expect(nome.value).toBe('Nil')
        const save = getByRole('button')
        fireEvent.click(save)
        expect(await findByText('Seus dados foram salvos com sucesso!')).toBeVisible()
    })
})