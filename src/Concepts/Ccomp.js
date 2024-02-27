import React, { Component } from 'react'
import { CounterContext } from './CounterContext'

export default class Ccomp extends Component {
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>{this.props.count}</h2>
                <CounterContext.Consumer>
                    {(value) => {
                        return <h2>{value}</h2>
                    }}
                </CounterContext.Consumer>
            </div>
        )
    }
}

