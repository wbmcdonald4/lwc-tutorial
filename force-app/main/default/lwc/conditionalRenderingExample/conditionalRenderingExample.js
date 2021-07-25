import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Jaipur','Delhi','Toronto','Jodpur'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}