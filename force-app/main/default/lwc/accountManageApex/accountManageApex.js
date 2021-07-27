import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import { LightningElement, wire } from 'lwc';

export default class AccountManageApex extends LightningElement {

    @wire(getAllAccounts)
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

}