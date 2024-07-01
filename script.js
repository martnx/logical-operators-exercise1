
let userprompt = prompt("Who's there? ");

if(userprompt == 'Admin'){
    alert('Is that you admin?');
    let passprompt = prompt("Password? ");
    if(passprompt == 'TheMaster' ){
        alert('Welcome!');
    }
    else if (passprompt == '' && passprompt == null){
        alert("Wrong password");
    }
    else {
        alert("Wrong password");
        console.log("Wrong password");
    }

}else if(userprompt == '' || userprompt == null){
    alert("I don't know you");
}
else {
    alert("I don't know you");
}