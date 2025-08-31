async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');

        users.forEach(element => {
            const userElement = document.createElement('li');
            userElement.textContent = element.name;
            userList.appendChild(userElement);
        });

        dataContainer.appendChild(userList);
    }
    catch{
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
};

document.addEventListener('DOMContentLoaded',fetchUserData);