/**
 * Created by nick on 10/28/13.
 */
/*var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function(bookmarkTreeNodes) {
        console.log(bookmarkTreeNodes);
    });*/

var news = {
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
}

chrome.storage.sync.set({'test': news.content}, function(){
    console.log('store data');
});
chrome.storage.sync.set({'news': news.content}, function(){
    console.log('store data');
});
chrome.storage.sync.set({'tech': news.content}, function(){
    console.log('store data');
});

var CATEGORY = 'category';
var cate = {};
cate[CATEGORY] = ['test', 'news', 'tech'];
chrome.storage.sync.set(cate, function(){
    console.log('store data');
});

var tagContainer = document.getElementById('tagContianer');

var helper = function (i){
    return {
        getValue: function (){
            return i;
        }
    };
}

chrome.storage.sync.get(CATEGORY, function(result){
    var category = result[CATEGORY];
    var length = category.length;
    for (var i = 0; i < length; i++){
        var ITEMs = category[i];
        chrome.storage.sync.get(ITEMs, function(item){
            var ITEM = helper(ITEMs).getValue();
            var tag = document.createElement('div');
            tag.className = 'grid_1 tag_contianer';

            var tagButton = document.createElement('div');
            var textNode = document.createTextNode(ITEM);
            tagButton.appendChild(textNode);
            tagButton.className = 'tag_button';
            //console.log(textNode);
            var moreOver = document.createElement('div');
            moreOver.className = 'morehover';
            var ul = document.createElement('ul');

            console.log(ITEM);
            items = item[ITEM];
            console.log(items.length);

            for(var j=0; j< items.length; j++){
                var li = document.createElement('li');
                var anchor = document.createElement('a');
                anchor.appendChild(document.createTextNode(items[j].title));
                anchor.href = items[j].url;
                anchor.name = items[j].title;
                console.log(anchor);
                li.appendChild(anchor);
                ul.appendChild(li);
            }

            moreOver.appendChild(ul);
            tag.appendChild(tagButton);
            tag.appendChild(moreOver);
            tagContainer.appendChild(tag);
        });
    }


})

/*chrome.storage.sync.get(null, function(items){
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
});*/

//add url to shorage
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

/*var button = document.getElementsByTagName('button');
console.log(button);*/
//button[0].addEventListener('click', addUrl('test', 'cnbeta', 'www.baidu.com'));
button[0].addEventListener('click', function(event){
    addUrl('test', 'cnbeta', 'www.baidu.com');
    console.log('test');
});
