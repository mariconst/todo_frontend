import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livros',
        list:[{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião equipe',
            done: false
        }, {
            _id: 1,
            description: 'Consulta médica 11h',
            done: false
        }]
    })
})

export default rootReducer