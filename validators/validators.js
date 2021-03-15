export const required = value => {
    if (value) return undefined
    return "Обязательное поле"
}

export const maxLength10 = (value) => {
    if (value.length > 10) return `Максимальнное количествое символов 10`
    return undefined
}
export const maxLength50 = (value) => {
    if (value.length > 50) return `Максимальнное количествое символов 50`
    return undefined
}