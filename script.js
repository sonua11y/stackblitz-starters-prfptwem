document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the current count from the cookie
  let count = getCookie('count');

  // 2. If it exists, increment it; else initialize to 1
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  // 3. Update the cookie with the new value
  setCookie('count', count, 7); // 7 days expiry

  // 4. Display the updated count
  const displayElement = document.getElementById('countDisplay');
  if (displayElement) {
    displayElement.textContent = `You have visited this page ${count} time${count > 1 ? 's' : ''}.`;
  }
});
