import { LightningElement,track } from 'lwc';
 
export default class ModalLwc extends LightningElement {
    /* javaScipt functions start */ 
    openModal() {    
        // to open modal window set 'bShowModal' tarck value as true
        this.template.querySelector('c-child-cmp').open();
    }
}
 