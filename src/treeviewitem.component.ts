import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import treeviewitemStyles from './treeviewitem.styles';
import template from './treeviewitem.template';
import { TreeView } from './treeview.component';

@customElement('sp-treeviewitem')
export class TreeViewItem extends Base {
  public static componentStyles = treeviewitemStyles;

  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) selected = false;
  @property({ type: String }) text = '';
  @query('slot') private slot!: HTMLElement;

  protected _handleClick(e) {
    this.handleTreeItemsChange(e);
  }

  protected getTreeView(): TreeView[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => (e instanceof TreeView)) as any as TreeView[];
  }

  protected handleTreeItemsChange(e) { 
    var treeviews = this.getTreeView();
    (treeviews.length > 0)? console.log(treeviews) : null;
    
    if (this.slot && treeviews.length > 0) {
      this.open = !this.open;
      if (this.open) {
        treeviews.forEach(element => {
          if (element.offsetParent!=null) {
            element.styles = 'display: block; list-style: none; position: relative; padding: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; outline: none;';
          }
        })
      } else {
        treeviews.forEach(element => {
          if (element.offsetParent!=null) {
            element.styles = 'visibility: hidden; position: static; padding-left: var(--spectrum-treeview-item-indent, var(--spectrum-global-dimension-size-350)); height: 0;';
          }
        })
      }
    }
  }

  protected handleSlotChange(e) {
    
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-treeviewitem': TreeViewItem;
  }
}
