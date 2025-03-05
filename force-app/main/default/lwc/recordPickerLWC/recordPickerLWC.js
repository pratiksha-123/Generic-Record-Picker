import { LightningElement } from 'lwc';

const options = [
    { label : "Account", value : "Account" },
    { label : "Contact", value : "Contact"},
    { label : "Opportunity", value : "Opportunity"}
];

export default class RecordPickerLWC extends LightningElement {
    targetObjectSelectedId = null;
    options = options;
    targetObjectName = 'Account';

    get targetObjectSelected(){
        return this.targetObjectSelectedId === null;
    }

    handleObjectChange(event){
        this.targetObjectName = event.target.value;
    }

    handleRecordSelection(event){
        this.targetObjectSelectedId = event.detail.recordId;
    }

}