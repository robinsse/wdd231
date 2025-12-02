const getString = window.location.search;
console.log(getString);

const memberInfo = new URLSearchParams(getString);
console.log(memberInfo);

console.log(memberInfo.get('first'));
console.log(memberInfo.get('last'));
console.log(memberInfo.get('org-title'));
console.log(memberInfo.get('email'));
console.log(memberInfo.get('phone'));
console.log(memberInfo.get('business'));
console.log(memberInfo.get('membership'));
console.log(memberInfo.get('description'));
console.log(memberInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<h3>Member Info</h3>
<p>${memberInfo.get('first')} ${memberInfo.get('last')}</p>
<p>${memberInfo.get('org-title')} @ ${memberInfo.get('business')} (${memberInfo.get('description')})</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Signed up for ${memberInfo.get('membership')} membership on ${memberInfo.get('timestamp')}</p>
`