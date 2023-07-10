import React, { useState } from "react";
import LayoutWrapper from "../Layout";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../Components/contact-form";

function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="page-heading header-text">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <h1>Shërbimet tona</h1>
              <span>Ne kemi mbi 10 vite eksperiencë.</span>
            </div>
          </div>
        </Container>
      </div>
      <div className="single-services">
        <Container>
          <Row id="tabs">
            <div className="col-md-4">
              <div className="tab-buttons">
                <ul>
                  <li>
                    <Link
                      to="#tabs-1"
                      className={`tab-button ${
                        activeTab === 0 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(0)}
                    >
                      Të dhënat financiare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#tabs-2"
                      className={`tab-button ${
                        activeTab === 1 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      Shërbime kontabiliteti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#tabs-3"
                      className={`tab-button ${
                        activeTab === 2 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(2)}
                    >
                      Këshilime financiare & Tatimore
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#tabs-4"
                      className={`tab-button ${
                        activeTab === 3 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(3)}
                    >
                      Ekspertiza të ndryshme financiare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <section className="tabs-content">
                {activeTab === 0 && (
                  <article id="tabs-1">
                    <img src="images/single_service_01.jpg" alt="" />
                    <h4>Të dhënat financiare</h4>
                    <p>
                      Të dhënat financiare janë të rëndësishme për organizatat
                      në mënyrë që të monitorojnë performancën e tyre, të bëjnë
                      vendime të informuara dhe të sigurojnë qëndrueshmëri
                      financiare. Disa aspekte të shërbimit të të dhënave
                      financiare të ofruar nga Eurollogaria:
                      <br />
                      Përgatitja e llogarive financiare: ofrojmë shërbime për
                      përgatitjen e llogarive financiare të organizatave. Kjo
                      përfshin hartimin e bilancit të gjendjes, llogarive të të
                      ardhurave dhe shpenzimeve, si dhe të dhënat shtesë të
                      tilla si llogaritë e pagave dhe kontrolli i lëvizjes së
                      kasës dhe bankës.
                      <br />
                      Analiza e llogarive financiare: ofrojmë analiza të
                      hollësishme të llogarive financiare për të ndihmuar
                      organizatat të kuptojnë performancën e tyre financiare.
                      Përmes analizës së raporteve financiare, identifikojmë
                      ndryshimet në performancë dhe ofrojmë rekomandime për
                      përmirësimin e performancës.
                      <br />
                      Kontrolli i llogarive financiare: shërbime për verifikimin
                      dhe kontrollin e llogarive financiare për të siguruar që
                      ato janë të saktë dhe të përmbushin standardet e
                      rregullta. Ne identifikojmë dhe korrigjojmë gabimet,
                      kontrollojmë përkatësinë e dokumentacionit financiar dhe
                      sigurojmë që llogaritë të përputhen me legjislacionin
                      financiar aktual.
                      <br />
                      Interpretimi i të dhënave financiare: Ne ndihmojmë
                      klientët të kuptojnë dhe të shpjegojnë kuptimin e
                      llogarive financiare, të identifikojnë trendet dhe
                      zhvillimet financiare të rëndësishme, dhe të marrin
                      vendime strategjike dhe financiare të informuara.
                      <br />
                    </p>
                  </article>
                )}
                {activeTab === 1 && (
                  <article id="tabs-2">
                    <img src="images/single_service_02.jpg" alt="" />
                    <h4>Shërbime kontabiliteti</h4>
                    <p>
                      {" "}
                      Shërbimet e kontabilitetit janë një pjesë e rëndësishme e
                      menaxhimit financiar të një organizate. Kontabiliteti
                      përfshin procesin e identifikimit, regjistrimit dhe
                      vlerësimit të transaksioneve financiare. Këto shërbime
                      ofrohen nga ne:
                      <br />
                      Regjistrimi: Kjo përfshin regjistrimin e transaksioneve
                      financiare të organizatës në librat e kontabilitetit të
                      duhur. Këtu përfshihen faturat, pagesat, marrëveshjet e
                      blerjes dhe shitura, dhe të dhënat e tjera të rëndësishme
                      financiare.
                      <br />
                      Analiza: Shërbimet e kontabilitetit përfshijnë analizën e
                      të dhënave financiare për të kuptuar performancën e
                      organizatës. Kjo mund të përfshijë analizën e bilancit të
                      gjendjes, llogarive të të ardhurave dhe shpenzimeve,
                      analizën e kostos etj.
                      <br />
                      Renditja e kontrollit të brendshëm: shërbime të lidhura me
                      renditjen e kontrollit të brendshëm, që siguron që
                      procedurat financiare të organizatës janë të rregullta.
                      Kjo përfshin hartimin e politikave dhe procedurave të
                      kontrollit të brendshëm, dhe rekomandimet për përmirësimin
                      e tyre.
                      <br />
                      Deklarimi fiskal: përfshinë përgatitjen dhe paraqitjen e
                      deklaratave fiskale për organizatën. Kjo përfshin
                      përgatitjen e deklaratave të taksave të shitjes, taksave
                      të paguara nga punëdhënësi dhe taksave të ndryshme të
                      tjera që lidhen me aktivitetin financiar të organizatës.
                    </p>
                  </article>
                )}
                {activeTab === 2 && (
                  <article id="tabs-3">
                    <img src="images/single_service_03.jpg" alt="" />
                    <h4>Këshilime financiare & Tatimore</h4>
                    <p>
                      Eurollogaria në kuadër të shërbimit të Këshillimit
                      Financiar dhe Tatimor, ofron shërbime të përshtatshme dh
                      cilësore për klientët tanë. Këtu janë disa aspekte të
                      rëndësishme të shërbimit të këshillimit financiar dhe
                      tatimor të ofruar nga Eurollogaria:
                      <br />
                      Këshillim për planifikimin financiar personal dhe
                      biznesor: përmes analizave të hollësishme dhe diskutimeve
                      me klientët, ndihmojmë ata të hartojnë plane të buxhetit
                      të qëndrueshme dhe të përmbushin objektivat e tyre
                      financiare.
                      <br /> Optimizimi i strukturës tatimore: identifikojmë
                      mënyrat legale dhe të rregullta për të zvogëluar barrën
                      tatimore dhe për të optimizuar pasurinë e klientëve në
                      mënyrë ligjore.
                      <br />
                      Përgatitja dhe paraqitja e deklaratave tatimore: ofrojmë
                      shërbime të plota për përgatitjen dhe paraqitjen e
                      deklaratave tatimore të klientëve tanë.
                      <br />
                      Konsultime tatimore dhe menaxhimi i kontrollit: ndihmojmë
                      klientët të kuptojnë dhe të zbatohen politikat dhe
                      procedurat tatimore dhe të sigurohen që ata të jenë në
                      përputhje me rregullat e ligjit dhe të evitojnë rrezikun e
                      ndonjë konflikti tatimor.
                      <br />
                      Analiza financiare dhe raportimi: ofrojmë analizë të
                      thellë të të dhënave financiare të klientëve tanë dhe
                      hartojmë raporte të rregullta të financave.
                    </p>
                  </article>
                )}
                {activeTab === 3 && (
                  <article id="tabs-4">
                    <img src="images/single_service_04.jpg" alt="" />
                    <h4>Ekspertiza të ndryshme financiare</h4>
                    <p>
                      Eurollogaria ofron shërbime të specializuara të
                      ekspertizave financiare për klientët e saj. Ekspertiza
                      financiare është një proces i pavarur dhe objektiv që
                      synon të vlerësojë, verifikojë dhe të japë një vlerësim
                      profesionist mbi aspektet financiare të një organizate,
                      transaksioni apo problemi financiar specifik.
                      <br />
                      Ekspertiza financiare e ofruar nga Eurollogaria ndihmon
                      organizatat dhe individët të marrin vendime të rëndësishme
                      financiare, të kuptojnë vlerën e pasurive të tyre dhe të
                      identifikojnë rreziket dhe sfidat financiare. Me
                      përdorimin e njohurive dhe përvojës së tyre, Eurollogaria
                      siguron shërbime profesionale dhe objektive të ekspertizës
                      financiare që ndihmojnë klientët të bëjnë vendime të
                      informuara dhe të suksesshme.
                    </p>
                  </article>
                )}
              </section>
            </div>
          </Row>
        </Container>
      </div>
      <div className="callback-form callback-services">
        <Container>
          <Row>
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Na kontaktoni për një
                  <em> telefonatë</em>
                </h2>
                <span>Gjendemi gati për të ju ndihmuar tani.</span>
              </div>
            </div>
            <div className="col-md-12">
              <ContactForm />
            </div>
          </Row>
        </Container>
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default LayoutWrapper(Services);
