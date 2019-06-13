var converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
console.log(html);

$(document).ready(function () {
    let init=document.getElementsByClassName('init');
    console.log('init :', init);
    for (let index = 0; index < init.length; index++) {
        init[index].previousElementSibling.innerHTML=init[index].getAttribute('data-val');
        // init[index].parentElement.appendChild(el);
    }
});