import React from 'react';
import { DragSource } from 'react-dnd';

const movieSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const Movie = React.createClass({
    getInitialState() {
        this._getInitialPos();
        return {
            class: 'movie'
        }
    },

    mouseDown() {
        this.setState({class: 'movie clicked'});
    },

    mouseUp() {
        this.setState({class: 'movie'});
    },

    _getInitialPos() {
        let { movie } = this.props;
        movie.position = {};
        movie.position.left = this._getRandomInclusive(
                movie.random.min, movie.random.max) + '% ';
        movie.position.top = this._getRandomInclusive(10, 60) + '%';
        movie.animation = {};
        movie.animation.delay = this._getRandomInclusive(0, 2) + 's';
        movie.animation.duration = this._getRandomInclusive(6, 10) + 's';
    },

    _getRandomInclusive(min, max) {
        return Math.random() * (max - min + 1) + min;
    },

    render() {
        const { connectDragSource, isDragging, movie } = this.props;
        return connectDragSource(
            <div className={this.state.class} style={{
                left: movie.position.left,
                top: movie.position.top,
                animationDelay: movie.animation.delay,
                animationDuration: movie.animation.duration,
                opacity: isDragging ? 0.5 : 1
            }} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
                <div className="movie-image">
                    <img src={ 'http://image.tmdb.org/t/p/w500' + this.props.movie.poster_path}
                         alt={this.props.movie.title}/>
                </div>
                <div className="movie-info">
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                </div>
            </div>
        );
    }
});

Movie.propTypes = {
    movie: React.PropTypes.object.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired
};

export default DragSource('movie', movieSource, collect)(Movie);
