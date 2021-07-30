import getCars from '@salesforce/apex/carSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { api, LightningElement, wire } from 'lwc';

export default class CarSearchResult extends LightningElement {
    @api carTypeId;

    cars;

    @wire (getCars, {carTypeId: '$carTypeId'})
    wiredCars({data, error}){
        if(data){
            this.cars = data;
        } else if (error){
            this.showToast('ERROR', error.body.message, 'error')
        }
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        })
        this.dispatchEvent(evt);
    }

    get carsFound(){
        if(this.cars){
            return true;
        } else {
            return false;
        }
    }
}
