import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import './App.css';

function App() {
    const [movies, setMovies] = useState([
        {
            "Title": "Ant-Man",
            "Year": "2015",
            "imdbID": "tt0478970",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"
        },
        {
            "Title": "Ant-Man and the Wasp",
            "Year": "2018",
            "imdbID": "tt5095030",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Ant-Man",
            "Year": "2017",
            "imdbID": "tt7249258",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWQwZWFhMDQtMmVkZS00OGI4LThjNjUtMzg5YWY4MWY0NjE2XkEyXkFqcGdeQXVyMjIzOTI3NjM@._V1_SX300.jpg"
        },
        {
            "Title": "Ant-Man: Let's Go to the Macroverse",
            "Year": "2015",
            "imdbID": "tt5284380",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjJiYzllOWMtMzU1My00N2E1LTg5ZmQtYWRmOWQ0ZjkzZmFiXkEyXkFqcGdeQXVyMTIxMDUyOTI@._V1_SX300.jpg"
        },
        {
            "Title": "Ant-Man & The Wasp: Quantum Quarantine",
            "Year": "2020",
            "imdbID": "tt12378194",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjhhZjVmMGUtMWJkMC00NzIzLTg3ZjAtYWI4NGMwOWU2NDk4XkEyXkFqcGdeQXVyMzc1MDQyNTM@._V1_SX300.jpg"
        },
        {
            "Title": "What If Werner Herzog Directed Ant-Man?",
            "Year": "2015",
            "imdbID": "tt5860546",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODcwMzE2MWQtMDI0MC00YTEwLWE3M2EtZTU2M2IwYzYzNWY1XkEyXkFqcGdeQXVyNjc1NDY3NzU@._V1_SX300.jpg"
        },
    ])

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="container-fluid movie-app">
            <div className="row d-flex align-items-center">
                <MovieListHeading heading={'Movies'}/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

            </div>
            <div className="row">
                <MovieList movies={movies}/>
            </div>
        </div>
    );
}

export default App;
