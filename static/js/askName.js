function askName() {
    let name = null;
    while (name === null || name === '') {
        name = prompt("Введи своє ім'я");

        if (name === null || name === '') {
            alert("Будь ласка, введіть своє ім'я для продовження.");
        }
    }
    alert("Вітаю, " + name + ", на моїй сторінці!");
}

window.onload = askName;
