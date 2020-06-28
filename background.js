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
  const url = new URL(requestDetails.url);

  return {
    redirectUrl: `${url.protocol}//old.reddit.com${url.pathname}${url.search}${url.hash}`,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: patterns },
  ['blocking'],
);

browser.browserAction.onClicked.addListener(onIconClick);
