import _ from 'lodash';
import './style.css';

const content = document.querySelector('#content');
const displayText = document.querySelector('#displayText');


const h1 = document.createElement('h1');
h1.innerText = "Biryani Bliss"

content.append(h1);

const base1 = document.createElement('button');
base1.classList.add('tablinks');
base1.id = 'homeButton';
base1.innerText = "HOME";
content.append(base1);

const base2 = document.createElement('button');
base2.classList.add('tablinks');
base2.id = 'menuButton';
base2.innerText = "MENU";
content.append(base2);

const base3 = document.createElement('button');
base3.classList.add('tablinks');
base3.id = 'contactButton';
base3.innerText = "CONTACT";
content.append(base3);


const button1 = document.getElementById('homeButton');
const button2 = document.getElementById('menuButton');
const button3 = document.getElementById('contactButton');
const div1 = document.getElementById('home');
const div2 = document.getElementById('menu');
const div3 = document.getElementById('contact');

// Set display to none when button is clicked

button1.addEventListener('click', () => {
    div3.style.display = 'none';
    div2.style.display = 'none';
    div1.style.display = 'block';
  });

  button2.addEventListener('click', () => {
    div1.style.display = 'none';
    div3.style.display = 'none';
    div2.style.display = 'block';
  });

  button3.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
  });



