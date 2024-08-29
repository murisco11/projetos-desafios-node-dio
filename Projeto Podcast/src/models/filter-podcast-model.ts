import { PodcastModel } from "./podcast-model";

export interface FilterPodCastModel {
    statusCode: number,
    body: PodcastModel[]
}