(async () => {
  try {
    const jsdom = await import('jsdom');
    const fs = require('fs');
    const content = fs.readFileSync('index.html', 'utf-8');
    const dom = new jsdom.JSDOM(content);
    console.log('JSDOM parsed successfully');
    const app = dom.window.document.getElementById('app');
    if (!app) { console.log('No #app element found'); return; }
    // Check if there are any unclosed Vue interpolations
    const html = app.innerHTML;
    const matches = html.match(/\{\{.*?\}\}/g);
    // Let's just output the first few to see if they look right.
    console.log('Vue interpolations found:', matches ? matches.length : 0);
  } catch (e) {
    console.error(e);
  }
})();
