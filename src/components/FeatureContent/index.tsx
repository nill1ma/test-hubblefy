import React from 'react';
import { FeatureContentContainer, FeatureContentImg, FeatureContentItem, FeatureContentText } from './styles'

export default function FeatureContent() {
    const imgUrl = 'https://digilandia.io/wp-content/uploads/2020/07/Como-usar-o-Hubblefy.jpg'
    const texts = [
        'Por que a Hubblefy?',
        'Enquanto os apps de mensagens são ótimos para as mensagens curtas e o social, o Hubblefy chegou para eliminar os e-mails e compartilhar com processos de comunicação inteligentes em grupos de negócios para não perder mais nada.'
    ]
    return (
        <FeatureContentContainer>
            <FeatureContentItem>
                <FeatureContentImg src={imgUrl} />
            </FeatureContentItem>
            <FeatureContentItem>
                {texts.map((text, index) => {
                    return (
                        <FeatureContentText weight={index === 0 ? 'bold' : ''}>
                            {text}
                        </FeatureContentText>
                    )
                })}
            </FeatureContentItem>
        </FeatureContentContainer>
    );
}