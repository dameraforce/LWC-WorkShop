import { LightningElement,track,api } from 'lwc';
 
export default class ModalLwc extends LightningElement {
    @track bShowModal = false;
 
    /* javaScipt functions start */ 
    @api
    open() {    
        alert('hello Child Component');
        this.bShowModal = true;  
    }
 
    close() {    
        // to close modal window set 'bShowModal' tarck value as false
        this.bShowModal = false;
    }
    /* javaScipt functions end */ 
}
 