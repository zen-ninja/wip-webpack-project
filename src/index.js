/* JS modules */
import _ from 'lodash';
/* CSS Modules */
import './style.css';
/* Images to be utilized for dynamic methods (eg: to swap out images)*/
import Icon from './img/icons/icon.png';
/* * */
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //test add image to our div
  var myRandomIcon = new Image();
  myRandomIcon.src = Icon;
  element.appendChild(myRandomIcon);

  return element;
}

document.body.appendChild(component());