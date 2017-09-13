console.log('main.js works.');
console.log('cookies.js hooked up');

Cookies.set('userName', 'Bud');


var siteUserName = Cookies.get('userName');
console.log(siteUserName);