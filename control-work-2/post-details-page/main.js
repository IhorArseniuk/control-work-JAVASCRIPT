let postsSection=document.querySelector('.posts-section')

let post=JSON.parse(localStorage.getItem('postDetails'));

let postDiv=document.createElement('div');
postDiv.className='post-div';

let userIdPost=document.createElement('h2');
userIdPost.innerText=`User Id:${post.userId}`;

let postId=document.createElement('h3');
postId.innerText=`Post Id:${post.id}`;

let postText=document.createElement('div');

let postTitle=document.createElement('p');
postTitle.innerText=`Title:${post.title}`;

let postBody=document.createElement('p');
postBody.innerText=`${post.body}`;

postText.append(postTitle,postBody);

postDiv.append(userIdPost,postId,postText);

postsSection.appendChild(postDiv);

let commentsDiv=document.createElement('div');
commentsDiv.className='comments-div';

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response=>response.json())
    .then(comments=>{
        for(let comment of comments){
                let commentDiv=document.createElement('div');

                let postId=document.createElement('h2');
                postId.innerText=`Post Id:${post.id}`;

                let commentId=document.createElement('h2');
                commentId.innerText=`Comment Id:${comment.id}`;

                let commentName=document.createElement('p');
                 commentName.innerText=`Comment Name:${comment.name}`;

                 let commentEmail=document.createElement('p');
                 commentEmail.innerText=`Email:${comment.email}`;

                 let commentBody=document.createElement('p');
                  commentBody.innerText=`Comment:${comment.body}`;

                  commentDiv.append(postId,commentId,commentName,commentEmail,commentBody);

                  commentsDiv.appendChild(commentDiv);



        }
    })
postsSection.appendChild(commentsDiv);
