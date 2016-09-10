import Movies from './Movies';
import EventEmitterClass from './EventEmitterClass';

class Brain extends EventEmitterClass {
    movies = {
        general: [],
        dislike: [],
        like: []
    };

    catalog = [];

    constructor() {
        super();
        this.loadState();
        Movies.on('catalog.update', this.catalogUpdate.bind(this));
    }

    catalogUpdate(catalog) {
        let self = this;
        self.catalog = catalog;
        catalog.forEach(movie => {
            let indexLike = self.movies.like.indexOf(movie.id),
                indexDislike = self.movies.dislike.indexOf(movie.id),
                indexGeneral = self.movies.general.indexOf(movie.id);
            if (indexLike == -1 && indexDislike == -1 && indexGeneral == -1) {
                self.movies.general.push(movie.id);
            }
        });
        console.log('catalog updated');
        self._emit('catalog.updated', self.getMovieCatalog());
        self.saveState();
    }

    saveState() {
        localStorage.setItem('ml-data', JSON.stringify(this.movies));
    }

    loadState() {
        let self = this,
            cache = localStorage.getItem('ml-data');
        if (cache) {
            self.movies = JSON.parse(cache);
        }
    }

    getMovieCatalog() {
        let self = this;
        return {
            general: self.movies.general.map(item => {
                return self._mapIdToObject(item);
            }),
            dislike: self.movies.dislike.map(item => {
                return self._mapIdToObject(item);
            }),
            like: self.movies.like.map(item => {
                return self._mapIdToObject(item);
            })
        };
    }

    _mapIdToObject(item) {
        let self = this;
        return self.catalog.find(movie => {
                return movie.id === item;
            });
    }

    categorise(category, movie) {
        console.log('Should add category', category);
    }
}

export default new Brain();
