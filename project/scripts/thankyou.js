const getString = window.location.search;
console.log(getString);

const memberInfo = new URLSearchParams(getString);
console.log(memberInfo);

console.log(memberInfo.get('first'));
console.log(memberInfo.get('last'));
console.log(memberInfo.get('email'));
console.log(memberInfo.get('phone'));
console.log(memberInfo.get('islands'));
console.log(memberInfo.get('travelers'));
console.log(memberInfo.get('stars'));
console.log(memberInfo.get('activities'));
console.log(memberInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<h3>Traveler Info</h3>
<p>${memberInfo.get('first')} ${memberInfo.get('last')}</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Wants to visit ${memberInfo.get('islands')} with ${memberInfo.get('travelers')} travelers and stay at a ${memberInfo.get('stars')} star hotel.</p>
<p>Desired activities: ${memberInfo.get('activities')}</p>
<p>Submitted "Book with a Travel Agent" form on ${memberInfo.get('timestamp')}</p>
`