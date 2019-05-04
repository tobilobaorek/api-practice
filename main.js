function getText() {
  fetch('sample.txt')
    .then(res => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getUsers() {
  fetch('users.json')
    .then(res => res.json())
    .then((data) => {
      let output = '<h2> Users </h2>';
      data.map((user) => {
        output += `
            <ul class="list-group">

            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>

            </ul>
            `;
      });
      document.getElementById('output').innerHTML = output;
    });
}


function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      let output = '<h2> Posts </h2>';
      data.map((post) => {
        output += `
          <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>

          </div>
            `;
      });
      document.getElementById('output').innerHTML = output;
    });
}

function addPost(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },

    body: JSON.stringify({ title, body }),
  })
    //  Stringify response
    .then((res) => {
      res.json();
    })
    // Console the response
    .then((data) => {
      console.log(data);
      alert(data.statusText);
    })
    //  Return Error
    .catch((err) => {
      alert(err);
    });
}


document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
const form = document.getElementById('form');
form.addEventListener('submit', addPost);
/**
     * Client Side
     *1.Accept is like :
     *  Here is my request, I would like (to Accept) this response format
     *
     *2.Content-Type is like:
     *  Here is my request or response(or response) and this Content-Type is the format of
     *  the content I am sending in my request(or response)
     *
     *
     *  Example:
     *   headers: {
     *     Accept: 'application/json',
     *     'content-type': 'application/json',
     *  },
     *
     *  Server Side
     *1.Access-Control is like:
     *  Here is the content of the server, it is only accecible by
     *  requests from certain URLS (origins).
     *  origin is the URL name example wwww.facebook.com
     *
     *  Possible values are
     *  Access-Control-Allow-Origin: *        // Accepts requests from all URLS(browsers)
     *  Access-Control-Allow-Origin: <origin> // Accepts requests from specific URLall URLS(browsers). Access-Control-Allow-Origin: https://facebook.com
     *  Access-Control-Allow-Origin: null     // Accepts requests from no-one.
     *
     *  default
     *  A sites content is only accessible from same URL (origin).
     *  Different-origins: "wwww.facebook.com" and "www.github.com"
     *  Same origns: "wwww.facebook.com" and "www.facebook.com  "
     *
     *
     *  Example:
     *   headers: {
     *     'Access-Control-Allow-Origin': '*',
     *  },
     */
