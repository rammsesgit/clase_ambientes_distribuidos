import { Link } from '../dynamic-routes'

export default class Header extends React.Component {
  componentDidMount = () => {
    if (window.location.pathname != '/') {
      header.classList.add('header-slim')
    }
  }

  render() {
    return (
      <div id='header' className='header container'>
        <Link href='/'>
          <>
            <h1 className='title'>TECast</h1>
            <small>test en rama test</small>
          </>
        </Link>

        <h2 className='slogan'>
          El lugar dónde encontrarás todo lo relacionado a la vida como universitario.
        </h2>

        <style jsx>{`
          .header {
            width: 100vw;
            height: 350px;
            background: linear-gradient(to bottom, rgba(24, 24, 24, 0.25), #181818),
              url(https://blog.codepen.io/wp-content/themes/codepen/images/radio-hero-bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;

            flex-direction: column;
            color: #fff;
          }
          .header-slim {
            flex-direction: row;
            height: max-content;
          }

          .title {
            font-size: 4rem;
            font-family: 'Permanent Marker', cursive;
            margin: 0;
            cursor: pointer;
          }
          .slogan {
            font-size: 1.7rem;
            font-weight: inherit;
            width: 600px;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
