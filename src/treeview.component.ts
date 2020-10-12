import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import treeviewStyles from './treeview.styles';
import template from './treeview.template';
import { TreeViewItem } from './treeviewitem.component';

@customElement('sp-treeview')
export class TreeView extends Base {
  @property({ type: String }) styles = '';
  public static componentStyles = treeviewStyles;
  
  // @query('slot') private slot!: HTMLElement;

  // protected getTreeViewItems(): TreeViewItem[] {
  //   return (this.slot as HTMLSlotElement)
  //     .assignedNodes({ flatten: true })
  //     .filter((e: Node) => (e instanceof TreeViewItem)) as any as TreeViewItem[];
  // }

  // protected handleSlotChange() {
  //   if (this.slot) {
  //     const treeviewitems = this.getTreeViewItems(); 
  //   }
  // }


  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-treeview': TreeView;
  }
}
