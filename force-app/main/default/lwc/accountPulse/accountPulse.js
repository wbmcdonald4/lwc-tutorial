import getAllPulses from '@salesforce/apex/PulseManager.getPulse';
import { api, LightningElement, wire } from 'lwc';

export default class AccountPulse extends LightningElement {

    @api recordId;

    @wire(getAllPulses, {accId: '$recordId'})
    pulses;

    get responseReceived(){
        if(this.pulses){
            return true;
        }
        return false;
    }

}