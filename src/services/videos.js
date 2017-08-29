import config from '_config'
import axios from 'axios'

export default new class SearchService {

    getChannelList (params) {
        return axios({
            url: '/search',
            method: 'get',
            baseURL: config.API_URL,
            params: {
                key: config.API_KEY,
                channelId: 'UC8GoAzCU5Gpiys30veuAtmg',
                type: 'video',
                part: 'snippet',
                order: 'relevance',
                maxResults: params.quantity,
                pageToken: params.nextPage
            }
        })
    }

    getVideos (ids) {
        let idsText = ''
        ids.forEach(item => {
            idsText += `${item},`
        })

        return axios({
            url: '/videos',
            method: 'get',
            baseURL: config.API_URL,
            params: {
                key: config.API_KEY,
                id: idsText,
                part: 'snippet, contentDetails, statistics'
            }
        }).then(response => response.data.items)
    }
}