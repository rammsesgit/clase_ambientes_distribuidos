export default class Header extends React.Component {
  render() {
    return <div className="header container">

      <h1 className="title">TECast</h1>
      <p className="slogan">El lugar dónde encontrarás todo lo relacionado a la vida como universitario.</p>
      
      <style jsx>{`
        .header {
          width: 100vw;
          height: 400px;
          background: linear-gradient(to bottom, rgba(24,24,24,0.25), #181818), url(https://blog.codepen.io/wp-content/themes/codepen/images/radio-hero-bg.jpg);
          background-repeat: no-repeat;
          background-size: cover;

          flex-direction: column;
          color: #fff;
        }

        .title {
          font-size: 4rem;
          font-family: 'Permanent Marker', cursive;
          margin-bottom: 0;
        }
        .slogan {
          margin-top: 0;
          font-size: 1.7rem;
          width: 600px;
          text-align: center;
        }
      `}</style>
    </div>
  }
}