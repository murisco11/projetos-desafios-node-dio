import * as http from "http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes"
import { HttpMethods } from "./utils/http-methods"

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]

    console.log(baseUrl, queryString)

    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res)
    }

    if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res)
    }

})

const port = 9999

server.listen(port ,() => {
    console.log(`Servidor iniciado na porta ${port}`)
})