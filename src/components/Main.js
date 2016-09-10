import React, { Component } from 'react';
import ListContainer from './Movies/ListContainer'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Main extends Component{
    render() {
        return (
            <div className="suggester-container">
                <header className="suggester-header">
                    <h1>Movie Suggester</h1>
                    <p className="lead">Drag the movies accordingly if you like them or not</p>
                </header>
                <section className="suggester">
                    <ListContainer />
                </section>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Main);
