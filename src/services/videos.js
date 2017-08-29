import config from '_config'
import axios from 'axios'

export default new class SearchService {

    getChannelList (nextPage = null) {
        return axios({
            url: '/search',
            method: 'get',
            baseURL: config.API_URL,
            params: {
                key: config.API_KEY,
                channelId: 'UC8GoAzCU5Gpiys30veuAtmg',
                maxResults: 20,
                type: 'video',
                part: 'snippet',
                pageToken: nextPage
            }
        }).then(response => {
            const ids = response.data.items.map(item => item.id.videoId)
            return ids
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
                maxResults: 20,
                type: 'video',
                order: 'date',
                part: 'snippet, contentDetails, statistics'
            }
        }).then(response => response.data.items)
    }
}