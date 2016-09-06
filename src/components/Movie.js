import React from 'react';

const Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    getInitialState() {
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

    render() {
        let divStyle = {
            left: this.props.movie.position.left + '% ',
            top: this.props.movie.position.top + '%',
            animationDelay: this.props.movie.animation.delay + 's',
            animationDuration: this.props.movie.animation.length + 's'
        };
        return (
            <div className={this.state.class} style={divStyle} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
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

export default Movie;
