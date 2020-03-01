function BlankPage() {
    $.ajax({
        url: mw.util.wikiScript('api'),
        type: 'POST',
        data: {
            action: 'edit',
            title: wgPageName,
            summary: 'Blanked page using script',
            text: "",
            bot: 1,
            token: mw.user.tokens.get('editToken'),
            format: 'json'
        },
        success: function(d) {
            if (d.edit.result == 'Success') {
                //location.href += (location.href.indexOf('?') > -1) ? '&action=purge' : '?action=purge';
                location.refresh();
            }
        }
    });
}

window.onload = function() {

    var WipeLink = document.createElement("a");

    WipeLink.href = "#";

    WipeLink.innerHTML = "BLANK PAGE";

    WipeLink.className = "wds-button wds-is-secondary";

    WipeLink.onclick = function() {
        BlankPage();
    }

    document.getElementsByClassName('page-header__contribution-buttons')[0].append(WipeLink);

    setTimeout(function() {
        WipeLink.onclick = function() {
            BlankPage();
        };
    }, 1000);

};
