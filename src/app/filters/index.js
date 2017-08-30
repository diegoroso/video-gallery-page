import moment from 'moment'

export const date = (initDate, format) => moment(initDate).format(format)

export const views = view => {
    if (view.length > 3) {
        return `${view.slice(0, -3)}k`
    }
    return view
}

export const duration = time => {
    const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/
    let textDuration = ''

    if (reptms.test(time)) {
        const matches = reptms.exec(time)

        if (matches[1]) {
            textDuration += `${Number(matches[1])}:`
        }

        if (matches[2]) {
            if (String(matches[2]).length < 2) {
                textDuration += `0${Number(matches[2])}:`
            } else {
                textDuration += `${Number(matches[2])}:`
            }
        }

        if (matches[3]) {
            if (String(matches[3]).length < 2) {
                textDuration += `0${Number(matches[3])}`
            } else {
                textDuration += Number(matches[3])
            }
        }
    }

    return textDuration
}