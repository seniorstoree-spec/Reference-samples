const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><div id="app"></div>');
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.Vue = { createApp: (obj) => ({ mount: () => console.log('Vue mounted successfully!') }) };
global.Chart = class {};
global.safeStorage = global.localStorage;
try {
    require('./temp2.js');
} catch (e) {
    console.error('Runtime error:', e);
}
