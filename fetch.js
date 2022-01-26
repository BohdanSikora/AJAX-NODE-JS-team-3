console.log('Hello World')

let button = document.querySelector('#my-btn');
button.style.display = 'block'

button.onclick = function(){
    getInfo()
}

async function getInfo(){
    console.log('start of request')
    let request = await fetch('https://jsonplaceholder.typicode.com/users')

    console.log(request)
    let usersInfo = await request.json()

    let info = document.querySelector('.info-containers')
    let key
    for (key in usersInfo) {
        info.innerHTML += `
            <h1>User Id:${' ' + usersInfo[key].id}</h1>
            <p>Name:${' ' + usersInfo[key].first_name}</p>
            <p>Lastname:${' ' + usersInfo[key].last_name}</p>
            <p>Email:${' ' + usersInfo[key].email}</p>
            <img src='${usersInfo[key].photo}'>
        `
        console.log(usersInfo[key])
    }
    console.log('end of request')
}

