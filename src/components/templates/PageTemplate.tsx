import React from 'react';
import IPageTemplateProps from '../../interfaces/IPageTemplateProps';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TabContentTemplate from './TabContentTemplate';

const PageTemplate: React.FC<IPageTemplateProps> = (props: IPageTemplateProps) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{ props.title }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{ props.title }</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <TabContentTemplate>
                    { props.children }
                </TabContentTemplate>
            </IonContent>
        </IonPage>
    );

};

export default PageTemplate;
