import React, {Component} from 'react';
import MoviesList from '../components/MoviesList';
import MySearch from '../components/MySearch';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=no game no life`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({movies: data.Search, loading: false})
            )
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    search = (searchQuery, type = 'all') => {
        this.setState({loading: false});
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({movies: data.Search, loading: false})
            );
    };

    render() {
        const {movies, loading} = this.state;

        return (
            <main className='container content'>
                <MySearch search={this.search} />
                {!loading ? <MoviesList movies={movies} /> : <Preloader />}
            </main>
        );
    }
}
