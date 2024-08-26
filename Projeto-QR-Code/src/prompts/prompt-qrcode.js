import chalk from "chalk"

const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow("Digite o link para gerar o QR Code"),
        required: true
    },
    {
        name: 'type',
        description: chalk.yellow("Escolha entre o tipo (1 - NORMAL ou 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default promptQRCode