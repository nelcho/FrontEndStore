import _ from 'lodash';
import "@css/style.css";
import "@sass/style.scss";
import "@img/webpack-logo.png";


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());