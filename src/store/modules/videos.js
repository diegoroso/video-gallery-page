import VideosService from '_services/videos'

export default {
    state: {
        feature: {},
        channel: [],
        data: []
    },

    mutations: {
        setFeature (state, data) {
            state.feature = data
        },
        setChannel (state, data) {
            state.channel = data
        },
        setVideo (state, video) {
            state.data.push(video)
        }
    },

    actions: {
        changeFeature ({ commit }, video) {
            commit('setFeature', video)
        },

        getVideos ({ commit }, params) {
            VideosService.getChannelList(params).then(response => {
                commit('setChannel', response.data)
                const ids = response.data.items.map(item => item.id.videoId)
                VideosService.getVideos(ids).then(videos => {
                    const data = videos.map(item => {
                        const dataParams = {
                            id: item.id,
                            image: item.snippet.thumbnails.medium,
                            title: item.snippet.title,
                            description: item.snippet.description,
                            time: item.contentDetails.duration,
                            views: item.statistics.viewCount,
                            likes: item.statistics.likeCount
                        }
                        return dataParams
                    })

                    data.forEach((video, index) => {
                        if (index === 0 && !params.nextPage) {
                            commit('setFeature', video)
                        }
                        commit('setVideo', video)
                    })
                })
            })
        }
    }
}