Feature('lala');

Scenario('test something', ({ I }) => {
    I.amOnPage('file:///Users/dean/projects/puppeteer-test/lala.html');
});


Scenario('test something 2', ({ I }) => {
    I.amOnPage('https://example.com');
});