const assert = require('node:assert/strict');

const { computeBaseFromUrls } = require('../assets/shared.js');

assert.equal(
  computeBaseFromUrls(
    'file:///C:/Users/pamir/Documents/%E7%94%A2%E5%93%81%E7%9B%AE%E9%8C%84/tihy-tw-repo/index.html',
    'file:///C:/Users/pamir/Documents/%E7%94%A2%E5%93%81%E7%9B%AE%E9%8C%84/tihy-tw-repo/assets/shared.js'
  ),
  ''
);

assert.equal(
  computeBaseFromUrls(
    'file:///C:/Users/pamir/Documents/%E7%94%A2%E5%93%81%E7%9B%AE%E9%8C%84/tihy-tw-repo/knowledge/articles.html',
    'file:///C:/Users/pamir/Documents/%E7%94%A2%E5%93%81%E7%9B%AE%E9%8C%84/tihy-tw-repo/assets/shared.js'
  ),
  '../'
);

assert.equal(
  computeBaseFromUrls(
    'https://jitype.github.io/jitype.health/knowledge/articles.html',
    'https://jitype.github.io/jitype.health/assets/shared.js'
  ),
  '../'
);

assert.equal(
  computeBaseFromUrls(
    'https://jitype.github.io/jitype.health/service/hrv-process.html',
    'https://jitype.github.io/jitype.health/assets/shared.js'
  ),
  '../'
);

console.log('shared.js base path tests passed');
