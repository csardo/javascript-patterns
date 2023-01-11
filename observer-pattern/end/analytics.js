import Observer from './observer';

export function sendToGoogleAnalytics(data) {
  console.log('Sent to Google analytics: ', data);
}

export function sendToCustomAnalytics(data) {
  console.log('Sent to custom analytics: ', data);
}

export function sendToEmail(data) {
  console.log('Sent to email: ', data);
}

Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);
