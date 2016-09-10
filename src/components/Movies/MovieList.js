import React, { Component } from 'react';
import Movie from './Movie';
import Brain from '../../utils/Brain';
import { DropTarget } from 'react-dnd';

const movieTarget = {
    canDrop(props) {
        return props.type !== 'general';
    },

    drop(props, monitor) {
        console.log(monitor);
        Brain.categorise(props.type);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class MovieList extends Component{

    render() {
        let { connectDropTarget } = this.props;
        let self = this,
            movies = self.props.movies.map(function(item){
                item.random = {
                    min: 20,
                    max: 70
                };
                return <Movie movie={item} key={item.id}/>;
            });

        return connectDropTarget(<div className="movies-container">{movies}</div>);
    }
}

MovieList.propTypes = {
    movies: React.PropTypes.array.isRequired,
    type: React.PropTypes.string.isRequired
};

export default DropTarget('movie', movieTarget, collect)(MovieList);
