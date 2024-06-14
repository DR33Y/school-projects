function togglePythonInfo() {
    let pythonDiv = document.querySelector('#python');
    let pythonBox = document.querySelector('#box1');
    if (document.querySelector('#js').style.display == 'none' && document.querySelector('#java').style.display == 'none' && document.querySelector('#cs').style.display == 'none' && document.querySelector('#cpp').style.display == 'none'){
        if (pythonDiv.style.display == 'none') {
            pythonDiv.style.display = 'block'; 
            pythonBox.style.background = 'rgb(0, 122, 204)';
        }
        else {
            pythonDiv.style.display = 'none';
            pythonBox.style.background = 'white';
        }
    }
}
function toggleJsInfo(){
    let jsDiv = document.querySelector('#js');
    let jsBox = document.querySelector('#box2');
    if (document.querySelector('#python').style.display == 'none' && document.querySelector('#java').style.display == 'none' && document.querySelector('#cs').style.display == 'none' && document.querySelector('#cpp').style.display == 'none'){
        if (jsDiv.style.display == 'none') {
            jsDiv.style.display = 'block'; 
            jsBox.style.background = 'rgb(255, 223, 0)';
        }
        else {
            jsDiv.style.display = 'none';
            jsBox.style.background = 'white';
        }
    }
}
function toggleJavaInfo(){
    let javaDiv = document.querySelector('#java');
    let javaBox = document.querySelector('#box3');
    if (document.querySelector('#python').style.display == 'none' && document.querySelector('#js').style.display == 'none' && document.querySelector('#cs').style.display == 'none' && document.querySelector('#cpp').style.display == 'none'){
        if (javaDiv.style.display == 'none') {
            javaDiv.style.display = 'block';
            javaBox.style.background = 'rgb(176, 0, 32)';
        }
        else {
            javaDiv.style.display = 'none';
            javaBox.style.background = 'white';
        }
    }
}
function toggleCsInfo(){
    let csDiv = document.querySelector('#cs');
    let csBox = document.querySelector('#box4');
    if (document.querySelector('#python').style.display == 'none' && document.querySelector('#js').style.display == 'none' && document.querySelector('#java').style.display == 'none' && document.querySelector('#cpp').style.display == 'none'){
        if (csDiv.style.display == 'none') { 
            csDiv.style.display = 'block';
            csBox.style.background = 'rgb(128, 0, 128)';
        }
        else {
            csDiv.style.display = 'none';
            csBox.style.background = 'white';
        }
    }
}
function toggleCppInfo(){
    let cppDiv = document.querySelector('#cpp');
    let cppBox = document.querySelector('#box5');
    if (document.querySelector('#python').style.display == 'none' && document.querySelector('#js').style.display == 'none' && document.querySelector('#java').style.display == 'none' && document.querySelector('#cs').style.display == 'none'){
        if (cppDiv.style.display == 'none') {
            cppDiv.style.display = 'block';
            cppBox.style.background = 'rgb(173, 216, 230)';
        }
        else {
            cppDiv.style.display = 'none';  
            cppBox.style.background = 'white';
        }
    }
}
function init(){
    document.querySelector('#python').style.display = 'none';
    document.querySelector('#js').style.display = 'none';
    document.querySelector('#java').style.display = 'none';
    document.querySelector('#cs').style.display = 'none';
    document.querySelector('#cpp').style.display = 'none';
}
