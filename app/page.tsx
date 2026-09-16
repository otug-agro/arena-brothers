import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  CalendarDays,
  MapPin,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";
import { InstagramFeed } from "../components/instagram-feed";

const whatsappUrl =
  "https://wa.me/5594988040853?text=Ol%C3%A1%2C%20Arena%20Brothers!%20Quero%20saber%20mais%20sobre%20hor%C3%A1rios%20e%20reservas.";
const eventWhatsappUrl =
  "https://wa.me/5594988040853?text=Ol%C3%A1%2C%20Arena%20Brothers!%20Quero%20saber%20mais%20sobre%20o%202%C2%BA%20Torneio%20Municipal%20de%20Arenas.";
const mapsUrl = "https://maps.app.goo.gl/G7FEzNc9FHBkEW7s8";

const highlights = [
  {
    icon: Users,
    number: "01",
    title: "Jogue junto",
    text: "A areia é o ponto de encontro para duplas, amigos e quem quer entrar no ritmo do beach tennis.",
    color: "lime",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Viva os torneios",
    text: "Competição, torcida e muita energia em eventos que movimentam os atletas de Marabá e região.",
    color: "blue",
  },
  {
    icon: CalendarDays,
    number: "03",
    title: "Entre em quadra",
    text: "Consulte a agenda da arena pelo WhatsApp e encontre o melhor momento para jogar.",
    color: "coral",
  },
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} aria-label="Arena Brothers Beach Tennis">
      <Image
        src={inverse ? "/logo-transparente.png" : "/logo.png"}
        alt="Arena Brothers Beach Tennis"
        width={220}
        height={220}
        className="brand-mark__image"
      />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <Image
          src="/arena-hero.png"
          alt="Jogadores em uma partida de beach tennis ao entardecer"
          fill
          priority
          className="hero__image"
          sizes="100vw"
        />
        <div className="hero__wash" />
        <div className="court-lines" aria-hidden="true" />

        <header className="site-header page-shell">
          <a href="#inicio" className="brand-link" aria-label="Ir para o início">
            <BrandMark inverse />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#arena">A arena</a>
            <a href="#experiencia">Experiência</a>
            <a href="#eventos">Eventos</a>
            <a href="#instagram">Instagram</a>
            <a href="#localizacao">Localização</a>
          </nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            Falar no WhatsApp
          </a>
        </header>

        <div className="hero__content page-shell">
          <div className="hero__eyebrow">
            <span />
            Beach tennis em Marabá
          </div>
          <h1>
            Sua próxima
            <br />
            <em>grande jogada</em>
            <br />
            começa aqui.
          </h1>
          <p>
            Areia, energia e gente que ama o jogo. Venha sentir o clima da
            Arena Brothers.
          </p>
          <div className="hero__actions">
            <a className="button button--coral" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Consultar horários
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button--ghost" href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>

        <div className="hero__rail" aria-hidden="true">
          <span>JOGUE</span><i />
          <span>VIVA</span><i />
          <span>REPITA</span>
        </div>
        <a className="scroll-cue" href="#arena" aria-label="Conhecer a arena">
          <span>Conheça a arena</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="manifesto" id="arena">
        <div className="page-shell manifesto__grid">
          <div className="section-kicker">
            <span>01</span>
            <p>O seu lugar<br />na areia</p>
          </div>
          <div className="manifesto__copy">
            <p className="manifesto__lead">
              Aqui, cada ponto vira <span>encontro</span>. Cada partida traz um
              novo desafio. E todo mundo entra no mesmo clima.
            </p>
            <div className="manifesto__details">
              <p>
                A Arena Brothers é feita para quem já vive o esporte e para quem
                quer dar os primeiros passos na areia. Um espaço para jogar,
                competir e fazer parte da comunidade do beach tennis em Marabá.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero entrar em quadra
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div>
            AREIA <b>•</b> ENERGIA <b>•</b> BEACH TENNIS <b>•</b> MARABÁ <b>•</b>
            AREIA <b>•</b> ENERGIA <b>•</b> BEACH TENNIS <b>•</b> MARABÁ <b>•</b>
          </div>
        </div>
      </section>

      <section className="experience" id="experiencia">
        <div className="page-shell">
          <div className="experience__heading">
            <div>
              <span className="section-label">A experiência Brothers</span>
              <h2>Mais que uma partida.<br /><em>É o nosso jogo.</em></h2>
            </div>
            <p>
              Da primeira troca de bola ao ponto decisivo, tudo acontece com
              intensidade, parceria e aquele clima que só a areia tem.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.number} className={`highlight-card highlight-card--${item.color}`}>
                  <div className="highlight-card__top">
                    <span>{item.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="events" id="eventos">
        <div className="events__scribble" aria-hidden="true">JOGUE JUNTO</div>
        <div className="page-shell events__grid">
          <div className="events__poster-wrap">
            <span className="events__tag">Próximo evento</span>
            <Image
              src="/torneio-municipal-arenas.jpeg"
              alt="Cartaz do 2º Torneio Municipal de Arenas, dias 7, 8 e 9 de novembro, com sede na Arena Brothers"
              width={738}
              height={741}
              className="events__poster"
            />
          </div>

          <div className="events__copy">
            <span className="section-label section-label--light">Agenda Brothers</span>
            <p className="events__edition">2º</p>
            <h2>Torneio<br /><em>Municipal</em><br />de Arenas</h2>
            <div className="events__date">
              <strong>7 <i>·</i> 8 <i>·</i> 9</strong>
              <span>de novembro</span>
            </div>
            <p className="events__description">
              Três dias de competição, energia e torcida. A Arena Brothers será
              a sede deste encontro que reúne atletas e arenas de Marabá.
            </p>
            <div className="events__actions">
              <a className="button button--lime" href={eventWhatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Saber mais sobre o evento
                <ArrowUpRight aria-hidden="true" />
              </a>
              <span><MapPin aria-hidden="true" /> Sede: Arena Brothers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="social-feed" id="instagram">
        <div className="page-shell">
          <div className="social-feed__heading">
            <div>
              <span className="section-label">Direto da areia</span>
              <h2>Arena Brothers<br /><em>no Instagram.</em></h2>
            </div>
            <div className="social-feed__intro">
              <Camera aria-hidden="true" />
              <p>Eventos, aulas, esporte, amizade e tudo o que acontece por aqui.</p>
            </div>
          </div>

          <InstagramFeed />
        </div>
      </section>

      <section className="location" id="localizacao">
        <div className="location__accent" aria-hidden="true">MARABÁ</div>
        <div className="page-shell location__grid">
          <div className="location__copy">
            <span className="section-label section-label--light">Onde a bola sobe</span>
            <h2>Nos vemos<br /><em>na arena.</em></h2>
            <p className="location__address">
              Esquina com Santa Terezinha<br />
              Av. Minas Gerais, 1 — Cidade Nova<br />
              Marabá — PA · 68501-430
            </p>
            <div className="location__actions">
              <a className="button button--cream" href={mapsUrl} target="_blank" rel="noreferrer">
                <MapPin aria-hidden="true" />
                Abrir no Google Maps
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="phone-link" href="tel:+5594988040853">
                <small>WhatsApp</small>
                (94) 98804-0853
              </a>
            </div>
          </div>

          <div className="location__card">
            <Image
              src="/logo-circular.png"
              alt="Marca circular da Arena Brothers Beach Tennis"
              width={132}
              height={132}
              className="location__logo"
            />
            <span>Você está chegando</span>
            <strong>Arena<br />Brothers</strong>
            <div className="location__coords">Cidade Nova · Marabá / PA</div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Abrir localização da Arena Brothers no Google Maps">
              Ver rota <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="page-shell final-cta__inner">
          <div>
            <span>Pronto para jogar?</span>
            <h2>Chame a sua dupla.<br /><em>A areia espera.</em></h2>
          </div>
          <a className="button button--graphite" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Falar com a Arena
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <div className="page-shell footer__top">
          <BrandMark />
          <p>Beach tennis, energia e comunidade em Marabá.</p>
          <a href="#inicio">Voltar ao topo <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="page-shell footer__bottom">
          <span>© 2026 Arena Brothers Beach Tennis</span>
          <span>Imagem principal ilustrativa.</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Arena Brothers pelo WhatsApp">
        <MessageCircle aria-hidden="true" />
      </a>
    </main>
  );
}
