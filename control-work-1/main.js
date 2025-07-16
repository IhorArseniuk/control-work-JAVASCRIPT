let testForm=document.forms.testForm;

let inputAdd=document.forms.testForm.nameValue;

let addButton=document.getElementsByClassName('form-buttons')[0];

let nameValueList=document.getElementById('list');

let sortByNameBtn=document.getElementsByClassName('form-buttons')[1];

let sortByValueBtn=document.getElementsByClassName('form-buttons')[2];

let deleteBtn=document.getElementsByClassName('form-buttons')[3];

testForm.onsubmit=(ev)=>{
    ev.preventDefault();
}

