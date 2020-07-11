function unclutter() {
  const clutter = [
    '.premium-banner-outer',
    '.footer-parent',
    '.sidecontentbox',
    '.rank',
    '.share',
    '.post-crosspost-button',
    '.midcol',
    '.infobar.listingsignupbar',
    '.redesign-beta-optin',
    '.default-header',
    '.create',
    '.users-online',
    '.hover.redditname',
    '.subscribers',
    '.account-activity-box',
    '.debuginfo',
    '.give-gold-button',
    '.report-button',
    '.linkinfo',
    '.trending-subreddits',
    '#header-img-a',
    '.bottom',
    '#sr-header-area',
    '.help-toggle',
    '.reddiquette',
    '.panestack-title',
  ];

  clutter.forEach((item) => {
    document.querySelectorAll(item).forEach((a) => {
      a.remove();
    });
  });
}

function cleanHeaderBottomLeft() {
  const uselessTabs = ['controversial', 'rising', 'gilded'];
  const headerBottomLeft = document.getElementById('header-bottom-left');
  const tabMenu = headerBottomLeft.querySelector('.tabmenu');

  const tabs = tabMenu.querySelectorAll('.choice');

  tabs.forEach((tab) => {
    if (uselessTabs.includes(tab.textContent)) {
      tab.parentElement.remove();
    }
  });
}

function cleanHeaderBottomRight() {
  const headerBottomRight = document.getElementById('header-bottom-right');
  const chatSeparator = document.getElementById('header-bottom-right').querySelectorAll('.separator')[1];
  const chat = headerBottomRight.querySelector('#chat');

  if (chat !== null) {
    chat.remove();
    chatSeparator.remove();
  }
}

function simplify() {
  unclutter();
  cleanHeaderBottomRight();
  cleanHeaderBottomLeft();
}

simplify();
