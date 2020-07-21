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
    '.linkflairlabel',
    '.oc-tag',
    '.subreddit-subscribe',
    '.awardings-bar',
    '.author',
    '.score',
    '.score-hidden',
    '.userattrs',
    '.menuarea'
  ];

  clutter.forEach((item) => {
    document.querySelectorAll(item).forEach((a) => {
      a.remove();
    });
  });
}

function cleanHeaderBottomLeft() {
  const uselessTabs = ['controversial', 'new', 'rising', 'gilded'];
  const headerBottomLeft = document.getElementById('header-bottom-left');
  const tabMenu = headerBottomLeft.querySelector('.tabmenu');

  const tabs = tabMenu.querySelectorAll('.choice');

  tabs.forEach((tab) => {
    if (uselessTabs.includes(tab.textContent)) {
      tab.parentElement.remove();
    }
  });
}

function cleanPostDetails() {
    document.querySelectorAll(".top-matter").forEach((topMatter) => {
        // Don't care who submitted the post
        topMatter.querySelectorAll(".tagline").forEach((tagline) => {
            tagline.innerHTML = tagline.innerHTML.replace("submitted", "").replace("by", "")
        });

        // Don't care about the number of comments
        topMatter.querySelectorAll(".bylink.comments.may-blank").forEach((commentsButton) => {
            commentsButton.textContent = commentsButton.innerHTML.replace(/^[0-9]+/, "")
        });
    });
}

function cleanHeaderBottomRight() {
  const headerBottomRight = document.getElementById('header-bottom-right');
  const chatSeparator = document.querySelector('.separator:nth-child(4)')
  const chat = headerBottomRight.querySelector('#chat');

  if (chat !== null && chatSeparator !== null) {
    chat.remove();
    chatSeparator.remove();
  }
}

function simplify() {
  unclutter();
  cleanHeaderBottomRight();
  cleanHeaderBottomLeft();
  cleanPostDetails();
}

simplify();
