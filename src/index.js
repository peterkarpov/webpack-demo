import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
        var element = document.createElement('div');

        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

        // Add the image to our existing div.
        var myIcon = new Image();
        myIcon.src = Icon;
        myIcon.name = '136.png';

        element.appendChild(myIcon);

        

        return element;
}

document.body.appendChild(component());

window.addEventListener('load', function () {

        console.log('start');

});

console.log(Data);


