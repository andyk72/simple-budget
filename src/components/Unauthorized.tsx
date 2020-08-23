/**
 * Unauthorized Component
 * 
 *  Renders an icon and a message.
 *  The message:
 *      - Defaults to DEFAULT_MESSAGE
 *      - Is customizable via props.message
 * 
 * @property message?: string
 * 
 * @usage
 * 
 *  <Unauthorized />
 *  <Unauthorized message="Access denied" />
 */

import React from 'react';

import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';

import './Unauthorized.css';

const DEFAULT_MESSAGE = 'You are not authorized to view this page';

interface IProps {
    message?: string
}

const Unauthorized: React.FC<IProps> = (props: IProps) => {

    return (
        <div id="sb-unauthorized">
            <IonIcon
                className="sb-unauthorized-icon"
                icon={closeCircle}
                size="large" />
            <div className="sb-unauthorized-message">
                { props.message || DEFAULT_MESSAGE}
            </div>
        </div>
    );    
};

export default Unauthorized;
