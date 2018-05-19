/* JS modules */
import _ from 'lodash';
/* CSS Modules */
import './style.css';
/* Images to be utilized for dynamic methods (eg: to swap out images)*/
import Icon from './img/icons/icon.png';
/* Data files (if no db connected) */
import StaticData from './data/test-data.xml';
/* * */
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // test add image to our div
  var myRandomIcon = new Image();
  myRandomIcon.src = Icon;
  element.appendChild(myRandomIcon);

  // log out static data
  console.log(StaticData);

  return element;
}

document.body.appendChild(component());