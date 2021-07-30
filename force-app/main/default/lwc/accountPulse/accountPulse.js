// need to figure out how to refresh the list upon creation
import { refreshApex } from '@salesforce/apex';
import getAllPulses from '@salesforce/apex/PulseManager.getPulse';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { api, LightningElement, wire } from 'lwc';

export default class AccountPulse extends LightningElement {

    @api recordId;
    pulses;
    // @wire(getAllPulses, {accId: '$recordId'}) pulses;

    @wire (getAllPulses, {accId: '$recordId'})
    wiredPulses(result){
        this.wiredPulsesResult = result;
        console.log(this.wiredPulsesResult);
        if(result.data){
            this.pulses = result.data;
        } else if (result.error){
            this.showToast('ERROR', error.body.message, 'error')
        }
    }

    successHandler() {        
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        return refreshApex(this.wiredPulsesResult);
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        })
        this.dispatchEvent(evt);
    }

    get pulsesFound(){
        if(this.pulses){
            return true;
        } else {
            return false;
        }
    }

    // changeStyle = true;
    // ClassName(event){
    //   pulseRating = event.currentTarget.dataset.id;
    //   if (pulseRating==="Highly Satisfied"){
    //       return 'class1'
    //   } else 
    //     return 'class6';
    // }

    // colorMatch(){
    //     const colorMatch = {
    //         'Highly Satisfied': 'lightgreen',
    //         'Fairly Satisfied': 'green',
    //         'Somewhat Satisfied': 'darkgreen',
    //         'Neutral': 'yellow',
    //         'High Risk': 'orange',
    //         'Extreme Risk': 'red',
    //      };
    // }

    // titleColor;
    // isFirstRender;

    // renderedCallback() {
    //     if (!this.isFirstRender) {
    //         return;
    //     }
    //     this.isFirstRender = false;
    //     var bodyStyles = document.body.style;
    //     bodyStyles.setProperty('--titleColor', this.titleColor);
    // }
}