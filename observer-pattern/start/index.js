import './style.css';
import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from './analytics.js';

const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

pinkBtn.addEventListener('click', () => {
  const data = '🎀 Click on pink button! 🎀';
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});

blueBtn.addEventListener('click', () => {
  const data = '🦋 Click on blue button! 🦋';
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});
