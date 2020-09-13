(function(){
    'use strict';
    if (!window.File){
      window.alert("このブラウザではFile APIが使えません");
    }
    
    var fileListText = document.getElementById('fileList'); 
    var myTextarea = document.getElementById('myTextarea');
    
    var messageH2 = document.getElementById('messageH2');
     
    function fileChange(ev){
      messageH2.innerHTML = 'ファイルリストが作成されました。<br>クリップボードの中身を生成されたファイルリストに書き換えました。';
      var target = ev.target;
      var files = target.files;
      //繰り返し処理をする前にfileListの中身を空にする
      var fileList = '';
    
      for(var i =0,len = files.length-1; i <= len ;i++){
        fileList = fileList + myTextarea.value + '/' + files[i].name + '<br>';
      }
      fileListText.innerHTML = fileList;
      document.getSelection().selectAllChildren(fileListText);
      document.execCommand("copy");
    }
    var inputFile = document.getElementById('file');
    inputFile.addEventListener('change', fileChange, false);
    })();