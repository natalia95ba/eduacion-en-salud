
import React from "react";
import {
  Home, Footprints, Dumbbell, Apple, Bed,
  Smile, CalendarCheck, Activity, PersonStanding,
  MoveUpRight, Heart, ChevronRight, Play,
  Clock, FileText, Download
} from "lucide-react";
import { Link } from "react-router-dom";
import "./css/PausaBlocks.css";

const base = import.meta.env.BASE_URL;

const menu = [
  ["Inicio", Home, "/dashboard"],
  ["Movimiento cotidiano", Footprints, "/movimiento"],
  ["Fuerza y capacidad cardiovascular", Dumbbell, "/fuerza"],
  ["Alimentación", Apple, "/alimentacion"],
  ["Calma", Bed, "/calma"],
  ["Hábitos y continuidad", CalendarCheck, "/habitos"],
];

const experiences = [
  {
    title: "Dale un respiro a tu espalda",
    description: "Pequeños movimientos para cambiar de postura y aliviar la tensión acumulada.",
    image: "images/movimiento.jpeg",
    icon: Activity,
  },
  {
    title: "Libera tu cuello",
    description: "Movimientos suaves para recuperar movilidad después de muchas horas sentado.",
    image: "images/cuello.jpeg",
    icon: PersonStanding,
  },
  {
    title: "Activa tus piernas",
    description: "Incorpora pequeños momentos de movimiento durante tu jornada.",
    image: "images/piernas.jpeg",
    icon: Footprints,
  },
];

export default function Movimiento() {
  return (
    <div className="pausa-layout">
      <aside className="pausa-sidebar">
            <div className="pausa-logo">PAUSA<div/></div>


        <nav>
          {menu.map(([label, Icon, path]) => (
            <Link
              key={path}
              to={path}
              className={`pausa-nav ${path === "/movimiento" ? "selected" : ""}`}
            >
              <Icon size={25} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="pausa-content">
        <header className="pausa-heading">
          <div className="pausa-heading-icon">
            <Footprints size={38} />
          </div>
          <div>
            <small>Bloque 1</small>
            <h1>Movimiento cotidiano</h1>
            <p>Muévete más, incluso en los días más ocupados.</p>
          </div>
        </header>

        <div className="pausa-force-grid">
          <section className="pausa-force-list">
            {experiences.map(({ title, description, image, icon: Icon }) => (
              <article className="pausa-force-card" key={title}>
                <img src={`${base}${image}`} alt="" />
                <div className="pausa-round-icon">
                  <Icon size={34} />
                </div>
                <div className="pausa-card-copy">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <ChevronRight size={30} />
              </article>
            ))}
          </section>

          <section className="pausa-example">
            <h2>◈ Ejemplo de estructura de cada experiencia</h2>
            <p className="pausa-example-subtitle">
              Ejemplo: «Dale un respiro a tu espalda»
            </p>

            <div className="pausa-video-card">
              <div className="pausa-video-placeholder">
                <Play size={38} />
              </div>
              <div>
                <h3>1. Entiende tu PAUSA</h3>
                <strong><Clock size={16} /> Vídeo de introducción (1–2 min)</strong>
                <p>
                  Comprende por qué es importante interrumpir el tiempo
                  sentado y cómo introducir pequeñas pausas activas.
                </p>
              </div>
            </div>

            <h3 className="pausa-section-title">
              <Play size={24} /> 2. Ponlo en práctica
            </h3>

            <div className="pausa-practice">
              <div>
                <Activity />
                <strong>PAUSA sentado</strong>
                <span>Secuencia guiada de movimientos.</span>
              </div>
              <div>
                <MoveUpRight />
                <strong>PAUSA de pie</strong>
                <span>Activa tu cuerpo en pocos minutos.</span>
              </div>
            </div>

            <h3 className="pausa-section-title">
              <FileText size={23} /> 3. Recursos de uso rápido
            </h3>

            <div className="pausa-resources">
              <div>
                <FileText /> Ficha de ejercicios sentado ↓
              </div>
              <div>
                <Download /> Ficha de ejercicios de pie ↓
              </div>
            </div>
          </section>
        </div>

        <footer className="pausa-footer">
          <div className="pausa-footer-title">
            ◈ <strong>Resumen del bloque</strong>
          </div>
          <div className="pausa-footer-item">
            <Activity />
            <div>
              <strong>Pausas activas</strong>
              <span>Interrumpe el sedentarismo.</span>
            </div>
          </div>
          <div className="pausa-footer-item">
            <Footprints />
            <div>
              <strong>Más movimiento</strong>
              <span>Pequeños cambios cotidianos.</span>
            </div>
          </div>
          <div className="pausa-footer-item">
            <Heart />
            <div>
              <strong>Cuida tu cuerpo</strong>
              <span>Reduce la tensión acumulada.</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
