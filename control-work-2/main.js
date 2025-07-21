fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

    for(let user of users) {

        let userDiv=document.createElement('div');
        userDiv.className='user-div';
        userDiv.innerHTML=`<h2>${user.id}</h2>  <p>${user.name}</p> <p>${user.username}</p>`;

        let buttonDetails=document.createElement('button');
        buttonDetails.innerHTML=`<a href="html/user-details.html">Full info</a>`;

        userDiv.appendChild(buttonDetails);

        let usersDiv=document.getElementsByClassName('div-users')[0];
        usersDiv.appendChild(userDiv);
    }
})
