import React from 'react'

export function useLocalStorage(key, valorIncial) {
    const [valor, setValor] = React.useState(() => {
        debugger
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : valorIncial
    })

    const setValue = value => {
        setValor(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [valor, setValue]
}