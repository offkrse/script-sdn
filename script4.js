const main = function () {
  console.log('.0');
  //const visualJSON = JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)));
  //document.querySelector('.param').textContent = visualJSON;
  
  console.log('Telegram script started...');

  const unsafeData = window?.Telegram?.WebApp?.initDataUnsafe;
  const startParam = unsafeData?.start_param;

  const currentParams = new URLSearchParams(window.location.search);
  if (startParam && currentParams.get('utm_medium') !== startParam) {
    window.location.search = `utm_source=roman_bot&utm_medium=${startParam}`;
    console.log('.1');
  }
}
main();
