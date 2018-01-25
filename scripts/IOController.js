function buttonPress(button_id) {
    switch (button_id) {
        case "studyButton":
            readBooks();
            break;
        case "exploreButton":
            console.log("ja");
            exploreRooms();
            break;
        default:
            alert("How did you even?");
            break;
    }
}