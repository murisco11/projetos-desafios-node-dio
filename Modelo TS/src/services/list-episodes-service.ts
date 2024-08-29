import { FilterPodCastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repository/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast()

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK
    }
    else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data

    return responseFormat}
