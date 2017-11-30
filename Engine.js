


function buttonPress(button_id) {
    switch(button_id){
        case "studyButton":
            document.title = "A Cozy Room";
            alert("you pressed study");
            break;
        default:
            alert("How did you even?");
    }
}