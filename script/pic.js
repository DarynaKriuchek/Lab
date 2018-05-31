"use strict"
window.onload = function() {
    var images = document.getElementById('pic');
    document.getElementById('submit').onclick = function () {
        if (images.files && images.files.length == 0 || !images.value)
        {alert('Оберіть фото');}
        else {
            alert('Дякую за участь у конкурсі');
            location = 'index.html';
        }
    };
    images.onchange = function() {
        var ul = document.getElementsByTagName('ol')[0];
        ul.innerHTML = '';
        if (images.files) {
            for (var i = 0; i < images.files.length; i++) {
                var li = document.createElement('li');
                li.display = 'block';
                var img = new Image();
                img.src = URL.createObjectURL(images.files[i]);
                img.style.width = 200 + 'px';
                img.style.height = 200 + 'px';
                //img.width = 300;
                li.appendChild(img);
                ul.appendChild(li);
            }
        }
        else {
            var li = document.createElement('li');
            li.display = 'block';
            var img = new Image();
            img.src = images.value;
            img.style.width = 200 + 'px';
            img.style.height = 200 + 'px';
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
    };