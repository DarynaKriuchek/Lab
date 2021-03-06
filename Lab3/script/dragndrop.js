if (window.FileReader) {
    var drop;
    addEventHandler(window, 'load', function() {
        var status = document.getElementById('status');
        drop = document.getElementById('drop');
        var list = document.getElementById('list');

        function cancel(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }

        addEventHandler(drop, 'dragover', cancel);
        addEventHandler(drop, 'dragenter', cancel);

        addEventHandler(drop, 'drop', function(e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }

            var dt = e.dataTransfer;
            var files = dt.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();


                reader.readAsDataURL(file);
                addEventHandler(reader, 'loadend', function(e, file) {
                    var bin = this.result;
                    var newFile = document.createElement('div');
                    newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
                    list.appendChild(newFile);
                    var fileNumber = list.getElementsByTagName('div').length;
                    status.innerHTML = fileNumber < files.length ?
                        'Loaded 100% of file ' + fileNumber + ' of ' + files.length + '...' :
                        'Done loading. processed ' + fileNumber + ' files.';
                    var img = document.createElement("img");
                    img.file = file;
                    img.src = bin;
                    list.appendChild(img);
                }.bindToEventHandler(file));
            }
            return false;
        });
        Function.prototype.bindToEventHandler = function bindToEventHandler() {
            var handler = this;
            var boundParameters = Array.prototype.slice.call(arguments);
            console.log(boundParameters);
            return function(e) {
                e = e || window.event;
                boundParameters.unshift(e);
                handler.apply(this, boundParameters);
            }
        };
    });
} else {
    document.getElementById('status').innerHTML = 'Твій браузер не підтримує дану технологію';
}

function addEventHandler(obj, evt, handler) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, handler, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + evt, handler);
    } else {
        obj['on' + evt] = handler;
    }
}