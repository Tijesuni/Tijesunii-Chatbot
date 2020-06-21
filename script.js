var know = {
    "hello":"Hi",
    "Hello":"Hi",
    "how are you?":"I'm fine, thank you and you",
    "How are you?":"I'm fine, thank you and you",
    "what are you up to":"nothing much and you?",
    "What are you up to":"nothing much and you?",
    "nice meeting you":"and you to",
    "Nice meeting you":"and you to",
    "Bye":"Bye, nice meeting you",
    "bye":"Bye, nice meeting you",
    "What's your name":"My name is Tijesunii",
    "what's your name":"My name is Tijesunii",
    "How old are you?":"Uhmm... I just created not quite long",
    "how old are you?":"Uhmm... I just created not quite long",
    "Where do you live?":"I live in the internet",
    "where do you live?":"I live in the internet"
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