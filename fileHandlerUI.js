window.fileHandlerUI = (function(){
var hasDrag = false;
var fileHandler = null;
function setFileHandler(fileHandlerCallback){
  fileHandler = fileHandlerCallback;
}
function handleFiles(files) {
  if(typeof fileHandler==='function') {
    try {
      fileHandler(files);
    }catch(error){
      console.error("Error in file handler: ",error);
    }
  }

}

function setDropZoneStatus(hidden, dragOver){
  var dropZoneCon = document.getElementById("dropZoneCon");
  var dropZoneBody = document.getElementById("dropZoneBody");

  dropZoneCon.style.display = hidden ? "none" : "block";

  dropZoneBody.style.color = dragOver ? "#111" : "#444";
  dropZoneBody.style.borderColor = dragOver ? "#111" : "#aaa";
}
function onDragOver(e){
  e.preventDefault();
  console.log("onDragOver")
  if(!hasDrag){
    hasDrag = true;
    console.log("onDragOver2")
    setDropZoneStatus(false, true);
  }
}
function onDragEnd(e){
  e.preventDefault();
  hasDrag = false;
  console.log("onDragEnd")
  setDropZoneStatus(false, false);
}
function onDrop(e){
  e.preventDefault();
  setDropZoneStatus(false, false);
  var i=0;
  var filesArray = [];
  if (e.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (i = 0; i < e.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (e.dataTransfer.items[i].kind === 'file') {
        filesArray.push(e.dataTransfer.items[i].getAsFile());
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (i = 0; i < e.dataTransfer.files.length; i++) {
      filesArray.push(e.dataTransfer.files[i]);
    }
  }
  if(filesArray.length) {
    handleFiles(filesArray);
  }
}
function onInputChangeFiles(e){
  var fileList = this.files;
  var filesArray = [], i = 0;
  if(!fileList||!fileList.length){
    return;
  }
  for(i=0;i<fileList.length;i++){
    filesArray[i] = fileList[i];
  }
  handleFiles(filesArray);
}
function setupDropZone() {
  var dropZoneCon = document.getElementById("dropZoneCon");
  dropZoneCon.addEventListener("dragover", onDragOver, false);
  dropZoneCon.addEventListener("dragexit", onDragEnd, false);
  dropZoneCon.addEventListener("dragend", onDragEnd, false);
  dropZoneCon.addEventListener("drop", onDrop, false);
  document.getElementById("hiddenFileInput").addEventListener("change", onInputChangeFiles, false);

  dropZoneCon.addEventListener("click", function(e){
    console.log("click");
    document.getElementById("hiddenFileInput").click();
  }, false);

}
function initUI() {
  setupDropZone();
  setDropZoneStatus(false, false);


}
initUI();
return {
  setDropZoneStatus: setDropZoneStatus,
  setFileHandler: setFileHandler,
}
})();