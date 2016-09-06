import React from 'react';
import Movie from './Movie';

const MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    _getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    _getRandomInclusive(min, max) {
        return Math.random() * (max - min + 1) + min;
    },

    render() {
        var self = this;
        let movies = this.props.movies.map(function(item){
            let left = self._getRandomIntInclusive(20,70),
                top = self._getRandomIntInclusive(0,70),
                animDelay = self._getRandomInclusive(0,2),
                animLength = self._getRandomIntInclusive(6,10);

            item.position = {
                left: left,
                top: top
            };

            item.animation = {
                delay: animDelay,
                length: animLength
            };

            return <Movie movie={item} key={item.id}/>
        });
        return <div className="movies-container">{movies}</div>
    }
});

export default MovieList;
