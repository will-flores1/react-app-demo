import './link.css';

export default function Link(props) {
    const url = props.lnk.url;
    const title = props.lnk.title;

    return (
        <a className='navLink' href={url}>
            {title}
        </a>
    )
}