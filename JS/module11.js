// <https://jsonplaceholder.typicode.com/users>
const button = document.querySelector('[type="button"]');
const userList = document.querySelector('.user-list')




const fetchUsers = () => {
return  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}

const createMarkup = (users) => {
        const template = users.map(user => {
            return `<li>
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
        }).join(' ');

        userList.innerHTML = template;
}



button.addEventListener('click', () => {
    fetchUsers()
        .then((users) => { createMarkup(users) })
        .catch((error) => { console.log(error) })
});