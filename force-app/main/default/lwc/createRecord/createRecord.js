import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from
'@salesforce/schema/Account';
import NAME_FIELD from
'@salesforce/schema/Account.Name';
export default class AccountCreator
extends LightningElement {
 accountObject = ACCOUNT_OBJECT;
 myFields = [NAME_FIELD];
 handleAccountCreated(){
 // Run code when account is created.
 }
}