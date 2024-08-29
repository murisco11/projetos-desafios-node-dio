import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service"
import { StatusCode } from "../utils/status-code"
import { FilterPodCastModel } from "../models/filter-podcast-model"
import { PodcastModel } from "../models/podcast-model"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodCastModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, { "Content-Type": "application/json" })
    res.end(JSON.stringify(content.body))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodCastModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { "Content-Type": "application/json" })
    res.end(JSON.stringify(content.body))
}