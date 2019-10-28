import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component{
    render(){
        return(
            <main className="container">
                <div className="starter-template">
                    <PageHeader name='Sobre' small='Nós' ></PageHeader>

                    <h2>Nossa história</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa quis aliquam elementum. Nam imperdiet est mi, tempor commodo enim dapibus quis. Nunc maximus non elit a finibus. 
                    </p>
                    <h2>Missão e visão</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa quis aliquam elementum. Nam imperdiet est mi, tempor commodo enim dapibus quis. Nunc maximus non elit a finibus. 
                    </p>
                    <h2>Imprensa</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa quis aliquam elementum. Nam imperdiet est mi, tempor commodo enim dapibus quis. Nunc maximus non elit a finibus. 
                    </p>
                </div>
            </main>
        )
    }
}