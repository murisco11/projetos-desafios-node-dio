// API minimal -> API para retornar coisas simples; geralmente em apenas um arquivo

import fastify from "fastify"
import cors from "@fastify/cors"

const server = fastify({ // Criando o servidor
    logger: true, // Aplicando configurações
})

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
]

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lando Norris", team: "McLaren" },
    { id: 5, name: "Fernando Alonso", team: "Aston Martin" }
]

interface DriverParams {
    id: string
}

interface TeamsParams {
    letter: string
}

server.get("/teams", async (req, res) => { // Criando uma rota
    res.type("application/json").code(200) // Colocando o tipo da resposta e o status code

    return { teams }
})

server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200)

    return { drivers }
})

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
    const id = Number(req.params.id)
    const driver = drivers.find(driver => {
        return driver.id === id
    })

    if (!driver) {
        res.type("application/json").code(404)

        return {
            error: "Driver Not Found"
        }
    } else {
        res.type("application/json").code(200)
        return driver
    }
})

server.get<{ Params: TeamsParams }>("/teams/:letter", async (req, res) => {
    const letter = req.params.letter.toUpperCase()

    const teamWithLetter = teams.filter(team => {
        return team.name[0] === letter
    })

    if (!teamWithLetter) {
        res.type("application/json").code(404)

        return {
            error: "Teams Not Found"
        }
    } else {
        res.type("application/json").code(200)
        return teamWithLetter
    }
})

const port: string | undefined = process.env.PORT

if (port) {
    server.listen({ port: parseInt(port) }, () => {
        console.log("Server init")
    })
} else {
    console.error("Port is not defined")
}