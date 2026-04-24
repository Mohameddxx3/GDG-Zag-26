const myObject = JSON.parse(`[
    {
        "userId": 10,
        "title": "Article Title Number 1",
        "description": "Article Description Number 1"
    },
    {
        "userId": 5,
        "title": "Article Title Number 2",
        "description": "Article Description Number 2"
    },
    {
        "userId": 5,
        "title": "Article Title Number 3",
        "description": "Article Description Number 3"
    },
    {
        "userId": 5,
        "title": "Article Title Number 4",
        "description": "Article Description Number 4"
    },
    {
        "userId": 5,
        "title": "Article Title Number 5",
        "description": "Article Description Number 5"
    },
    {
        "userId": 5,
        "title": "Article Title Number 6",
        "description": "Article Description Number 6"
    },
    {
        "userId": 25,
        "title": "Article Title Number 7",
        "description": "Article Description Number 7"
    },
    {
        "userId": 25,
        "title": "Article Title Number 8",
        "description": "Article Description Number 8"
    },
    {
        "userId": 15,
        "title": "Article Title Number 9",
        "description": "Article Description Number 9"
    },
    {
        "userId": 15,
        "title": "Article Title Number 10",
        "description": "Article Description Number 10"
    }
]`);

const mypromise = new Promise( function( resolve, reject ){
    if(myObject){
        resolve(myObject);
    }else{
        reject(Error("no"));
    }
})
mypromise.then( (resolvevalue) => {
    for(let i = 0 ; i<5 ; i++){
        document.body.innerHTML += `
        <div>
            <h3>${resolvevalue[i].title}</h3>
            <p>${resolvevalue[i].description}</p>
        </div>
        `;
    }
}).catch(err => console.log(err));


