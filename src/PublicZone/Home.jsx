
import React from "react";
import {
  Users,
  Zap,
  Armchair,
  Sprout,
  Footprints,
  Dumbbell,
  Apple,
  Flower2,
  Check,
  MessageCircle,
  ClipboardCheck,
  Rocket,
  ArrowRight,
  Mail,
  Leaf,
  HeartPulse,
} from "lucide-react";
import "./css/Home.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


const services = [
  {
    title: "Movimiento cotidiano",
    description:
      "Pequeñas oportunidades para moverse más y reducir el tiempo sedentario.",
    image: "/images/movimiento.jpeg",
    icon: Footprints,
    link: "/movimiento",
  },
  {
    title: "Fuerza y capacidad cardiovascular",
    description:
      "Herramientas para incorporar el ejercicio físico de forma realista y sostenible.",
    image: "/images/fuerza.jpeg",
    icon: Dumbbell,
    link: "/fuerza",
  },
  {
    title: "Alimentación",
    description:
      "Soluciones prácticas para organizar mejor las comidas, incluso con poco tiempo.",
    image: "/images/alimentacion.jpeg",
    icon: Apple,
    link: "/alimentacion",
  },
  {
    title: "Calma y descanso",
    description:
      "Estrategias para gestionar el estrés cotidiano y favorecer un descanso de calidad.",
    image: "/images/calma.jpeg",
    icon: Flower2,
    link: "/calma",
  },
  {
    title: "Hábitos",
    description:
      "Recursos para facilitar cambios sostenibles sin depender de la motivación constante.",
    image: "/images/habitos.jpeg",
    icon: Check,
    link: "/habitos",
  },
];

const benefits = [
  {
    icon: Users,
    text: "Equipos con más bienestar y disposición",
  },
  {
    icon: Zap,
    text: "Más energía y mejor gestión del estrés",
  },
  {
    icon: Armchair,
    text: "Menos molestias asociadas al trabajo sedentario",
  },
  {
    icon: Sprout,
    text: "Una cultura de salud más activa y sostenible",
  },
];

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Nos conocemos",
    description:
      "Reunión inicial gratuita para escuchar tus necesidades, objetivos y contexto.",
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: "Diseñamos la propuesta",
    description:
      "Seleccionamos las experiencias y herramientas que mejor encajan con tu equipo.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Lo llevamos a la práctica",
    description:
      "Acordamos el formato, los contenidos y la organización de las actividades para facilitar la participación.",
  },
];


function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-background">
        <img
          src="/images/juanma-desire.png"
          alt="Equipo de Educación en Salud"
        />
      </div>

      <div className="home-hero-content">
        <h1>
          Bienestar práctico
          <br />
          para empresas
          <br />
          y personas
        </h1>

        <div className="home-underline" />

        <p>
          Talleres y experiencias de bienestar
          <br className="desktop-break" />
          adaptados a las necesidades de tu equipo.
        </p>

        <a href="/contacto" className="home-primary-button">
          Solicitar una primera reunión gratuita
          <ArrowRight size={23} />
        </a>
      </div>

      <div className="home-benefits">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div className="home-benefit" key={index}>
              <div className="home-benefit-icon">
                <Icon size={31} strokeWidth={1.8} />
              </div>
              <span>{benefit.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="home-introduction">
      <div className="home-intro-title">
        <h2>
          El bienestar no debería
          <br />
          ser otra tarea pendiente
        </h2>
        <div className="home-underline small" />

        <p>
          Transformamos los conocimientos
          <br className="desktop-break" />
          sobre salud en herramientas sencillas,
          <br className="desktop-break" />
          prácticas y aplicables al día a día de tu equipo.
        </p>
      </div>

      <div className="home-intro-points">
        <div>
          <Check size={18} />
          <span>Propuestas realistas y adaptadas a tu organización.</span>
        </div>

        <div>
          <Check size={18} />
          <span>Formatos flexibles (presencial, online o híbrido).</span>
        </div>

        <div>
          <Check size={18} />
          <span>Enfoque cercano, participativo y con aplicaciones reales.</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="home-services" id="servicios">
      <div className="home-section-heading">
        <h2>Servicios de bienestar</h2>
        <p>
          Experiencias y talleres que abordan los principales pilares de la
          salud, con un enfoque práctico y adaptado al entorno laboral.
        </p>
      </div>

      <div className="home-service-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a
              href={service.link}
              className="home-service-card"
              key={service.title}
            >
              <div className="home-service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="home-service-icon">
                <Icon size={29} strokeWidth={1.8} />
              </div>

              <div className="home-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="home-service-link">
                  Descubrir <ArrowRight size={15} />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="home-how">
      <div className="home-how-heading">
        <h2>Cómo trabajamos</h2>
        <div className="home-underline small" />
      </div>

      <p className="home-how-subtitle">
        Un proceso sencillo, cercano y adaptado a las necesidades de cada empresa.
      </p>

      <div className="home-steps">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <React.Fragment key={step.number}>
              <article className="home-step">
                <div className="home-step-icon">
                  <Icon size={42} strokeWidth={1.7} />
                </div>

                <div className="home-step-text">
                  <h3>
                    {step.number}. {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </article>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="home-step-arrow"
                  size={27}
                  strokeWidth={2.5}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

function ContactBanner() {
  return (
    <section className="home-contact-banner">
      <h2>
        ¿Hablamos de
        <br />
        tu empresa?
      </h2>

      <div className="home-contact-divider" />

      <p>
        Cuéntanos qué te gustaría ofrecer a tu equipo.
        <br />
        En una primera reunión gratuita podremos conocer
        <br />
        vuestro contexto y valorar cómo podemos ayudaros.
      </p>

      <a href="/contacto" className="home-contact-button">
        Solicitar reunión gratuita
        <ArrowRight size={21} />
      </a>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <Header />

      <main>
        <Hero />
        <Introduction />
        <Services />
        <HowWeWork />
      </main>
            <Footer/>
      
    </div>
  );
}
