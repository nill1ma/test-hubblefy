import React, { useEffect, useState } from 'react';
import firebaseDb from '../../firebase';
import { Cores, IData } from '../../interfaces/IForm';
import Select from './select';
import { RequestFormButton, RequestFormContainer, RequestFormGroup, RequestFormInput, RequestFormLabel, RequestFormTextArea, RequestFormSuccessful } from './styles';

export default function RequestForm() {


    const [data, setData] = useState<IData>({
        nome: '',
        email: '',
        quantidade: 0,
        cores: Cores.AZUL,
        pedido: ''
    })


    const [dataSaved, setDataSaved] = useState({})
    const [successful, setSuccessful] = useState(false)


    const save = () => {
        firebaseDb.child('order').push(data)
        setSuccessful(!successful)
    }

    useEffect(()=>{
        if(successful) {
            setTimeout(()=> setSuccessful(!successful), 2000)
        }
    }, [successful])

    useEffect(() => {
        firebaseDb.child('order').on('value', snapshot => {
            if (snapshot.val() !== null)
                setDataSaved({
                    ...snapshot.val()
                })
        })
    }, [])

    const handleForm = (field: string, value: any) => {
        checkField(field, value)
        setData(data)
        descriptionOrder()
    }

    const descriptionOrder = () => {
        return isEmpitOrGreaterThanZero()
            ? data.pedido = `${data.nome} solicita ${data.quantidade} unidades da cor ${data.cores}` : data.pedido = ''
    }

    const isEmpitOrGreaterThanZero = () => {
        return data.nome !== '' && Number(data.quantidade) > 0 && String(data.cores) !== ''
    }

    const form = [
        { label: 'Nome:', type: <RequestFormInput data-testid='nome' defaultValue={data.nome} onChange={(e: any) => handleForm('nome', e.target.value)} placeholder="Digite seu nome" /> },
        { label: 'Email:', type: <RequestFormInput data-testid='email' defaultValue={data.email} onChange={(e: any) => handleForm('email', e.target.value)} placeholder="Digite seu email" /> },
        { label: 'Quantidade:', type: <RequestFormInput data-testid='quantidade' defaultValue={data.quantidade} onChange={(e: any) => handleForm('quantidade', e.target.value)} /> },
        { label: 'Cores:', type: <Select handleForm={handleForm} /> },
        { label: 'Pedido:', type: <RequestFormTextArea data-testid='pedido' defaultValue ={data.pedido} placeholder="Descrição do pedido" /> },
    ]

    const checkField = (field: string, value?: any) => {
        switch (field) {
            case "nome":
                data.nome = value
                break
            case "email":
                data.email = value
                break
            case "quantidade":
                data.quantidade = value
                break
            case "cores":
                data.cores = value
                break
            default:
                data.pedido = value
        }
    }

    return (
        <RequestFormContainer>
            {form.map(f => {
                return (
                    
                        <RequestFormGroup isButton={false} key={Math.random()}>
                            <RequestFormLabel>{f.label}</RequestFormLabel>
                            {f.type}
                        </RequestFormGroup>
                    
                )
            })}
            <RequestFormGroup isButton={true}>
                <RequestFormButton onClick={() => save()}>Salvar</RequestFormButton>
            </RequestFormGroup>
            <RequestFormGroup style={{ display: !successful ? 'none' : '' }} isButton={false}>
                <RequestFormSuccessful>Seus dados foram salvos com sucesso!</RequestFormSuccessful>
            </RequestFormGroup>
        </RequestFormContainer>
    );
}