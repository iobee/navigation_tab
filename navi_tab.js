/**
 * Created by nick on 10/28/13.
 */
/*var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function(bookmarkTreeNodes) {
        console.log(bookmarkTreeNodes);
    });*/

/*var news = {
    title:'NEWS',
    content:[
        {
            title:'cnbeta',
            url:'http://www.baidu.com'
        },
        {
            title:'youku',
            url:'http://www.youku.com'
        },
        {
            title:'google',
            url:'http://www.google.com'
        }
    ]
}*/

/*chrome.storage.sync.set({'test': news.content}, function(){
    console.log('store data');
});*/

var containerForce = document.getElementById('containerForce');
var html = '<a>test</a>';
var a = document.createElement('a');
var text = document.createTextNode('myTest');
a.appendChild(text);
a.href = 'www.baidu.com';
containerForce.appendChild(a);

var CATEGORY = 'category';
var cate = {};
cate[CATEGORY] = ['test', 'news', 'tech'];
chrome.storage.sync.set(cate, function(){
    console.log('store data');
});

var conainerTest = document.getElementById('containerTest');

chrome.storage.sync.get(CATEGORY, function(result){
    var category = result[CATEGORY];
    var length = category.length;
    var classSize = 12/length;
    for(var i = 0; i < length; i++){
        var div = document.createElement('div');
        div.className = 'grid_1';
        var textNode = document.createTextNode(category[i]);
        console.log(textNode);
        var tag = document.createElement('button');
        tag.name = category[i];
        tag.appendChild(textNode);
        div.appendChild(tag);

        conainerTest.appendChild(div);
    }


})

chrome.storage.sync.get(null, function(items){
    console.log(items);
});

chrome.storage.sync.get('test', function(item){
    console.log(item.test);
    items = item.test;
    console.log(items.length);

    for(var i=0; i< items.length; i++){
        var anchor = document.createElement('a');
        anchor.appendChild(document.createTextNode(items[i].title))
        anchor.href = items[i].url;
        anchor.name = items[i].title;
        console.log(anchor);
        containerForce.appendChild(anchor);
    }
});

function addUrl(category, title, url){
    console.log('test');
    chrome.storage.sync.get(category, function(result){
        items = result[category];
        console.log(items);
        var diandidan = {
            title:'test',
            url:'www.youku.com'
        }
        items.push(diandidan);
        console.log(items);
        console.log(items.length);
        var test = {};
        test[category] = items;
        chrome.storage.sync.set(test, function(){
            console.log('store data');
        })
    });
}

var button = document.getElementsByTagName('button');
console.log(button);
//button[0].addEventListener('click', addUrl('test', 'cnbeta', 'www.baidu.com'));
button[0].addEventListener('click', function print(){
    addUrl('test', 'cnbeta', 'www.baidu.com');
    console.log('test');
});
