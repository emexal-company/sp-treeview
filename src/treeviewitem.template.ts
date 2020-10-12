import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { TreeViewItem } from './treeviewitem.component';

import '@spectrum/sp-icon';

export default function template(this: TreeViewItem) {
    var classes = {
        'is-open': this.open,
        'is-disabled': this.disabled
    }

    return html`
    <li class="spectrum-TreeView-item ${classMap(classes)}" @click="${this._handleClick}">
        <a class="spectrum-TreeView-itemLink" href="/treeview">${this.text}
        <slot @slotchange="${this.handleSlotChange}"></slot>
        </a>
    </li>
    `;
}
