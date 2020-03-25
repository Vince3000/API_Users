let myheaders=new Headers();
let fetchOptions = {
    method: 'GET',
    headers: myheaders,
    mode:'cors',
    cache:'default'
};
var i=0;
var result = document.getElementById("users");
var item ="";

//.addEventListener('click',fetchUsers);

function fetchUsers (){
    //On créer la ligne d'entête
    result.innerHTML=`<thead><tr><th>id</th><th>NOM</th><th>USERNAME</th><th>Email</th><th>ADDRESS</th><th>PHONE</th></tr></thead>`;
    //On se plug à l'API
        fetch("https://jsonplaceholder.typicode.com/users",fetchOptions)
        .then((response) => 
        {return response.json()})
        .then((post) => {
            post.forEach(element => {
                console.log(post);
                //Et on ajoute au HTML 
                result.innerHTML+=`<tr><td> ${element.id}</td>
                                        <td> ${element.name}</td>
                                        <td> ${element.username}</td>
                                        <td> ${element.email}</td>
                                        <td><br>${element.address.street}</br><br>${element.address.suite}</br><br>${element.address.city}</br><br>${element.address.zipcode}</br></td>
                                        <td>${element.phone}</td>
                                    </tr>`;
            });
        })
        .catch((error)=>{
            console.log(error);
        });
};
fetchUsers();
