async function permittedCharacters() {
    let permitted = []

    if (process.env.UPPERCASE_LETTERS === 'true') {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    }

    if (process.env.NUMBERS === 'true') {
        permitted.push(... "0123456789")
    }

    if (process.env.SPECIAL_CHARACTERES2 === 'true') {
        permitted.push(... "!@#$%¨&*()-_=+")
    }

    return permitted
}

async function handle() {
    let characters = []
    let password = ''

    const password_length = process.env.PASSWORD_LENGTH

    characters = await permittedCharacters()

    console.log(characters)

    for (let i = 0; i < password_length; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

export default handle