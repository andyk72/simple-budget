/**
 * Loading Component
 * Renders a loading element.
 * The element is rendered in and absolute position container, overlapping his parent bounding rect.
 * The element can have 9 positions, driven by the props.layout property
 * @props
 *	.label {String}
 *  .layout	{String}
 *      Range
 *      [
 *          'center'|'top-center'|'bottom-center'
 *          'top-left'|'middle-left'|'bottom-left'
 *          'top-right'|'middle-right'|'bottom-left'
 *      ]
 *  .style {Object}
 *      .container {Object}
 *          .background {String}
 *      .body {Object}
 *          .flexDirection {String}
 *      .label {Object}
 *          .color
 * @usage
 *  <Loading layout="top-right" />
 *  <Loading layout="top-left" label="Loading" />
 *  <Loading label="Loading" />
 *  <Loading label="Wait a moment, please" layout="absolute" />
 */

import React from 'react';

import './Loading.css';

const DEFAULT_LAYOUT = 'center';
const DEFAULT_STYLE = {
    container: {
        background: 'transparent'
    },
    body: {
        flexDirection: 'row'
    },
    label: {
        color: 'white'
    }
};

const Loading = (props) => {

    const style = {...DEFAULT_STYLE, ...props.style};

    /**
     * Returns the component base class name
     * @param {String} layout
     * Default
     *  'center'
     * Range
     *  [
     *      'center'|'top-center'|'bottom-center'
     *      'top-left'|'middle-left'|'bottom-left'
     *      'top-right'|'middle-right'|'bottom-left'
     *  ]
     * @returns {String}
     *  Range
     *      ['slc-loading'|'slc-loading--absolute']
     */
    const getBaseClassName = (layout = DEFAULT_LAYOUT) => {
        let className = `slc-loading slc-loading--${ layout }`;
        return className;
    };

    return (
        <div className={getBaseClassName(props.layout)} style={style.container}>
            <div className="slc-loading-body" style={style.body}>
                <div className="lds-dual-ring"></div>
                { props.label && <div className="slc-loading-label" style={style.label}>{props.label}</div> }
            </div>
        </div>
    );
};

export default Loading;