console.log('Hello World')

let button = document.querySelector('#my-btn');
button.style.display = 'block';

async function getInfo(){
    console.log('start of request')
    let request = await fetch('http://127.0.0.1:3300/users');

    // console.log(request)
    let usersInfo = await respo.json()

    let info = document.querySelector('.info-containers')
    let key
    for (key of usersInfo) {
        info.innerHTML += `
            <h1>User Id:${` ${key.id}`}</h1>
            <p>Name:${` ${key.first_name}`}</p>
            <p>Lastname:${` ${key.last_name}`}</p>
            <p>Email:${` ${key.email}`}</p>
            <img src='${key.photo}'>

        `;

    }
    console.log('end of request')
}

button.addEventListener('click', getInfo)
