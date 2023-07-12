import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class HeaderSlider extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
    };

    return (
      <div>
        <Slider className="Modern-Slider" {...settings}>
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6>Jemi Gati të Ju Ndihmojmë</h6>
                <h4>Kontabilitet &amp; Konsulencë</h4>
                <p>
                  Eurollogaria - Partneri Juaj i Besueshëm në Kontabilitet dhe
                  Konsulencë.{" "}
                </p>
                <Link to="/contact" className="filled-button">
                  na kontaktoni
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="item item-2">
              <div className="img-fill">
                <div className="text-content">
                  <h6>Rruga drejt Suksesit Financiar</h6>
                  <h4>
                    Këshilime financiare <br />
                    &amp; Tatimore
                  </h4>
                  <p> Eurollogaria - Partneri Juaj i Besueshëm në Kontabilitet dhe
                    Konsulencë.</p>
                  <Link to="/services" className="filled-button">
                    shërbimet tona
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item item-3">
              <div className="img-fill">
                <div className="text-content">
                  <h6>Ekspertizë e Vërtetuar dhe Besim të Plotë</h6>
                  <h4>Ekspertiza të ndryshme financiare</h4>
                  <p>
                    Eurollogaria - Partneri Juaj i Besueshëm në Kontabilitet dhe
                    Konsulencë.
                  </p>
                  <Link to="/about" className="filled-button">
                    rreth nesh
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default HeaderSlider;
