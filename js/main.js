console.log('main.js works.');
console.log('cookies.js hooked up');

// get the value of an input
// save it in a cookie

var siteUserName = document.getElementById("fname").value;
console.log('The site user name is ' + siteUserName + '.');

Cookies.set('userName', siteUserName);
console.log(Cookies.get('userName'));


//var siteUserName = Cookies.get('userName');
//console.log(siteUserName);