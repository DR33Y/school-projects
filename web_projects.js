function togglePythonInfo() {
    let pythonDiv = document.querySelector('#python');
    if (document.querySelector('#js').style.display == 'none'){
        if (pythonDiv.style.display == 'none') {
            pythonDiv.style.display = 'block'; 
        }
        else
            pythonDiv.style.display = 'none';
    }
}
function toggleJsInfo(){
    let jsDiv = document.querySelector('#js');
    if(document.querySelector('#python').style.display == 'none'){
        if (jsDiv.style.display == 'none') {
            jsDiv.style.display = 'block'; 
        }
        else
            jsDiv.style.display = 'none';
    }
}
function init(){
    document.querySelector('#python').style.display = 'none';
    document.querySelector('#js').style.display = 'none';
}
