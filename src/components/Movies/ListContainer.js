import React, { Component } from 'react';
import MovieList from './MovieList';
import Brain from '../../utils/Brain';

const ListContainer = React.createClass({
    getInitialState() {
        return {
            dislike: [],
            general: [],
            like: []
        };
    },

    componentDidMount() {
        let self = this;
        Brain.on('catalog.updated', catalog => {
            self.setState({ dislike: catalog.dislike });
            self.setState({ general: catalog.general });
            self.setState({ like: catalog.like });
        });
    },

    render() {
        return (
            <div className="movie-player">
                <div className="movie-dislike">
                    <MovieList movies={this.state.dislike} type="dislike" />
                </div>
                <div className="movie-cloud">
                    <MovieList movies={this.state.general} type="general" />
                </div>
                <div className="movie-like">
                    <MovieList movies={this.state.like} type="like" />
                </div>
            </div>
        );
    }
});

export default ListContainer;
