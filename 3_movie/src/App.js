import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import './App.css';

function App() {
    const [movies, setMovies] = useState([])

    const [searchValue, setSearchValue] = useState('')

    const [favourites, setFavourites] = useState([]);
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=be38b5f5`
        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };
    return (
        <div className="container-fluid movie-app">
            <div className="row d-flex align-items-center">
                <MovieListHeading heading={'Movies'}
                />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>

            </div>
            <div className="row">
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites}
                />
            </div>
        </div>
    );
}

export default App;
