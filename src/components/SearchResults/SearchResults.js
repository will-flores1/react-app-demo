import './searchresults.css';

export default function SearchResults(props) {

  return (
    <ul className='results'>
      {props.films.map(film => (
        <li key={film.episode_id}>{film.title}</li>
      ))}
    </ul>
  );
}