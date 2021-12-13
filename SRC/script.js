let message;

const randomMessage = () => {
    const messages = [
        "I just want you for my own",
        "More than you could ever know",
        "Make my wish come true",
        "All I want for Christmas is you",
        "You, baby"
    ];
    message = messages[Math.floor(Math.random()*messages.length)];
    let newElement = document.createElement("div")
    newElement.innerHTML = message;
    document.body.appendChild(newElement);
}

document.getElementById("run-message").addEventListener("click", randomMessage);