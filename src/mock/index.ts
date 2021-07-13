import { Render } from '../types/index'

const getId = function () {
    return new Date().getTime().toString(16).slice(16)
}

export const example: Render = [{
    type: "While",
    name: 'while',
    id: getId(),
    children: [{
        type: "Function",
        name: 'demoA',
        id: getId(),
    }, {
        type: "Function",
        name: 'demoA',
        id: getId(),
    }]
},
{
    type: "Function",
    name: 'demoA',
    id: getId(),
    children: [{
        type: "Function",
        name: 'demoA',
        id: getId(),
    }, {
        type: "Function",
        name: 'demoA',
        id: getId(),
    }]
}]