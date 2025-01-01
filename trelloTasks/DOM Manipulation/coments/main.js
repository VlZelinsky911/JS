let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let addBtn = document.getElementById('btn');
let commentlist = document.getElementById('commentList');

function getComment() {
  let comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : [];
}

function saveComment(comments) {
  localStorage.setItem('comments', JSON.stringify(comments));
}

function createCommentElement(commentObj, index) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${commentObj.text}</strong> <br> <small>${commentObj.time}</small>`;

  const answerBtn = document.createElement('button');
  answerBtn.textContent = 'Answer';
  answerBtn.addEventListener('click', () => {
    const existingReplyForm = document.querySelector(`#comment-${index} .reply-form`);
    if (!existingReplyForm) {
      const replyForm = document.createElement('div');
      replyForm.className = 'reply-form';
      replyForm.innerHTML = `
        <textarea placeholder="Enter your answer"></textarea>
        <button type="button">Send</button>
      `;
      replyForm.querySelector('button').addEventListener('click', () => {
        const replyTextarea = replyForm.querySelector('textarea');
        const reply = replyTextarea.value.trim();
        if (reply) {
          const comments = getComment();
          comments[index].replies = comments[index].replies || [];
          comments[index].replies.push({
            text: reply,
            time: new Date().toLocaleString()
          });
          saveComment(comments);
          updateContactList();
        }
      });
      li.appendChild(replyForm);
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => removeComment(index));

  li.appendChild(removeBtn);
  li.appendChild(answerBtn);

  if (commentObj.replies) {
    const nestedList = document.createElement('ul');
    nestedList.className = 'nested-comments';
    commentObj.replies.forEach((reply, replyIndex) => {
      const replyLi = document.createElement('li');
      replyLi.innerHTML = `<strong>${reply.text}</strong> <br> <small>${reply.time}</small>`;

      const nestedRemoveBtn = document.createElement('button');
      nestedRemoveBtn.textContent = 'Remove';
      nestedRemoveBtn.addEventListener('click', () => removeReply(index, replyIndex));

      replyLi.appendChild(nestedRemoveBtn);
      nestedList.appendChild(replyLi);
    });
    li.appendChild(nestedList);
  }

  return li;
}

function updateContactList() {
  const comments = getComment();
  commentlist.textContent = '';

  comments.forEach((commentObj, index) => {
    const li = createCommentElement(commentObj, index);
    commentlist.appendChild(li);
  });
}

function removeComment(index) {
  const comments = getComment();
  comments.splice(index, 1);
  saveComment(comments);
  updateContactList();
}

function removeReply(commentIndex, replyIndex) {
  const comments = getComment();
  comments[commentIndex].replies.splice(replyIndex, 1);
  saveComment(comments);
  updateContactList();
}

addBtn.addEventListener('click', () => {
  const commentText = textarea.value.trim();
  if (commentText) {
    const comments = getComment();
    const commentObj = {
      text: commentText,
      time: new Date().toLocaleString(),
      replies: []
    };
    comments.push(commentObj);
    saveComment(comments);
    updateContactList();
    textarea.value = '';
  }
});

document.addEventListener('DOMContentLoaded', updateContactList);
