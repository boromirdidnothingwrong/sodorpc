import { writable } from 'svelte/store'
import {getContext, setContext } from 'svelte'

let displayData = writable()

export function setData() {
    setContext('displayData', '')
}

export function getData() {
    return getContext('displayData', '')

}
