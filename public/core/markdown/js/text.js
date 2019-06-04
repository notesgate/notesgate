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
function textStyle(style) {
    var input= document.getElementsByClassName('text-content')
    for(let a=0;a<input.length;a++){
        let v=getSelection().anchorNode;
        if(input[a].innerHTML.includes(v.textContent)){
            let ch=input[a].children;
            if(ch.length>1){
                for(let b=0;b<ch.length;b++){
                    if(ch[b].innerText===v.textContent && ch[b].innerText.length===v.textContent.length){
                        $(ch[b]).css('text-align',style);
                    }
                }                   
            }else{
                $(input[a]).css('text-align',style);
            }
        }
    }
}

$(function() {
    $('#changeColor').click( function() {
        var mytext = selectHTML();
        $('span').css({"color":"red"});
    });
});