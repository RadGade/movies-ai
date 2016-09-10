import 'whatwg-fetch';
import EventEmitterClass from './EventEmitterClass';

class Movies extends EventEmitterClass {
    endpoint = 'http://api.themoviedb.org/3';
    apiKey = '67b8928b16093b424304b342aba434f7';
    catalog = [];

    constructor() {
        super();
        let self = this;
        // Verify if we have cached data
        let config = localStorage.getItem('config');
        // If not then  we will request the new data
        if (!config || !config.imageBaseUrl) {
            self._getConfiguration();
        } else {
            config = JSON.parse(localStorage.getItem('config'));
            self.imageBaseUrl = config.imageBaseUrl;
            self._loadCatalog();
        }
        self._updateCatalog();
    }

    _getConfiguration() {
        let self = this;
        fetch(self.endpoint + '/configuration?api_key=' + self.apiKey)
            .then(response => {
                return response.json();
            }).then(body => {
                self.imageBaseUrl = body.images.base_url;
                localStorage.setItem('config', JSON.stringify({
                    imageBaseUrl: self.imageBaseUrl
                }));
            });
    }

    _addMovie(movie) {
        let self = this;
        if (!self._movieExist(movie.id)) {
            if (movie.poster_path.indexOf('http://') !== -1) {
                movie.poster_path = self.imageBaseUrl + movie.poster_path;
                movie.backdrop_path = self.imageBaseUrl + movie.backdrop_path;
            }
            self.catalog.push(movie);
        }
    }

    _movieExist(key) {
        return this.catalog.some(arrVal => {
            return arrVal.id === key;
        });
    }

    _saveCatalog() {
        localStorage.setItem('catalog', JSON.stringify({
            movies: this.catalog
        }));
    }

    _loadCatalog() {
        let catalog = JSON.parse(localStorage.getItem('catalog'));
        this.catalog = catalog.movies;
    }

    _updateCatalog() {
        let self = this;
        fetch(self.endpoint + '/movie/top_rated?api_key=' + self.apiKey)
            .then(response => {
                return response.json();
            })
            .then(body => {
                body.results.forEach(movie => {
                    self._addMovie(movie);
                });
                self._saveCatalog();
                self._emit('catalog.update', self.catalog);
            });
    }
}

export default new Movies();