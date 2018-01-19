function buttonPress(button_id) {
    switch (button_id) {
        case "studyButton":
            readBook();
            break;
        case "studyMultiplierButton":
            betterBook()
            break;
        default:
            alert("How did you even?");
            break;
    }
}