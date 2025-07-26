let userInfo=0;
localStorage.setItem('userInfo',JSON.stringify(userInfo));

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

    for(let user of users) {

        let userDiv=document.createElement('div');
        userDiv.className='user-div';
        userDiv.innerHTML=`<h2>Id:${user.id}</h2>  <p>Name:${user.name}</p> <p>Username:${user.username}</p>`;

        let buttonDetails=document.createElement('button');
        buttonDetails.innerHTML=`<a href="../user-details-page/user-details.html">Full info</a>`;

        userDiv.appendChild(buttonDetails);

        let usersDiv=document.getElementsByClassName('div-users')[0];
        usersDiv.appendChild(userDiv);

        buttonDetails.addEventListener('click',()=>{
            let userJSON=localStorage.getItem('userInfo');
            let userInf=JSON.parse(userJSON);
            userInf.id=user;
            localStorage.setItem('userInfo',JSON.stringify(user));
        })
    }
})
