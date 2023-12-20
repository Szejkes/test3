import React from "react";
import { MainCta } from "../../components/MainCta";
import { PortraitPlaceholder } from "../../components/PortraitPlaceholder";
import { SocialIcons } from "../../components/SocialIcons";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="div">
    <div className="homepage">
      <header className="header">
        <div className="frame">
          <div className="group">
            <div className="handyman-wrapper">
              <div className="handyman">Smakosz</div>
            </div>
          </div>
          <div className="navbar">
            <div className="home-features-about">Główna</div>
            <div className="text-wrapper">Promocje</div>
            <div className="div">Menu</div>
            <div className="home-features-about-2">Rezerwuj Stolik</div>
            <div className="home-features-about-3">Kontakt</div>
            <img className="vector" alt="Vector" src="/img/vector.svg" />
            <div className="home-features-about-4">Zaloguj Się</div>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="frame-2">
          <img className="fast-reliable-hand" alt="Fast reliable hand" src="/img/fast-reliable-hand.png" />
          <a href="google.com">
          <div className="frame-3" >
            <p className="lorem-ipsum-dolor-si">
              Zapraszamy na najlepsze dania w Twojej
              <br />
              okolicy
            </p>
            <MainCta className="main-CTA-instance" text="Poznaj Nasze Menu" />
          </div>
          </a>
        </div>
        <div className="frame-4">
          <img className="img" alt="Group" src="/img/group-456.png" />
          <img className="union-2" alt="Union" src="/img/union-1.svg" />
        </div>
      </div>
      <div className="why-US">
        <div className="frame-5">
          <div className="maintenance">Dlaczego My?</div>
          <p className="p">
          Po pierwsze, nasza restauracja to oaza smaku. Kuchnia, którą oferujemy, to nie tylko zestaw potraw, ale prawdziwa symfonia smaków, połączenie tradycji z nowoczesnością. Dbamy o to, aby każdy składnik był starannie wyselekcjonowany, a każda potrawa stanowiła prawdziwe arcydzieło kulinarnego rzemiosła. Dlaczego my? Bo wierzymy, że jedzenie powinno być nie tylko pożywieniem dla ciała, ale również uczuciem dla duszy.
          </p>
        </div>
        <img className="union-wrapper"src="/img/dlaczego.png" >
   
        </img>
      </div>
      <div className="our-events">
        <div className="images">
          <div className="frame-6">
            <img className="img-wrapper" src="/img/union-4.png">
            </img>
            <img className="group-2" src="/img/union-5.png">
            </img>
          </div>
          <div className="frame-7">
            <img className="group-3" src="/img/union-6.png">
            </img>
            <img className="group-4" src="/img/union-7.png">
            </img>
          </div>
        </div>
        <div className="frame-8">
          <div className="nasz-catering">Nasz Catering</div>
          <div className="frame-9">
            <p className="text-wrapper-2">
            Nasz catering to niezrównane doświadczenie kulinarne dostosowane do Twoich potrzeb. Zestawiamy świeże, lokalne składniki z kreatywnością kulinarną, aby stworzyć potrawy, które zachwycą Twoich gości. Dlaczego my? Nasz zespół doświadczonych kucharzy i obsługi zatroszczy się o każdy detal, sprawiając, że Twoje wydarzenie będzie niezapomniane. 
            </p>
            <p className="lorem-ipsum-is">
            Bez względu na to, czy to kameralna uroczystość czy duża konferencja, nasz catering oferuje różnorodność smaków, elegancję i profesjonalizm. Daj nam przyjemność obsłużyć Cię i spraw, aby smakowało nie tylko pysznie, ale także wyjątkowo.
            </p>
          </div>
        </div>
      </div>
      <div className="discover-all">
        <div className="maintenance-2">Poznaj Nasze Dania</div>
        <div className="frame-10">
          <div className="frame-11">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="group-copy-wrapper" src="/img/pizza.png">
                </img>
              </div>
            </div>
            <div className="frame-12">
              <div className="lorem-ipsum-dolor-si-2">Danie 1</div>
              <div className="maintenance-3">20.00 Zł</div>
            </div>
          </div>
          <div className="div-2">
            <div className="overlap-group-wrapper">
            <div className="overlap-group">
                <img className="group-copy-wrapper" src="/img/pizza.png">
                </img>
              </div>
            </div>
            <div className="frame-12">
              <div className="lorem-ipsum-dolor-si-2">Danie 2</div>
              <div className="maintenance-4">20.00zł</div>
            </div>
          </div>
          <div className="frame-11">
            <div className="overlap-group-wrapper">
            <div className="overlap-group">
                <img className="group-copy-wrapper" src="/img/pizza.png">
                </img>
              </div>
            </div>
            <div className="frame-12">
              <div className="lorem-ipsum-dolor-si-2">Danie 3</div>
              <div className="maintenance-5">20.00 Zł</div>
            </div>
          </div>
          <div className="div-2">
            <div className="overlap-group-wrapper">
            <div className="overlap-group">
                <img className="group-copy-wrapper" src="/img/pizza.png">
                </img>
              </div>
            </div>
            <div className="frame-12">
              <div className="lorem-ipsum-dolor-si-2">Danie 4</div>
              <div className="maintenance-4">20.00zł</div>
            </div>
          </div>
        </div>
      </div>
      <div className="CTA">
        <div className="fast-reliable-hand-2">Zobacz Nasze Promocje</div>
        <p className="lorem-ipsum-dolor-si-3">
        Zapraszamy do odkrywania naszych atrakcyjnych promocji! "Zobacz Nasze Promocje" to brama do pełnego smaku przy oszczędnościach. Dla naszych klientów przygotowaliśmy wyjątkowe oferty, które sprawią, że Twoje doświadczenie kulinarne stanie się jeszcze bardziej satysfakcjonujące. Czy to specjalne zestawy, rabaty na zamówienia większe czy unikalne wydarzenia kulinarne – nasze promocje są skrojone na miarę Twoich oczekiwań. Dlaczego warto zajrzeć? Bo dobre jedzenie zasługuje na wyjątkową okazję, a nasze promocje sprawią, że smakowanie będzie nie tylko pełne wrażeń, ale także przyjazne dla Twojego portfela. Odkryj, jak możemy umilić Ci gastronomiczne chwile!
        </p>
        <MainCta className="main-CTA-instance" text="Promocje" />
      </div>
      <div className="testimonials">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="rectangle" />
            <div className="div-wrapper">
              <img className="overlap-group-2" src="/img/opinie.png">
              </img>
            </div>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-14">
            <div className="slick-and-powerfull">Opinie Klientów</div>
            <div className="frame-15">
              <p className="lorem-ipsum-dolor-si-4">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
                Industry&#39;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
                And Scrambled It To Make A
              </p>
              <div className="frame-16">
                <PortraitPlaceholder union="/img/union-13.svg" />
                <div className="lorem-ipsum-dolor-si-5">Klient 1</div>
              </div>
            </div>
          </div>
          <div className="frame-15">
            <p className="lorem-ipsum-dolor-si-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
              Industry&#39;s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
              Scrambled It To Make A Type Specimen Book.
            </p>
            <div className="frame-17">
              <PortraitPlaceholder union="/img/union-13.svg" />
              <div className="lorem-ipsum-dolor-si-5">Klient 2</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="frame-18">
          <div className="frame-11">
            <div className="handyman-2">Smakosz</div>
            <p className="description-copy">
              Sprawdź nasze social media!
            </p>
            <SocialIcons
              className="social-icons-instance"
              combinedShape="/img/combined-shape-1.svg"
              facebook="/img/facebook-1.svg"
              shape="/img/shape-1.svg"
            />
          </div>
          <div className="frame-19">
            <p className="get-in-touch">Bądź Z Nami W Kontakcie</p>
            <div className="email-tophandyman-i">
              Email: Kontakt@smakosz.com
              <br />
              telefon: 933-290-231
            </div>
          </div>
          <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
        </div>
        <div className="group-wrapper">
          <div className="group-8">
            <div className="description-copy-wrapper">
              <p className="description-copy-2">
                <span className="span">© 2023 Smakosz.</span>
                <span className="text-wrapper-3">pl</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};
