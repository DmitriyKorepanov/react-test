/*

 Примеры:
 1)
 import React from 'react';
 import listenEvent from '../../utils/listenEvent';
 @listenEvent()
 export default class Example extends React.Component {
     handleKeyPress(event) {
        // do some stuff on 'keyup' event
     }
     render() {
        return (...)
     }
 }

 2)
 import React from 'react';
 import listenEvent from '../../utils/listenEvent';
 @listenEvent('resize', 'handleResize')
 export default class Example extends React.Component {
    handleResize(event) {
     // do some stuff on 'resize' event
     }
     render() {
         return (...)
     }
 }
*/
const DEFAULT_EVENT_TYPE = 'keyup';
const DEFAULT_HANDLER_NAME = 'handleKeyPress';

export default function listenEvent(eventType = DEFAULT_EVENT_TYPE, eventHandlerName = DEFAULT_HANDLER_NAME) {
    return function (target) {
        let { prototype } = target.prototype;

        let oldDidMount = prototype.componentDidMount;
        let oldWillUnmount = prototype.componentWillUnmount;
        prototype.componentDidMount = function () {
            oldDidMount && oldDidMount.call(this);
            if (window && this[eventHandlerName]) {
                window.addEventListener(eventType, this[eventHandlerName]);
            }
        };
        prototype.componentWillUnmount = function () {
            oldWillUnmount && oldWillUnmount.call(this);
            if (window && this[eventHandlerName]) {
                window.removeEventListener(eventType, this[eventHandlerName]);
            }
        };
    };
}
