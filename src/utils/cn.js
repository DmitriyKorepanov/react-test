/*
```
   import React, { PropTypes } from 'react';
   import cn from '../../utils/cn';
   @cn('block')
   export default class Example extends React.Component {
       render(cn) {
           return (
               <div className={ cn }>
                   <div className={ cn('element') }>element</div>
                   <div className={ cn('element', { mod: true }) }>mod</div>
                   <div className={ cn('element', { mod: 'modValue' }) }>mod modValue</div>
               </div>
          )
       }
   }
```

Сгенерирует вот такую разметку:
    ```
    <div class="block">
        <div class="block__element">element</div>
        <div class="block__element block__element--mod">mod</div>
        <div class="block__element block__element--mod-modValue">mod modValue</div>
    </div>
```

### `2)`
Если компоненту будет передано className property - оно будет добавлено блоку
    ```
       import Example from './components/example.js';
       @cn('block-wrapper')
       export default class ExampleWrapper extends React.Component {
           render(cn) {
               return (
                    <div className={ cn }>
                        <Example className={ cn('element') }/>
                    </div>
              )
           }
       }
    ```

    ```
    <div class="block-wrapper">
        <div class="block block-wrapper__element">
            <div class="block__element">element</div>
            <div class="block__element block__element--mod">mod</div>
            <div class="block__element block__element--mod-modValue">mod modValue</div>
        </div>
    </div>
```
*/
import bemCn from 'bem-cn';

bemCn.setup({
    el: '__',
    mod: '--',
    modValue: '-'
});

const proxyClassName = (className, cn) => {
    let proxyCn = function () {
        let isBlock = false;
        // create actual array
        let args = Array.prototype.slice.call(arguments, 0);

        // check is block element or not
        if (typeof args[0] === 'undefined' || typeof args[0] === 'object') {
            (args.length === 0) && args.push({});

            isBlock = true;
        }

        return cn.apply(cn, args) + ((isBlock && className) ? ` ${className}` : '');
    };

    proxyCn.toString = function () {
        return cn().toString() + (className ? ` ${className}` : '');
    };

    return proxyCn;
};

export default function cn(blockName) {
    return function (target) {
        const proto = target.prototype;
        if (!proto.render || typeof proto.render !== 'function') return;

        const originalRender = proto.render;

        const cn = bemCn(blockName);

        target.prototype.render = function () {
            const proxyCn = proxyClassName(this.props.className, cn);

            return originalRender.call(this, proxyCn);
        };
    };
}
