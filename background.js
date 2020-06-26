const patterns = [
  'https://www.reddit.com/*',
  'https://new.reddit.com/*',
];

function onIconClick() {
  browser.tabs.create({
    url: 'https://github.com/ranguli/snoot',
  });
}

function redirect(requestDetails) {
  const parser = document.createElement('a');
  parser.href = requestDetails.url;
  const newUrl = `${parser.protocol}//old.reddit.com${parser.pathname}${parser.search}${parser.hash}`;

  return {
    redirectUrl: newUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: patterns },
  ['blocking'],
);

browser.browserAction.onClicked.addListener(onIconClick);
