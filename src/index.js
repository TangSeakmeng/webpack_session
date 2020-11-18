// run webpack: npx webpack

import _ from 'lodash';
import $ from 'jquery';
import txt from '!!raw-loader!./textFile.txt'; 
import styles from'./styles.css';

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = '<h3>Hello Webpack!</h3>';
//     return element;
// }

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'Webpack', '!'], ' ');
//     return element;
// }

// document.querySelector('#app').appendChild(component());

$(function() {
    $('#app').append(`<h1>Hello Everyone!!!</h1><p>${txt}</p>`)
    alert(_.join(['hello','is','made'],'-*-'))
})

