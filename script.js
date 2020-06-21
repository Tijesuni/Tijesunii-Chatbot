var know = {
    "hello":"Hi",
    "Hello":"Hi",
    "how are you?":"I'm fine, thank you and you",
    "How are you?":"I'm fine, thank you and you",
    "what are you up to":"nothing much and you?",
    "What are you up to":"nothing much and you?",
    "nice meeting you":"and you to",
    "Nice meeting you":"and you to"
};

function talk(){
    var user = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = "";
    document.getElementById("chatlog").innerHTML += user + "<br>";
    if( user in know){
        document.getElementById("chatlog").innerHTML += know[user] + "<br>"; 
    }else{
        document.getElementById("chatlog").innerHTML += "Pardon, can you come again <br>";
    }


}