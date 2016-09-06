import React from 'react';

const Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render() {
        let divStyle = {
            left: 'calc(' + this.props.movie.position.left + '% - 150px)',
            top: 'calc(' + this.props.movie.position.top + '% - 150px)',
            animationDelay: this.props.movie.animation.delay + 's',
            animationDuration: this.props.movie.animation.length + 's'
        };
        return (
            <div className="movie" style={divStyle}>
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
