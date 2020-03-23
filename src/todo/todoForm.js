import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }
    componentWillMount(){
        this.props.search()
    }
    keyHandle(e){
        const { add, search, description } = this.props
        if(e.key === 'Enter'){
            e.ctrlKey ? search() : add(description)
        }else if(e.key === 'Escape'){
            this.props.handleClear()
        }
    }
    render(){
        const { add, search, description } = this.props
        return (<form className="todoForm">
            <div className="form-row">
                <div className="form-group col-md-9">
                    <input className="form-control" placeholder="Adcione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandle}
                        value={this.props.description} />
                </div>
                <div className="form-group col-md-3">
                    <IconButton estilo='primary' icon='plus' 
                                onClick={() => add(description)}></IconButton>
                    <IconButton estilo='info' icon='search' 
                                onClick={() => search()}></IconButton>
                    <IconButton estilo='outline-secondary' icon='times' 
                                onClick={this.props.handleClear}></IconButton>
                                
                </div>
            </div>
        </form>)
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const matDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps,matDispatchToProps)(TodoForm)