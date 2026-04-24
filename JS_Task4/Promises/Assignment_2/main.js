fetch("data.json")
.then( res => res.json() )
.then( data=>{
    for(let i = 0 ; i<5 ; i++){
        document.body.innerHTML += `
        <div>
            <h3>${data[i].title}</h3>
            <p>${data[i].description}</p>
        </div>
        `;
    }
} )
.catch(err => console.log(err));