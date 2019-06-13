
$(document).ready(function () {
    
    $('#imageBoard').on('click',function() {
        $('#formImageButton').trigger('click');
        $('#formImageButton').change(function(){
            uploadImage();
        });
    });
});

function openBoard(val) {
	window.location.href = "/board/open/" + val.id;
}

function uploadImage(){
    let form = document.getElementById('formImage');
    let formSend=new FormData(form);
    let id = document.getElementById('content').getAttribute('data-note');
    $.ajax({
        url: '/board/upload/'+id,
        type:"post",
        data:formSend,
        processData:false,
        contentType:false,
        cache:false,
        async:false,
        success: function(data){
            console.log('sc :', data)
        },
        error: function(data){
            console.log('er :', data)
        }
    });
}