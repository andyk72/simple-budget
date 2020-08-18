import React, { ReactNode, useState } from 'react';
import './Infoable.css';

const DEFAULT_LAYOUT_ICON = 'topright';
const DEFAULT_LAYOUT_INFO = 'left';

interface InfoableProps {
    children: ReactNode;
    layoutInfo?: string;
    layoutIcon?: string;
    info: string;
    infoVisible?: boolean;
}

const Infoable: React.FC<InfoableProps> = (props:InfoableProps) => {

    const [infoVisible, setInfoVisible] = useState(props.infoVisible !== undefined ? props.infoVisible : false);

    const onClickHandler = (evt: any): void => {
        setInfoVisible(!infoVisible);
    };

    /**
     * Returns the Infoable root element CSS class
     * @returns {String}
     *  Sample
     *      'sb-infoable sb-infoable--icon-topright sb-infoable--info-left'
     */
    const getClassName = (): string => {

        // icon related class
        const layoutIcon = (props.layoutIcon)
            ? props.layoutIcon
            : DEFAULT_LAYOUT_ICON;
        const layoutIconClassName = `sb-infoable--icon-${ layoutIcon }`;

        // info related class
        const layoutInfo = (props.layoutInfo)
            ? props.layoutInfo
            : DEFAULT_LAYOUT_INFO;
        const layoutInfoClassName = `sb-infoable--info-${ layoutInfo }`;

        return `sb-infoable ${ layoutIconClassName } ${ layoutInfoClassName }`;
    };

    return (
        <div id="sb-infoable" className={ getClassName() }>        
            <div className="sb-infoable-target">
            { props.children }
            </div>
            <div className="sb-infoable-content" onClick={onClickHandler}>
                <div className="sb-infoable-icon">i</div>
                { infoVisible &&
                    <div className="sb-infoable-info">
                        { props.info }
                        <div className="sb-infoable-info-arrow" />
                    </div>
                }
            </div>
        </div>
    );    
};

export default Infoable;
