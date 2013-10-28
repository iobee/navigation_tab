/**
 * Created by nick on 10/28/13.
 */
var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function(bookmarkTreeNodes) {
        console.log(bookmarkTreeNodes);
    });