export const truncate = (str, n=95) => {
    return (str.length > n) ? str.substr(0, n-1) + ' . . .' : str
}

export const getRandomSignedNumber = (min, max) => {
    const signs = [1, -1]
    return (Math.floor(Math.random() * (max - min + 1) + min)) * signs[Math.floor(Math.random() * signs.length)]
}

export const createMarkup = (text) => { return {__html: text} }
