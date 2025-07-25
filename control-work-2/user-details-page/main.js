
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
userWebSiteA.innerText=`User Website:${user.website}`;

let userCompany=user.company;
let userCompanyDiv=document.createElement('div');
userCompanyDiv.innerText='Company:';
userCompanyDiv.className='user-company-div';
for(let item in userCompany){
    let itemP=document.createElement('p');
    itemP.innerText=`${item}:${userCompany[item]}`;
  userCompanyDiv.appendChild(itemP);
}
let buttonsDiv=document.createElement('div');
buttonsDiv.className='buttons-div';

let postBtn=document.createElement('button');
postBtn.innerText='post of current user'
buttonsDiv.appendChild(postBtn);

userDiv.append(userIdH2,userNameP,userUsrNamP,userEmailP, addressDiv,userPhoneH3,userWebSiteA,userCompanyDiv,buttonsDiv);
userSection.appendChild(userDiv);

postBtn.addEventListener('click',(ev)=>{

    let currentUserPostsDiv=document.createElement('div');
    currentUserPostsDiv.className='user-posts-div';
    let postsH2=document.createElement('h2');
    postsH2.innerText=' User posts:'
    userSection.appendChild(postsH2);

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>{
            for(let post of posts){
                if(user.id===post.userId){
                    let postDiv=document.createElement('div');
                    postDiv.className='user-post-div';

                    let postTitleH3=document.createElement('h3');
                    postTitleH3.innerText=`Title:${post.title}`;
                    let postDetailsBtn=document.createElement('button');
                    postDetailsBtn.innerHTML=`<a href="../post-details-page/post-details.html">Post Details</a>`;
                    postDiv.append(postTitleH3,postDetailsBtn);
                    currentUserPostsDiv.appendChild(postDiv);
                }
            }
            userSection.appendChild(currentUserPostsDiv);

        })

    let hidePostsBtn=document.createElement('button');
            hidePostsBtn.innerText='Hide Posts';
            buttonsDiv.appendChild(hidePostsBtn);
})

let userSectionChilds=Array.from(userSection.children);


