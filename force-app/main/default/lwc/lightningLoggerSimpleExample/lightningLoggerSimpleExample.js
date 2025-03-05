import { LightningElement } from 'lwc';
import {log} from 'lightning/logger';
import LightningAlert from 'lightning/alert';

export default class LightningLoggerSimpleExample extends LightningElement {

    connectedCallback() {
        let message = 'Test Message on Load.';
        log(message);
    }

    handleClick(){
        let messageClick = 'Test Message on button Click';
        log(messageClick);

        LightningAlert.open({
            message : 'success!',
            theme : 'success',
            label : 'Log has been Generated!'
        })
    }
}