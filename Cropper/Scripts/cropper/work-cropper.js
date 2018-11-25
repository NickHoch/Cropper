$(function () {
    $('#imageContainerPlus').on('click', function () {
        document.getElementById("img-file").click();       
    });

    $('#img-file').on('change', function () {
        var files = document.getElementById("img-file").files;
        var divForImage = document.getElementById("listUploadImage");
        if (files.length === 0) {
            let para = document.createElement('p');
            para.textContent = 'No files currently selected for upload';
            divForImage.appendChild(para);
            //$('#listUploadImage').appendChild(para);
        } else {
            divForImage.appendChild(document.createElement('ul'));
            //divForImage.className = 'without-symbol';
            //divForImage.className = 'listUploadImage';
            for (var i = 0; i < files.length; i++) {
                var listItem = document.createElement('li');
                let para = document.createElement('p');
                if (validFileType(files[i])) {
                    para.textContent = 'File name ' + files[i].name + ', file size ' + returnFileSize(files[i].size) + '.';
                    var image = document.createElement('img');
                    image.src = window.URL.createObjectURL(files[i]);

                    listItem.appendChild(image);
                    listItem.appendChild(para);

                } else {
                    para.textContent = 'File name ' + files[i].name + ': Not a valid file type. Update your selection.';
                    listItem.appendChild(para);
                }
                divForImage.appendChild(listItem);
            }
        }
    });

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number > 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number > 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    var fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ];

    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
});