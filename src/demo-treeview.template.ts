import { html } from 'lit-element';
import { DemoTreeView } from './demo-treeview.component';

import '@spectrum/sp-treeview';
import '@spectrum/sp-treeview';
import '@spectrum/sp-container';


export default function template(this: DemoTreeView) {
  return html`
  <sp-container>
      <sp-rule medium label="Tree view - Standard"></sp-rule>
      <sp-demo width="300" height="600">
        <pre>
<sp-treeview>
  <sp-treeviewitem text="Layer 1"></sp-treeviewitem>
  <sp-treeviewitem text="Layer 2"></sp-treeviewitem>
  <sp-treeviewitem text="Group 1">
    <sp-treeview>
      <sp-treeviewitem text="Layer 1"></sp-treeviewitem>
      <sp-treeviewitem text="Layer 2"></sp-treeviewitem>
      <sp-treeviewitem text="Layer 3"></sp-treeviewitem>
    </sp-treeview>
  </sp-treeviewitem>
  <sp-treeviewitem text="Layer 3"></sp-treeviewitem>
  <sp-treeviewitem text="Group 2">
    <sp-treeview>
      <sp-treeviewitem text="Layer 1"></sp-treeviewitem>
      <sp-treeviewitem text="Layer 2"></sp-treeviewitem>
      <sp-treeviewitem text="Layer 3"></sp-treeviewitem>
    </sp-treeview>
  </sp-treeviewitem>
</sp-treeview></pre>
      </sp-demo>
    </sp-container>
  `;
}
