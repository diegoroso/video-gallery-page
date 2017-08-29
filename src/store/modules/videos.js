import VideosService from '_services/videos'

export default {
    state: {
        data: []
    },

    mutations: {
        setVideos (state, data) {
            state.data = data
        }
    },

    actions: {
        getVideos ({ commit }) {
            VideosService.getChannelList().then(response => {
                VideosService.getVideos(response).then(videos => {
                    const data = videos.map(item => {
                        return {
                            id: item.id,
                            image: item.snippet.thumbnails.standard,
                            title: item.snippet.title,
                            description: item.snippet.description,
                            time: item.contentDetails.duration,
                            views: item.statistics.viewCount,
                            likes: item.statistics.likeCount
                        }
                    })
                    commit('setVideos', data)
                })
            })
        }
    }
}