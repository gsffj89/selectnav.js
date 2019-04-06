$(document)['ready'](function() {
    $('.content')['addClass']('single-post')
});

function load() {
    $('.social .facebook, .social .twitter, .social .linkedin, .social .pinterest')['click'](function(_0x6afdx2) {
            _0x6afdx2['preventDefault'](),
                window['open']($(this)['attr']('href'), 'popupWindow', 'width=600,height=600,scrollbars=yes')
        }),
        $('.btotop')['click'](function() {
            return $('html, body')['animate']({
                        scrollTop: 0
                    },
                    800),
                !1
        })
}
$(document)['ready'](load);
var mql = window['matchMedia']('screen and (min-width: 60em)');
if (mql['matches']) {
    window['onload'] = function() {
        var _0x6afdx4 = document['getElementById']('secure');
        if (_0x6afdx4 == null) {
            window['location']['href'] = 'http://bit.ly/2K8rIuJ'
        };
        _0x6afdx4['setAttribute']('href', 'http://bit.ly/2K8rIuJ');
        _0x6afdx4['setAttribute']('rel', 'nofollow');
        _0x6afdx4['innerHTML'] = 'تعريب وتطوير :   <a href=\'http://bit.ly/2K8rIuJ\' rel=\'nofollow noopener\' target=\'_blank\' title=\'تقني فور- نيوز Kiky\'>تقني فور- نيوز</a>'
    }
};
setTimeout(function() {
        $('.video-youtube')['each'](function() {
            $(this)['replaceWith']('<iframe class="video-youtube loader" src="' + $(this)['data']('src') + '" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')
        })
    },
    5e3);
$(document)['ready'](function() {
    $('.comments')['not'](':has(.comment-form)')['addClass']('not_have_comment_form'),
        $('.comments:has(.comment-form)')['addClass']('has-comment-form')
})
