"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5b4c7900-d07b-46cd-8671-76f6eaf5dcf3',
          Nombre: formData.nombre,
          Email: formData.email,
          Teléfono: formData.telefono,
          Mensaje: formData.mensaje,
          subject: 'Nueva Solicitud de Servicio - Ophal Line',
          from_name: 'Web Ophal Line'
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('Web3Forms response error:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-red-500 selection:text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-12 w-40 overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="Ophal Line"
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if logo.jpeg is not copied yet
                  e.currentTarget.src = "/logo.png";
                }}
              />
            </div>
          </a>

          <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
            <a href="#inicio" className="hover:text-red-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300">
              Inicio
            </a>
            <a href="#nosotros" className="hover:text-red-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300">
              Quiénes Somos
            </a>
            <a href="#servicios" className="hover:text-red-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-red-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/573223073678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-red-600/20 hover:shadow-red-700/30 -translate-y-[1px] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200"
          >
            Solicitar Servicio
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen bg-gradient-to-br from-[#001f54] via-[#003087] to-[#004aad] text-white flex items-center pt-24 pb-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 max-w-xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              Envíos Express a Nivel Urbano
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Ophal Line
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Envíos Express
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100/90 leading-relaxed">
              Más de 5 años ofreciendo soluciones rápidas, eficientes y seguras en domicilios, mensajería masiva y logística urbana para empresas y particulares.
            </p>
            <div className="flex gap-4 flex-wrap pt-2">
              <a
                href="https://wa.me/573223073678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-xl shadow-red-600/30 hover:shadow-red-700/40 -translate-y-[1px] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200"
              >
                Solicitar Servicio
              </a>
              <a
                href="#servicios"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-extrabold text-lg transition-all duration-200"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="flex justify-center relative animate-float">
            {/* Glowing background halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <img
              src="/logo.jpeg"
              alt="Ophal Line Envíos Express"
              className="w-full max-w-[460px] object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section
        id="nosotros"
        className="py-24 bg-[#0a1931] text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md shadow-red-600/20">
              Quiénes Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Organización especializada <br className="hidden sm:inline" />
              en logística urbana de excelencia
            </h2>
            <p className="text-lg text-blue-100/80 leading-relaxed font-light">
              Más de 5 años liderando la distribución de altos volúmenes y entregas inmediatas a nivel urbano, con personal confiable, tecnología en tiempo real y procesos que garantizan calidad en cada entrega.
            </p>
          </div>

          {/* Stats boxes (4 columns) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { num: '+5', label: 'Años de experiencia' },
              { num: '24/7', label: 'Dom a Dom operación' },
              { num: '100%', label: 'Personal con dotación' },
              { num: 'GPS', label: 'Rastreo en tiempo real' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center backdrop-blur-sm hover:border-red-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mb-2">
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-blue-100/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Value cards (3 columns, left red border) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🏆',
                title: 'Selección rigurosa',
                desc: 'Procesos de selección que nos permiten garantizar personal confiable, preparado y amable en cada punto de entrega.'
              },
              {
                icon: '📡',
                title: 'Tecnología avanzada',
                desc: 'Herramientas que permiten conocer ubicación exacta, velocidad, ruta, tiempos e imágenes de cada visita en tiempo real.'
              },
              {
                icon: '🤝',
                title: 'Acompañamiento total',
                desc: 'Supervisión activa durante toda la operación con indicadores de rendimiento semanales, quincenales y mensuales.'
              }
            ].map((val, i) => (
              <div 
                key={i} 
                className="bg-[#102244] border-l-4 border-red-600 p-8 rounded-r-3xl shadow-2xl hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-blue-100/70 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section
        id="servicios"
        className="py-24 bg-[#f4f7fc] relative"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md shadow-red-600/20">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Tarifas diseñadas <br className="hidden sm:inline" />
              para cada tipo de operación
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Ofrecemos cuatro modalidades de servicio con personal calificado, tecnología y supervisión incluidos en todas.
            </p>
          </div>

          {/* 4 Grid cards (2x2) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: '🏍️',
                title: 'Servicio de Domicilios',
                desc: 'Entregas inmediatas con mensajeros propios, contratación directa y programación Domingo a Domingo según punto de venta.',
                color: 'border-t-4 border-t-red-600'
              },
              {
                icon: '✉️',
                title: 'Entrega de Correspondencia',
                desc: 'Distribución masiva de documentos, cartas y comunicados con trazabilidad completa y confirmación de entrega.',
                color: 'border-t-4 border-t-blue-600'
              },
              {
                icon: '📦',
                title: 'Administración Delivery',
                desc: 'Gestión integral del servicio de entregas para negocios que requieren operación continua y control de indicadores.',
                color: 'border-t-4 border-t-blue-600'
              },
              {
                icon: '📋',
                title: 'Trámites Personales',
                desc: 'Gestión de diligencias y trámites con personal de confianza, puntual y con comunicación en tiempo real.',
                color: 'border-t-4 border-t-blue-600'
              }
            ].map((srv, i) => (
              <div 
                key={i} 
                className={`bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-start gap-4 ${srv.color}`}
              >
                <div className="text-5xl p-3 bg-gray-50 rounded-2xl">{srv.icon}</div>
                <h3 className="text-2xl font-black text-gray-900">{srv.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* Dark Blue Box "TODOS NUESTROS SERVICIOS INCLUYEN" */}
          <div className="bg-[#0a1931] text-white p-10 md:p-12 rounded-3xl max-w-5xl mx-auto shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="text-center mb-10">
              <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md">
                Todos Nuestros Servicios Incluyen
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personal calificado',
                  desc: 'Contratación directa con contrato por prestación de servicio.'
                },
                {
                  title: 'Rastreo tecnológico',
                  desc: 'Ubicación, velocidad, ruta, tiempos e imágenes en tiempo real.'
                },
                {
                  title: 'Dotación corporativa',
                  desc: 'Todo el personal uniformado con identidad Ophal Line.'
                },
                {
                  title: 'Indicadores de rendimiento',
                  desc: 'Reportes semanales, quincenales y mensuales para tu control.'
                },
                {
                  title: 'Control de horarios',
                  desc: 'Registro de entrada, salida y comunicación constante.'
                },
                {
                  title: 'Supervisión activa',
                  desc: 'Apoyo disponible durante toda la operación para minimizar retrasos.'
                }
              ].map((inc, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-extrabold text-lg text-white flex items-center gap-2">
                    <span className="text-red-500">✔</span> {inc.title}
                  </h4>
                  <p className="text-blue-100/70 text-sm font-light leading-relaxed">{inc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Single large card at the bottom */}
          <div className="bg-white border-l-4 border-l-red-600 p-8 rounded-r-2xl max-w-5xl mx-auto shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-5xl p-3 bg-red-50 text-red-600 rounded-2xl flex-shrink-0">📢</div>
            <div className="space-y-2">
              <h4 className="text-xl font-extrabold text-gray-900">Previsión y Mercadeo</h4>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                Adicionalmente ofrecemos servicio de mercadeo y logística para entrega de publicidad que impulse tu segmento comercial y fortalezca el área de domicilios. Nuestro equipo de supervisión está disponible en todos los tiempos de labor para garantizar cero interrupciones en la operación.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 bg-white relative"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md">
              Contáctanos
            </span>
            <h2 className="text-4xl font-black tracking-tight text-gray-900">
              Solicita tu servicio hoy mismo
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Déjanos tus datos y nos comunicaremos de inmediato para ofrecerte la mejor solución logística.
            </p>
          </div>

          {/* Tarjetas de Correos de Contacto */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              {
                icon: "✉️",
                title: "Contacto General",
                desc: "Para cotizaciones e información",
                email: "contacto@ophalline.com"
              },
              {
                icon: "🤝",
                title: "Servicio al Cliente",
                desc: "Soporte y rastreo de envíos",
                email: "servicioalcliente@ophalline.com"
              },
              {
                icon: "💼",
                title: "Gerencia General",
                desc: "Carlos Palechor — Director",
                email: "gerencia@ophalline.com"
              }
            ].map((correo, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="text-2xl">{correo.icon}</div>
                <h4 className="font-extrabold text-gray-900 text-sm">{correo.title}</h4>
                <p className="text-xs text-gray-500 font-light">{correo.desc}</p>
                <a 
                  href={`mailto:${correo.email}`} 
                  className="block text-red-600 hover:text-red-700 font-bold text-xs hover:underline pt-1 break-all"
                >
                  {correo.email}
                </a>
              </div>
            ))}
          </div>

          {isSubmitted ? (
            <div className="bg-white border border-green-100 p-8 md:p-12 rounded-3xl shadow-xl text-center space-y-6 animate-fade-in max-w-2xl mx-auto">
              <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900">¡Solicitud Recibida!</h3>
              <p className="text-gray-600 font-light max-w-md mx-auto">
                Gracias por contactar a Ophal Line. Hemos recibido tus datos y un asesor se comunicará contigo al teléfono <strong className="font-semibold text-gray-900">{formData.telefono}</strong> a la mayor brevedad.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
                }}
                className="text-sm font-extrabold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form 
              name="contacto"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl space-y-6"
            >
              <input type="hidden" name="form-name" value="contacto" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none p-4 rounded-xl transition-all font-light text-gray-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Tu correo de contacto"
                    className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none p-4 rounded-xl transition-all font-light text-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Teléfono / Celular</label>
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Ej: 322 307 3678"
                  className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none p-4 rounded-xl transition-all font-light text-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mensaje</label>
                <textarea
                  rows={5}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos qué necesitas (tipo de servicio, cantidad de entregas, etc.)"
                  className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none p-4 rounded-xl transition-all font-light resize-none text-gray-800"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-extrabold text-lg shadow-xl shadow-red-600/20 hover:shadow-red-700/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando solicitud...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080f1e] text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-black">Ophal Line Envíos Express</h3>
            <p className="text-gray-400 font-light text-sm max-w-sm">
              Tu aliado estratégico en logística, distribución inmediata y entrega urbana. Experiencia, tecnología y excelencia garantizada.
            </p>
            <div className="text-xs text-gray-500 pt-4 flex flex-col gap-1.5">
              <span>© {new Date().getFullYear()} Ophal Line. Todos los derechos reservados.</span>
              <span className="text-gray-600">
                Realizada por <strong className="font-semibold text-gray-400">Matrix Producciones</strong> —{' '}
                <Link href="/diario" className="text-red-500 hover:text-red-400 hover:underline transition-colors font-semibold">
                  Ver Diario de Desarrollo 📑
                </Link>
              </span>
            </div>
          </div>

          <div className="space-y-4 text-left md:text-right">
            <h4 className="font-extrabold text-lg text-white">Información de Contacto</h4>
            <div className="space-y-2 text-gray-400 font-light text-sm">
              <p className="text-white font-semibold">Kelly Johanna Herrera — Representante Legal</p>
              <p className="text-red-500 font-semibold text-base">Cel: 322 307 3678</p>
              <div className="pt-2 space-y-1 text-xs text-gray-400">
                <p>Contacto: <a href="mailto:contacto@ophalline.com" className="text-red-400 hover:text-red-300 transition-colors font-medium">contacto@ophalline.com</a></p>
                <p>Servicio al Cliente: <a href="mailto:servicioalcliente@ophalline.com" className="text-red-400 hover:text-red-300 transition-colors font-medium">servicioalcliente@ophalline.com</a></p>
                <p>Gerencia: <a href="mailto:gerencia@ophalline.com" className="text-red-400 hover:text-red-300 transition-colors font-medium">gerencia@ophalline.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/573223073678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4.5 rounded-full shadow-2xl hover:shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <svg 
          className="w-8 h-8 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-4.86c1.62.962 3.21 1.446 4.903 1.447 5.434 0 9.858-4.417 9.861-9.848.002-2.63-1.018-5.101-2.871-6.958-1.852-1.855-4.32-2.877-6.953-2.879-5.438 0-9.86 4.418-9.863 9.851-.001 1.8.479 3.502 1.391 5.037L1.152 21.8l4.845-1.271L6.892 19.14zM18.21 15.01c-.34-.17-2.01-1-2.32-1.11-.31-.11-.53-.17-.75.17-.22.34-.85 1.11-1.04 1.3-.19.19-.38.21-.72.04-1.802-.9-3.05-1.95-4.22-3.96-.3-.52.3-.48.86-1.59.09-.17.04-.32-.02-.45-.06-.13-.53-1.3-.73-1.78-.19-.48-.4-.41-.55-.41h-.47c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.94 2.56 1.07 2.73c.13.17 1.86 2.85 4.5 3.99.63.27 1.12.43 1.51.55.63.2 1.21.17 1.67.1.51-.08 1.56-.64 1.78-1.25.22-.61.22-1.14.16-1.25-.07-.11-.26-.17-.6-.34z" />
        </svg>
      </a>

    </main>
  );
}
