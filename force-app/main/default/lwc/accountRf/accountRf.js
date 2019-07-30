import Id from '@salesforce/user/Id';
import { LightningElement, api } from 'lwc';
import ACCOUNT_FIELD from
'@salesforce/schema/Contact.AccountId';
import NAME_FIELD from
'@salesforce/schema/Contact.Name';
export default class RecordFormStaticContact
extends LightningElement {
 // Flexipage provides recordId and objectApiName
 @api recordId;
 @api objectApiName;
 fields = [ACCOUNT_FIELD, NAME_FIELD];
}