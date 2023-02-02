import _ from 'lodash'
import './scss/styles.scss'
import './css/styles.css'
import Alert from 'bootstrap/js/dist/alert'
import boolbreakfast from './boolbreakfast.jpg'
import bowllunch from './bowllunch.jpg'
import bowlsupper from './bowlsupper.jpg'
import burgers from './burgers.jpg'
import fruits from './fruits.jpg'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'
import bootstrap from 'bootstrap'

document.querySelector('.thed').addEventListener('click',()=>{
    var btnSwitch = document.getElementById('btnSwitch');
    var body = document.querySelector('html');
    console.log('click');
    if (body.getAttribute('data-bs-theme')=='dark') {
        body.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').textContent="Switch to Dark Theme";

        
        
    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').textContent="Switch to Light Theme";

    }
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

