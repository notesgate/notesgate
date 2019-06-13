$(document).ready(function () {
    $("#board-add").on('click',function (params) {
        let data={
            board:document.getElementById('board-input').value,
            id:document.getElementById('note').getAttribute('data-id')
        }
		$.post('/board/add', data, out => console.log(out));

    });
});