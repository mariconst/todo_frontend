import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandle = (e) => {
        if(e.key === 'Enter'){
            e.ctrlKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    return(
        <form className="todoForm">
            <div className="form-row">
                <div className="form-group col-md-9">
                    <input className="form-control" placeholder="Adcione uma tarefa"
                        onChange={props.handleChange}
                        onKeyUp={keyHandle}
                        value={props.description} />
                </div>
                <div className="form-group col-md-3">
                    <IconButton estilo='primary' icon='plus' 
                                onClick={props.handleAdd}></IconButton>
                    <IconButton estilo='info' icon='search' 
                                onClick={props.handleSearch}></IconButton>
                    <IconButton estilo='outline-secondary' icon='times' 
                                onClick={props.handleClear}></IconButton>
                                
                </div>
            </div>
        </form>
    )
}