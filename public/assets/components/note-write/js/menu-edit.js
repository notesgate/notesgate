$(document).ready(function () {
    var counter=img;

    function makeImageSection() {

        let div1 = document.createElement('DIV');
        let div2 = document.createElement('DIV');
        let div3 = document.createElement('DIV');

        $(div1).addClass("card");
        $(div2).addClass("card-content");
        $(div3).addClass("section section-image");

        let idImage ="img"+counter;
        let img = document.createElement('IMG');
            img.setAttribute('id',idImage);
            img.setAttribute('data-note',"section-image");
            img.setAttribute('class',"note");
        let form = document.createElement('FORM');
            form.setAttribute('id',"form_img"+counter);
            form.setAttribute('class',"form_img");
            // form.setAttribute('method',"post");
            form.setAttribute('style',"display:none");
            // form.setAttribute('action',"upload");
            form.setAttribute('enctype',"multipart/form-data");
            

        let input = document.createElement('INPUT');
        let idInput ="input_img"+counter++;
            input.setAttribute('type',"file");
            input.setAttribute('name',"profile_pic");
            input.setAttribute('id',idInput);


        form.appendChild(input);
        div3.appendChild(img);
        div3.appendChild(form);
        div2.appendChild(div3);
        div1.appendChild(div2);
        
        $('#editor').append(div1);
        $('#'+idInput).trigger('click');
        $('#'+idInput).change(function() {
            applyImage(this,idImage);
        });

    }

    function applyImage(src,target){
        if (src.files && src.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
              $('#'+target).attr('src', e.target.result);
            }
            reader.readAsDataURL(src.files[0]);
          }
    }

    $('.note-btn-image').on('click', function () {
        makeImageSection();
        // make input trigger
        $('#input21').trigger('click');
    });

    $('.note-btn-section').on('click', function () {
        let html = '<div class="card">';
        html += '<div class="card-content">';
        html += '<div class="card-header">';
        html += '<div class="heading-elements">';
        html += '<ul class="list-inline mb-0">';
        html += '<li><a data-action="close"><i class="ft-x"></i></a></li>';
        html += '</ul>';
        html += '</div>';
        html += '<p class="note text-note text-content" contenteditable="true" data-note="section-text">';
        html += 'Section';
        html += '</p>';
        html += '</div>';
        html += '<div class="card-body">';
        html += '<div class="section">';
        html += '<p class="note text-note text-content" contenteditable="true" data-note="section-text">';
        html += 'ss';
        html += '</p>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $('#editor').append(html);
    });
});


