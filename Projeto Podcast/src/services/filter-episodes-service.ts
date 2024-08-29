import { promises } from "dns"
import { FilterPodCastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repository/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodCastModel> => {
    let responseFormat: FilterPodCastModel = {
       statusCode: 0,
       body: [] 
    }

    const queryString = podcastName ?.split("?p=")[1] ?? ""

    const data = await repositoryPodcast(queryString)

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK
    }
    else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data

    return responseFormat
}