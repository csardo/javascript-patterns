import './analytics.js';
import Observer from './observer.js';

Observer.notify('✨ New data ✨');

setTimeout(() => {
  Observer.notify('✨ New data after timeout ✨');
}, 1000);
