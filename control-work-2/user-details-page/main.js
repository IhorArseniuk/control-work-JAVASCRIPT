
let user=JSON.parse(localStorage.getItem('userInfo'));
let userSection=document.querySelector('.user-section');

let userDiv=document.createElement('div');
userDiv.className='user-info-div';

let userIdH2=document.createElement('h2');
userIdH2.innerText=`Id-${user.id}`;

let userNameP=document.createElement('p');
userNameP.innerText=`Name:${user.name}`;

let userUsrNamP=document.createElement('p');
userUsrNamP.innerText=`Username:${user.username}`;

let userEmailP=document.createElement('p');
userEmailP.innerText=`Email:${user.email}`;

let addressDiv=document.createElement('div');
addressDiv.className='address-div';
addressDiv.innerText='Address:';

let address=user.address;

for( let item in address ){
    if(item!=='geo'){
    let itemP=document.createElement('p');
    itemP.innerText=`${item}: ${address[item]} `;
    addressDiv.appendChild(itemP);}
    else{
        let geoDiv=document.createElement('div');
        geoDiv.innerText='Geolocation:';
        geoDiv.className='AddressGeo-div';
       let objectAddress=address[item];
        for( let i in objectAddress){
            let iP=document.createElement('p');
            iP.innerText=`${i}:${objectAddress[i]}`;
            geoDiv.appendChild(iP);
        }
        addressDiv.appendChild(geoDiv);
    }
}

let userPhoneH3=document.createElement('h3');
userPhoneH3.innerText=`Phone:${user.phone}`;

let userWebSiteA=document.createElement('a');
userWebSiteA.href=`${user.website}`;

let userCompany=user.company;
let userCompanyDiv=document.createElement('div');
userCompanyDiv.innerText='Company:';
userCompanyDiv.className='user-company-div';
for(let item in userCompany){
    let itemP=document.createElement('p');
    itemP.innerText=`${item}:${userCompany[item]}`;
  userCompanyDiv.appendChild(itemP);
}

let postBtn=document.createElement('button');
postBtn.innerText='post of current user'

userDiv.append(userIdH2,userNameP,userUsrNamP,userEmailP, addressDiv,userPhoneH3,userWebSiteA,userCompanyDiv,postBtn);
userSection.appendChild(userDiv);
