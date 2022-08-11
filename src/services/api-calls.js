const baseUrl = 'http://acnhapi.com/v1a'

const getFossils = async () => {
    const response = await fetch(`${baseUrl}/fossils`)
    const data = await response.json()
    return data
}

const getFish = async () => {
    const response = await fetch(`${baseUrl}/fish`)
    const data = await response.json()
    return data
}

export { getFish, getFossils }
