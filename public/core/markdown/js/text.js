var pos="";
function selectHTML() {
    console.log('object :', id);
    try {
        console.log('try');
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            console.log('c.htmlText :', c.htmlText);
            return c.htmlText;
        }
    
        var nNd = document.createElement("span");
        var w = getSelection().getRangeAt(0);
        console.log('w :', w);
        w.surroundContents(nNd);
        console.log('w :', w);
        console.log('nNd.innerHtml :', nNd.innerHtml);
        return nNd.innerHTML;
    } catch (e) {
        console.log('catch');

        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}
function color(color) {
    try {
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var nNd = document.createElement("span");
        nNd.setAttribute('class',color);
        var w = getSelection().getRangeAt(0);
        w.surroundContents(nNd);
        return nNd.innerHTML;
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}
function headerHTML(headerSize) {
    try {
        console.log('try');
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
        var nNd = document.createElement('span');
        nNd.setAttribute('class',headerSize);
        var w = getSelection().getRangeAt(0);
        w.surroundContents(nNd);
        return nNd.innerHTML;
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

function fontStyle(style) {
    try {
        console.log('try');
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
        var nNd = document.createElement('div');
        nNd.setAttribute('class',style);
        var w = getSelection().getRangeAt(0);
        w.surroundContents(nNd);
        console.log('object :', nNd);
        return nNd.innerHTML;
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

function inOutdent(flag) {
    if(flag==="indent"){
        pos.target.innerHTML="&emsp;"+pos.target.innerHTML;
    }else{
        pos.target.innerHTML=String(pos.target.innerHTML).replace('\u2003','');
    }
}
function textStyle(style) {
    // var input= document.getElementsByClassName('text-content')
    if($(pos.target).children('br').length){
       $(pos.target).css('text-align',style);
        return;
    }
    let ch = pos.target.children;

    // console.log('ch :', ch);
    if(ch.length===0){
       $(pos.target).css('text-align',style);
    }else{
        try {
            console.log('try');
            if (window.ActiveXObject) {
                var c = document.selection.createRange();
                return c.htmlText;
            }
            var nNd = document.createElement('div');
            $(nNd).css('text-align',style);
            var w = getSelection().anchorNode.textContent;
            w.surroundContents(nNd);
            return nNd.innerHTML;
        } catch (e) {
            if (window.ActiveXObject) {
                return document.selection.createRange();
            } else {
                return getSelection();
            }
        }
    }
}

$(function() {
    $('.note').click(function(e){
        pos=e;
    });

    $('#changeColor').click( function() {
        var mytext = selectHTML();
        $('span').css({"color":"red"});
    });
});