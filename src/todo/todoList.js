import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton estilo='success' icon='check' hidden={todo.done}
                                onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton estilo='warning' icon='undo' hidden={!todo.done}
                                onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton estilo='danger' icon='trash' hidden={!todo.done}
                                onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col" className="tableAction">Ação</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}