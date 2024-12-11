import { createApp } from 'nativescript-vue';
import App from './components/App.vue';
import store from './store';

// Register elements for NativeScript
import { registerElement } from 'nativescript-vue';
import { CheckBox } from '@nativescript/core';
registerElement('CheckBox', () => CheckBox);

createApp(App)
  .use(store)
  .start();