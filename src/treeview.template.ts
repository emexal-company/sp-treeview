import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { TreeView } from './treeview.component';

import '@spectrum/sp-icon';

export default function template(this: TreeView) {

    return html`
    <ul class="spectrum-TreeView" style="width: 250px; ${this.styles}">
        <slot></slot>
    </ul>
    `;
}
