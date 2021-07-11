import { useState } from "react";
import { MovieList } from "./components/MovieList";
import NavBar from "./components/NavBar";
function App() {
  const Films = [
    {
      id: 0,
      title: "The Italian Job",
      Rate: 4,
      srcImg:
        "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/10/32/affiche2.jpg",
      srcVideo: "https://youtu.be/4up3hwHs_r4",
    },
    {
      id: 1,
      title: "Avengers",
      Rate: 5,
      srcImg:
        "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",
      srcVideo:
        "https://www.allocine.fr/video/player_gen_cmedia=19255202&cfilm=130440.html?jwsource=cl",
    },
    {
      id: 2,
      title: "La Momie",
      Rate: 3,
      srcImg:
        "https://fr.web.img4.acsta.net/pictures/14/08/25/15/31/080592.jpg",
      srcVideo:
        "https://www.allocine.fr/video/player_gen_cmedia=19377940&cfilm=20153.html?jwsource=cl",
    },
    {
      id: 3,
      title: "Jurassic World",
      Rate: 2,
      srcImg:
        "https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2018/04/jurassic-world-a.jpg?fit=555%2C766&ssl=1",
      srcVideo: "https://www.youtube.com/watch?v=RFinNxS5KN4",
    },
    {
      id: 4,
      title: "Avatar",
      Rate: 4,
      srcImg:
        "https://images-na.ssl-images-amazon.com/images/I/61r9P1fJW2L._AC_SY679_.jpg",
      srcVideo: "https://www.youtube.com/watch?v=O1CzgULNRGs",
    },
    {
      id: 5,
      title: "SHERLOCK HOLMES",
      Rate: 4,
      srcImg:
        "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/67/70/22/19227477.jpg",
      srcVideo: "https://www.youtube.com/watch?v=xm2B8zce_pg",
    },
    {
      id: 6,
      title: "Fast and Furious",
      Rate: 1,
      srcImg:
        "https://img-4.linternaute.com/k_J3wVhnw0zSNlGzD87FUUg9Fdc=/405x540/a5fb6b0bd25b4c3c86c756299ea4b273/ccmcms-linternaute/192114.jpeg",
      srcVideo: "https://www.youtube.com/watch?v=hCPXYelJteM",
    },
  ];
  const [movieList, setMovielist] = useState(Films);
  const handleAdd = (newMovie) => {
    setMovielist([
      ...movieList,
      {
        id: Math.random(),
        title: newMovie.title.value,
        Rate: Number(newMovie.rate.value),
        srcImg: newMovie.poster.value,
        srcVideo: newMovie.video.value,
      },
    ]);
  };
  const searchinit = () => {
    setMovielist(Films.map((el) => el));
  };
  const handlerate = (rate) => {
    setMovielist(movieList.filter((el) => el.Rate === rate));
    console.log(movieList);
  };
  const handleinput = (text) => {
    setMovielist(movieList.filter((el) => el.title.includes(text)));
  };
  const handleTrash = (id) => {
    setMovielist(movieList.filter((el) => el.id !== id));
  };
  return (
    <>
      <NavBar
        style={{ width: "100%" }}
        handlerate={handlerate}
        handleinput={handleinput}
        handleAdd={handleAdd}
        searchinit={searchinit}
      />
      <div className="App">
        <MovieList movieList={movieList} handleTrash={handleTrash} />
      </div>
    </>
  );
}

export default App;
