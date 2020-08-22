import React from 'react';
import { connect } from 'react-redux';
import IPageTemplateProps from '../../interfaces/IPageTemplateProps';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TabContentTemplate from './TabContentTemplate';
import Loading from '../loading/Loading';

const mapState = (state: any) => {
    return {
        loading: state.gui.loading
    }
};

const PageTemplate: React.FC<IPageTemplateProps> = (props: IPageTemplateProps) => {

    const loading: boolean = props.loading;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{ props.title }</IonTitle>
                    {loading && <Loading layout="middle-right" />}
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

export default connect(mapState)(PageTemplate);
