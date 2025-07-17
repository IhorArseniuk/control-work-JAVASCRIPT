
let testForm=document.forms.testForm;

let inputAdd=testForm.nameValuePair;

let addButton=document.getElementsByClassName('form-buttons')[0];

let nameValueList=document.getElementById('list');

let sortByNameBtn=document.getElementsByClassName('form-buttons')[1];

let sortByValueBtn=document.getElementsByClassName('form-buttons')[2];

let deleteBtn=document.getElementsByClassName('form-buttons')[3];

testForm.addEventListener('submit',(ev)=>{
    ev.preventDefault();
})

let pairs=[];

addButton.addEventListener('click',()=>{
    let inputValue=inputAdd.value.trim();
if(inputValue.includes('=') && inputValue.match(/^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/)){

    let inputValSplit=inputValue.split('=');
    let pairObj={name:inputValSplit[0],value:inputValSplit[1]}
    pairs.push(pairObj);

     let li=document.createElement('li');
     li.innerText=pairObj.name+'='+pairObj.value;
     nameValueList.appendChild(li);
     inputAdd.value=''
 }else{
    alert('Please enter valid input without special symbols');
}
})

function sortPairsByOption(option){
    nameValueList.innerText='';
    pairs.sort((a,b)=>{
        if(a[option]>b[option]){
            return 1;
        }
        if(a[option]<b[option]){
            return-1;
        }
        if(a[option]===b[option]){
            return 0;
        }
    })
        .forEach(pair=>{
            let liPair=document.createElement('li');
            liPair.innerText=pair.name+'='+pair.value;
            nameValueList.appendChild(liPair);
        })
    console.log(pairs);
}


sortByNameBtn.addEventListener('click',()=>{
sortPairsByOption('name');
})

sortByValueBtn.addEventListener('click',()=>{
    sortPairsByOption('value');
})

nameValueList.addEventListener('click',(ev)=>{
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('select');
        let targetSplit=ev.target.textContent.split('=');
        for(let pair of pairs){
            if(pair.name===targetSplit[0]&&pair.value===targetSplit[1]){
                pair.status='delete'
            }
        }
    }
})

deleteBtn.addEventListener('click',()=>{
    let liPairs=document.querySelectorAll('.select');
    liPairs.forEach(li=>li.remove())
    pairs.forEach((pair,index)=>{if(pair.status==='delete')pairs.splice(index,1)})
})
