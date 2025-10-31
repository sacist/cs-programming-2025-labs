const checkPassword=(password)=> {
    const errors = []

    if (password.length < 8) {
        errors.push("Длина пароля менее 8 символов")
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Отсутствуют заглавные латинские буквы")
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Отсутствуют строчные латинские буквы")
    }

    if (!/\d/.test(password)) {
        errors.push("Отсутствуют цифры")
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Отсутствуют специальные знаки")
    }

    if (errors.length === 0) {
        console.log("Пароль надёжный!")
        return true
    } else {
        console.log("Пароль недостаточно надёжен. Проблемы:")
        errors.forEach(error => console.log("- " + error))
        return false
    }
}

const userPassword = "MyPass123!"
checkPassword(userPassword)