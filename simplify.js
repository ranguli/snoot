function unclutter() {
    clutter = [
        ".premium-banner-outer",
        ".footer-parent",
        ".sidecontentbox",
        ".rank",
        ".share",
        ".post-crosspost-button",
        ".midcol",
        ".infobar.listingsignupbar",
        ".redesign-beta-optin",
        ".default-header",
        ".create",
        ".users-online",
        ".hover.redditname",
        ".subscribers",
        ".account-activity-box",
        ".debuginfo",
        ".give-gold-button",
        ".report-button",
        ".linkinfo",
        ".trending-subreddits",
        "#header-img-a",
        ".bottom",
        "#sr-header-area",
        ".help-toggle",
        ".reddiquette",
        ".panestack-title"
    ]

    clutter.forEach(function (item, index) {
        document.querySelectorAll(item).forEach(function(a) {
            a.remove()
        })
    });
}

function clean_header_bottom_left() {
    useless_tabs = ["controversial", "rising", "gilded"]
    header_bottom_left = document.getElementById("header-bottom-left")
    tab_menu = header_bottom_left.querySelector(".tabmenu");

    tabs = tab_menu.querySelectorAll(".choice");

    tabs.forEach(function(tab) {
        console.log(tab.textContent);
        if (useless_tabs.includes(tab.textContent)) {
            tab.parentElement.remove();
        }
    });
}

function clean_header_bottom_right() {
    header_bottom_right = document.getElementById("header-bottom-right");

    chat_separator = document.getElementById("header-bottom-right").querySelectorAll(".separator")[1];
    header_bottom_right.querySelector("#chat").remove();
    chat_separator.remove();
}


function simplify() {
    unclutter();
    clean_header_bottom_right();
    clean_header_bottom_left();
}

simplify();
