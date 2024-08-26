import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import chalk from "chalk"
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function main() {
    prompt.get(mainPrompt, async (err, result) =>  {
        if (err) {
            console.log("Error on application")
            return
        }
        if (result.select == 1) {
            console.log(chalk.green('Escolheu o QR Code'))
            createQRCode()
        }
        if (result.select == 2) {
            console.log(chalk.green('Escolheu o PASSWORD'))
            createPassword()
        }
    })

    prompt.start()
}

main()