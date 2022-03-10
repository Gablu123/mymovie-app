import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trending.css";
import SingleContent from "../../components/SingleContent/SingleContent";
//data fetch korar por arekbar server ta restrat marte hbe
import CustomPagination from "../../components/Pagination/CustomPagination";
const Trending = () => {
  const [page,setPage] = useState(1)
  const [content, setContent] = useState([]);

  const fetchtrending = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=1ec165222361e3dbd3b1154d046ba769&page=${page}`); //kono space deoa jabena


    //ai console ta data fetch korar somoi use korechilam mane c.average airokomer somois
    // console.log(data.results);

    setContent(data.results);
  };

  useEffect(() => {
    fetchtrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <div className="pageTitle">trending</div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}

            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>
    </>
  );
};

export default Trending;
