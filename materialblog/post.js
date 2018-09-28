$(document)['ready'](function() {
    var _0x4f83x1 = $('a.blog-pager-older-link')['attr']('href');
    $('a.blog-pager-older-link')['load'](_0x4f83x1 + ' .post-title:first', function() {
        var _0x4f83x1 = $('a.blog-pager-older-link')['text']();
        $('a.blog-pager-older-link')['text'](_0x4f83x1 + '\xBB')
    });
    var _0x4f83x2 = $('a.blog-pager-newer-link')['attr']('href');
    $('a.blog-pager-newer-link')['load'](_0x4f83x2 + ' .post-title:first', function() {
        var _0x4f83x1 = $('a.blog-pager-newer-link:first')['text']();
        $('a.blog-pager-newer-link')['text']('\xAB' + _0x4f83x1)
    })
});
$(function() {
    var _0x4f83x3 = $('#HTML1')['text']();
    var _0x4f83x4 = CryptoJS['AES']['decrypt'](_0x4f83x3, 'bismillah').toString(CryptoJS['enc'].Utf8);
    var _0x4f83x5 = _0x4f83x4['split'](',');
    var _0x4f83x6 = _0x4f83x5[0];
    var _0x4f83x7 = _0x4f83x5[1];
    var _0x4f83x8 = window['location']['href'];
    _0x4f83x8 = _0x4f83x8['substring'](0, _0x4f83x8['lastIndexOf']('.'));
    if (!('dihak' == _0x4f83x6 && window['location']['href']['indexOf'](_0x4f83x7) > -1) && notload) {
        $('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;height: 250px;"><a href="http://www.bloggerku.com/" target="_blank" title="Kumpulan Tutorial Blogger"><img alt="bloggerku" src="https://3.bp.blogspot.com/-6kCkIiT4sRo/Vy_t7jexLCI/AAAAAAAAAY0/S4FUZ4w3vPAHbVirMuT9I2W2RlpKV8iAACLcB/s1600/iklan%2Bbloggerku.png"></a><span class="info-iklan" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh Bloggerku</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="http://www.bloggerku.com/p/pasang-iklan.html" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/info-iklan.png" style="vertical-align: top;"></a></span></div>')['insertBefore']('#sidebar-atas');
        $('.info-icon')['hover'](function() {
            $('.info-iklan')['toggle']()
        });
        $('#creditmd')['css']({
            display: 'initial',
            "font-size": '100%',
            color: '#fff',
            visibility: 'visible'
        });
        if ($('#creditmd')['html']() != ('Template By <a href="https://alldnew.blogspot.com/" target="_blank" title="All dNew">All dNew</a>')) {
            location['href'] = 'https://alldnew.blogspot.com'
        };
        notload = false
    }
});
var randomRelatedIndex, showRelatedPost;
!
function(_0x4f83x1, _0x4f83xb, _0x4f83xc) {
    var _0x4f83xd = {
            widgetTitle: '<h4 class=\'judul-bawah\'><span>Related Post</span></h4>',
            numPosts: realated,
            summaryLength: 370,
            titleLength: 'auto',
            thumbnailSize: 200,
            noImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC',
            containerId: 'related-post',
            newTabLink: !1,
            callBack: function() {}
        },
        _0x4f83xe = function(_0x4f83x1) {
            var _0x4f83xd = _0x4f83xb['createElement']('script');
            _0x4f83xd['type'] = 'text/javascript', _0x4f83xd['src'] = _0x4f83x1, _0x4f83xc['appendChild'](_0x4f83xd)
        },
        _0x4f83x2 = function(_0x4f83x1, _0x4f83xb) {
            return Math['floor'](Math['random']() * (_0x4f83xb - _0x4f83x1 + 1)) + _0x4f83x1
        },
        _0x4f83xf = function(_0x4f83x1) {
            var _0x4f83xb, _0x4f83xc, _0x4f83xd = _0x4f83x1['length'];
            if (0 === _0x4f83xd) {
                return !1
            };
            for (; --_0x4f83xd;) {
                _0x4f83xb = Math['floor'](Math['random']() * (_0x4f83xd + 1)), _0x4f83xc = _0x4f83x1[_0x4f83xd], _0x4f83x1[_0x4f83xd] = _0x4f83x1[_0x4f83xb], _0x4f83x1[_0x4f83xb] = _0x4f83xc
            };
            return _0x4f83x1
        },
        _0x4f83x10 = 'object' == typeof labelArray && labelArray['length'] > 0 ? '/-/' + _0x4f83xf(labelArray)[0] : '',
        _0x4f83x11 = function(_0x4f83x1) {
            var _0x4f83xb = _0x4f83x1['feed']['openSearch$totalResults']['$t'] - _0x4f83xd['numPosts'],
                _0x4f83xc = _0x4f83x2(1, _0x4f83xb > 0 ? _0x4f83xb : 1);
            _0x4f83xe('/feeds/posts/summary' + _0x4f83x10 + '?alt=json-in-script&orderby=updated&start-index=' + _0x4f83xc + '&max-results=' + _0x4f83xd['numPosts'] + '&callback=showRelatedPost')
        },
        _0x4f83x12 = function(_0x4f83x1) {
            var _0x4f83xb, _0x4f83xc, _0x4f83xe, _0x4f83x2, _0x4f83x10, _0x4f83x11 = document['getElementById'](_0x4f83xd['containerId']),
                _0x4f83x12 = _0x4f83xf(_0x4f83x1['feed']['entry']),
                _0x4f83x13 = _0x4f83xd['widgetTitle'] + '<ul class="related-post">',
                _0x4f83x14 = _0x4f83xd['newTabLink'] ? ' target="_blank"' : '',
                _0x4f83x15 = '<span style="display:block;clear:both;"></span>';
            if (_0x4f83x11) {
                for (var _0x4f83x16 = 0; _0x4f83x16 < _0x4f83xd['numPosts'] && _0x4f83x16 != _0x4f83x12['length']; _0x4f83x16++) {
                    _0x4f83xc = _0x4f83x12[_0x4f83x16]['title']['$t'], _0x4f83xe = 'auto' !== _0x4f83xd['titleLength'] && _0x4f83xd['titleLength'] < _0x4f83xc['length'] ? _0x4f83xc['substring'](0, _0x4f83xd['titleLength']) + '&hellip;' : _0x4f83xc, _0x4f83x2 = 'media$thumbnail' in _0x4f83x12[_0x4f83x16] && _0x4f83xd['thumbnailSize'] !== !1 ? _0x4f83x12[_0x4f83x16]['media$thumbnail']['url']['replace'](/\/s[0-9]+(\-c)?\//, '/s' + _0x4f83xd['thumbnailSize'] + '-c/') : _0x4f83xd['noImage'], _0x4f83x10 = 'summary' in _0x4f83x12[_0x4f83x16] && _0x4f83xd['summaryLength'] > 0 ? _0x4f83x12[_0x4f83x16]['summary']['$t']['replace'](/<br ?\/?>/g, ' ')['replace'](/<.*?>/g, '')['replace'](/[<>]/g, '')['substring'](0, _0x4f83xd['summaryLength']) + '&hellip;' : '';
                    for (var _0x4f83x17 = 0, _0x4f83x18 = _0x4f83x12[_0x4f83x16]['link']['length']; _0x4f83x18 > _0x4f83x17; _0x4f83x17++) {
                        _0x4f83xb = 'alternate' == _0x4f83x12[_0x4f83x16]['link'][_0x4f83x17]['rel'] ? _0x4f83x12[_0x4f83x16]['link'][_0x4f83x17]['href'] : '#'
                    };
                    _0x4f83x13 += '<li class="related-post-item" tabindex="0"><div class="related-post-item-inner"><a class="related-post-item-title" href="' + _0x4f83xb + '"' + _0x4f83x14 + '><img alt="" class="related-post-item-thumbnail" src="' + _0x4f83x2 + '" width="' + _0x4f83xd['thumbnailSize'] + '" height="' + _0x4f83xd['thumbnailSize'] + '"></a><a class="related-post-item-title" title="' + _0x4f83xc + '" href="' + _0x4f83xb + '"' + _0x4f83x14 + '>' + _0x4f83xe + '</a>' + _0x4f83x15 + '</div></li>'
                };
                _0x4f83x11['innerHTML'] = _0x4f83x13 += _0x4f83x15 + '</ul>', _0x4f83xd['callBack']()
            }
        };
    randomRelatedIndex = _0x4f83x11, showRelatedPost = _0x4f83x12, _0x4f83xe('/feeds/posts/summary' + _0x4f83x10 + '?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex')
}(window, document, document['getElementsByTagName']('head')[0])
