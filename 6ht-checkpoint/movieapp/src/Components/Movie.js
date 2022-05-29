import React, { useState} from 'react';

import { useParams } from 'react-router-dom'
import movieTrailer from 'movie-trailer'


export const Movie = ({movies}) => {
let {id} =useParams()
const [link, setLink] = useState("");
movieTrailer( null, { tmdbId: id } ).then(response => setLink(response) )
const movie = movies.find((el)=> el.imdbID == id)


const url = link.slice(32,)
console.log('code',url)

console.log(`https://www.youtube.com/embed/${url}`);

return (
<>
<div>{movie.Title}</div>
<iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
</>
  )
}


// const YoutubeEmbed = ({ embedId }) => (
//   <div className="video-responsive">
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${embedId}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />

    
//   </div>
// );