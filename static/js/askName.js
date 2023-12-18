function askName() {
    let name;
    do {
        name = prompt('Введіть своє ім\'я');
        if (name === null || name === '') {
            alert("Будь ласка, введіть своє ім'я для продовження.");
        }
    } while (name === null || name === '');

    alert("Вітаю, " + name + ", на моїй сторінці!");
}

window.onload = askName;
