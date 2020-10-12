import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-treeview.styles';
import template from './demo-treeview.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { TreeView } from '@spectrum/sp-treeview';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-treeview')
export class DemoTreeView extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-treeview': DemoTreeView;
  }
}
