"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Propuesta() {
  // Current date formatting for proposal
  const [currentDate, setCurrentDate] = useState('');
  const [validUntil, setValidUntil] = useState('');

  useEffect(() => {
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + 30);
    
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('es-ES', options));
    setValidUntil(future.toLocaleDateString('es-ES', options));
  }, []);

  // Form states for the generic proposal customizer
  const [clientName, setClientName] = useState('Cliente Aliado');
  const [clientSector, setClientSector] = useState('Gastronómico / Ecommerce');

  // Calculator states
  const [riders, setRiders] = useState(2);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(6);
  const [includeSundays, setIncludeSundays] = useState(false);
  const [customRequest, setCustomRequest] = useState('');

  // Calculate prices (typical Colombian market rates for delivery logistics B2B, in COP)
  // Base rate per hour per rider (includes salary, social security, bike wear/rodamiento, admin fee)
  const baseHourlyRate = 14500; 
  const sundaySurchargePercent = 0.35; // 35% surcharge on Sundays

  const calculateTotal = () => {
    // Normal days per month calculation: daysPerWeek * 4.33 weeks per month
    const ordinaryDaysPerWeek = includeSundays ? Math.max(1, daysPerWeek - 1) : daysPerWeek;
    const sundayDaysPerWeek = includeSundays ? 1 : 0;

    const ordinaryHoursPerMonth = riders * ordinaryDaysPerWeek * hoursPerDay * 4.33;
    const sundayHoursPerMonth = riders * sundayDaysPerWeek * hoursPerDay * 4.33;

    const ordinaryCost = ordinaryHoursPerMonth * baseHourlyRate;
    const sundayCost = sundayHoursPerMonth * baseHourlyRate * (1 + sundaySurchargePercent);

    let total = ordinaryCost + sundayCost;

    // Apply volume discounts
    if (riders >= 3 && riders <= 5) {
      total = total * 0.95; // 5% discount
    } else if (riders > 5) {
      total = total * 0.90; // 10% discount
    }

    return Math.round(total);
  };

  const totalEstimate = calculateTotal();
  const perRiderEstimate = Math.round(totalEstimate / riders);

  const formatCOP = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handlePrint = () => {
    window.print();
  };

  // Build custom WhatsApp message with current simulation details
  const getWhatsAppLink = () => {
    const text = `Hola Ophal Line, estoy interesado en la propuesta comercial.
*Cliente:* ${clientName} (${clientSector})
*Detalles de simulación:*
- Mensajeros requeridos: ${riders}
- Horas diarias: ${hoursPerDay}h
- Días por semana: ${daysPerWeek} días
- Incluye domingos/festivos: ${includeSundays ? 'Sí' : 'No'}
- Estimado mensual: ${formatCOP(totalEstimate)} COP
- Comentarios adicionales: ${customRequest || 'Ninguno'}

Me gustaría programar una reunión para formalizar una cotización oficial.`;
    return `https://wa.me/573205135502?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-red-500 selection:text-white print:bg-white print:text-black font-sans pb-20">
      
      {/* Control panel for customized client (Hidden in print) */}
      <div className="bg-[#001f54] text-white py-4 px-6 sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs uppercase tracking-wider font-extrabold text-red-400">Personalizar Propuesta:</span>
            <div className="flex gap-2">
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value || 'Cliente Aliado')}
                placeholder="Nombre del cliente"
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-red-500 text-white placeholder-white/50"
              />
              <input
                type="text"
                value={clientSector}
                onChange={(e) => setClientSector(e.target.value || 'Gastronómico / Ecommerce')}
                placeholder="Sector comercial"
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-red-500 text-white placeholder-white/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow transition duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              Exportar / Imprimir PDF
            </button>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg font-bold text-sm transition duration-200"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Document Wrapper */}
      <div className="max-w-4xl mx-auto my-8 p-6 md:p-12 bg-white shadow-xl rounded-3xl border border-slate-100 print:shadow-none print:border-none print:my-0 print:p-0">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b-2 border-slate-100 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 w-3 h-8 rounded-full block"></span>
              <h1 className="text-3xl md:text-4xl font-black text-[#001f54] tracking-tight uppercase">Propuesta Comercial</h1>
            </div>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Servicios Logísticos y Operativos de Delivery</p>
          </div>
          <div className="relative h-16 w-52">
            <img
              src="/logo3.png"
              alt="Ophal Line"
              className="object-contain h-full w-full"
              onError={(e) => {
                e.currentTarget.src = "/logo.png";
              }}
            />
          </div>
        </div>

        {/* METADATA BLOCK */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 bg-slate-50 border-b border-slate-100 px-6 my-6 rounded-2xl print:bg-slate-50/50">
          <div>
            <span className="text-xs uppercase text-slate-400 font-bold block">PREPARADO PARA</span>
            <span className="text-sm font-extrabold text-[#001f54]">{clientName}</span>
            <span className="text-xs text-slate-500 block">{clientSector}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 font-bold block">FECHA EMISIÓN</span>
            <span className="text-sm font-semibold text-slate-800">{currentDate || 'Cargando...'}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 font-bold block">VALIDEZ</span>
            <span className="text-sm font-semibold text-slate-800">{validUntil || '30 días'}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 font-bold block">PROPUESTA ID</span>
            <span className="text-sm font-mono font-bold text-red-600">OL-2026-GEN-01</span>
          </div>
        </div>

        {/* CARTA DE PRESENTACION */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-[#001f54] flex items-center gap-2">
            <span>🤝</span> Carta de Acompañamiento
          </h2>
          <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
            Estimado equipo de <strong className="font-semibold text-slate-800">{clientName}</strong>,
          </p>
          <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
            En <strong>Ophal Line Delivery</strong> entendemos que la última milla es el punto de contacto más crítico entre su marca y su cliente final. Por esta razón, no solo suministramos mensajeros; diseñamos la infraestructura logística de su entrega urbana para que cada envío sea una experiencia de seguridad, rapidez y confianza.
          </p>
          <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
            Nuestra propuesta está enfocada en mitigar sus pasivos laborales mediante contratación directa, asegurar el cumplimiento de horarios con supervisión activa y brindarle herramientas de rastreo en tiempo real para optimizar su toma de decisiones.
          </p>
        </div>

        {/* NUESTROS SERVICIOS */}
        <div className="space-y-6 mb-10">
          <h2 className="text-xl font-bold text-[#001f54] border-b pb-2 border-slate-100 flex items-center gap-2">
            <span>🏍️</span> Portafolio de Soluciones Logísticas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="border border-slate-100 hover:border-red-100 p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition duration-200 space-y-2">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl font-bold">🍔</div>
              <h3 className="font-extrabold text-slate-900 text-base">Mensajero Fijo y Exclusivo (Full-Time)</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Asignación de mensajeros uniformados con moto propia para su operación exclusiva. Ideal para restaurantes, cadenas gastronómicas y ecommerce con alto flujo. Cubrimiento domingo a domingo.
              </p>
            </div>

            <div className="border border-slate-100 hover:border-red-100 p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition duration-200 space-y-2">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl font-bold">🚀</div>
              <h3 className="font-extrabold text-slate-900 text-base">Distribución Urbana Inmediata (Express)</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Gestión estructurada de entregas inmediatas a nivel urbano. Optimizamos rutas y tiempos de despacho para garantizar que los pedidos lleguen antes de lo planeado y en perfectas condiciones.
              </p>
            </div>

            <div className="border border-slate-100 hover:border-red-100 p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition duration-200 space-y-2">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl font-bold">📢</div>
              <h3 className="font-extrabold text-slate-900 text-base">Mercadeo &amp; Logística de Publicidad</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Campañas especiales de entrega física de material publicitario (volantes, catálogos, muestras) coordinada con reportes de entrega y geolocalización, impulsando su crecimiento comercial.
              </p>
            </div>

            <div className="border border-slate-100 hover:border-red-100 p-5 rounded-2xl bg-white hover:bg-slate-50/50 transition duration-200 space-y-2">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl font-bold">📡</div>
              <h3 className="font-extrabold text-slate-900 text-base">Coordinación &amp; Supervisión Activa</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Supervisores permanentes apoyan a los conductores en ruta para resolver imprevistos y asegurar cero retrasos. Reportamos indicadores de rendimiento semanales y mensuales.
              </p>
            </div>

          </div>
        </div>

        {/* BENEFICIOS / DIFERENCIADORES */}
        <div className="space-y-6 mb-10 bg-[#001f54] text-white p-8 rounded-3xl relative overflow-hidden print:bg-slate-900 print:text-white">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-[60px] pointer-events-none"></div>
          
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <span>💎</span> ¿Por qué elegirnos como su Aliado Logístico?
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-bold text-red-400 text-sm">Contratación Directa</h3>
              <p className="text-xs text-blue-100/80 font-light leading-relaxed">
                Asumimos la responsabilidad prestacional, reduciendo su riesgo laboral o civil solidario al 100%.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-red-400 text-sm">Control Satelital GPS</h3>
              <p className="text-xs text-blue-100/80 font-light leading-relaxed">
                Seguimiento permanente de rutas, velocidades, tiempos y pruebas digitales de entrega en tiempo real.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-red-400 text-sm">Dotación Completa</h3>
              <p className="text-xs text-blue-100/80 font-light leading-relaxed">
                Personal uniformado con maleta de carga, impermeable y herramientas de bioseguridad, protegiendo su imagen corporativa.
              </p>
            </div>
          </div>
        </div>

        {/* COTIZADOR INTERACTIVO */}
        <div className="space-y-6 mb-10 p-6 md:p-8 border border-slate-100 rounded-3xl bg-slate-50/50 print:bg-white print:border print:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-[#001f54] flex items-center gap-2">
                <span>📊</span> Estimador de Tarifas Logísticas
              </h2>
              <p className="text-xs text-slate-500 font-light mt-1">Calcula un presupuesto inicial adaptado al tamaño de tu operación.</p>
            </div>
            <div className="bg-red-50 text-red-600 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider inline-block self-start md:self-auto">
              Simulador Comercial
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Inputs */}
            <div className="space-y-5 print:hidden">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Número de Mensajeros Asignados:</span>
                  <span className="text-red-600 font-bold">{riders} {riders === 1 ? 'mensajero' : 'mensajeros'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={riders}
                  onChange={(e) => setRiders(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Horas de Cobertura Diaria:</span>
                  <span className="text-red-600 font-bold">{hoursPerDay} horas</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  step="2"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Días de Cobertura Semanal:</span>
                  <span className="text-red-600 font-bold">{daysPerWeek} días</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="7"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                <input
                  type="checkbox"
                  id="sundays"
                  checked={includeSundays}
                  onChange={(e) => setIncludeSundays(e.target.checked)}
                  className="accent-red-600 h-4 w-4 rounded"
                />
                <label htmlFor="sundays" className="text-xs font-semibold text-slate-700 cursor-pointer select-none">
                  Incluir operación en Domingos y Festivos (+Recargo de ley)
                </label>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 block">Requerimientos Especiales</label>
                <input
                  type="text"
                  value={customRequest}
                  onChange={(e) => setCustomRequest(e.target.value)}
                  placeholder="Ej: Moto con baúl térmico grande, entrega nocturna..."
                  className="w-full bg-white border border-slate-200 text-xs px-3 py-2 rounded-xl outline-none focus:border-red-500 font-light"
                />
              </div>
            </div>

            {/* Static breakdown for Print view */}
            <div className="hidden print:block space-y-2">
              <p className="text-sm font-semibold text-slate-700">Configuración Seleccionada:</p>
              <ul className="text-xs text-slate-600 space-y-1 bg-slate-50 p-4 rounded-xl">
                <li>• <strong>Mensajeros exclusivos:</strong> {riders}</li>
                <li>• <strong>Horas diarias contratadas:</strong> {hoursPerDay}h</li>
                <li>• <strong>Días de operación semanal:</strong> {daysPerWeek} días</li>
                <li>• <strong>Operación Dominical:</strong> {includeSundays ? 'Sí (Incluido en tarifa)' : 'No'}</li>
                {customRequest && <li>• <strong>Especificaciones:</strong> {customRequest}</li>}
              </ul>
            </div>

            {/* Price Output display */}
            <div className="bg-gradient-to-br from-[#001f54] to-[#003087] text-white p-6 md:p-8 rounded-2xl text-center space-y-4 shadow-lg print:bg-slate-100 print:text-slate-900 print:from-slate-100 print:to-slate-100 print:shadow-none print:border">
              <span className="text-xs uppercase tracking-widest text-red-400 font-bold block print:text-red-600">PRESUPUESTO ESTIMADO MENSUAL</span>
              
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight print:text-[#001f54]">
                  {formatCOP(totalEstimate)}
                </div>
                <span className="text-[10px] text-blue-200/80 font-light block print:text-slate-500">Valor de operación mensual B2B + I.V.A</span>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-left print:border-slate-200">
                <div>
                  <span className="text-[10px] text-blue-200/70 block print:text-slate-400">COSTO PROMEDIO / AGENTE</span>
                  <span className="text-xs font-bold print:text-[#001f54]">{formatCOP(perRiderEstimate)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-200/70 block print:text-slate-400">VOLUMEN DE DESCUENTO</span>
                  <span className="text-xs font-bold text-red-400 print:text-red-600">
                    {riders >= 6 ? '10% OFF Aplicado' : riders >= 3 ? '5% OFF Aplicado' : 'Precio base'}
                  </span>
                </div>
              </div>
              
              <p className="text-[9px] text-blue-200/60 leading-normal font-light pt-2 print:text-slate-400">
                * Las tarifas son estimadas y pueden variar tras evaluar volumen de despacho regular, kilometraje, pólizas de mercancía y horas de corte exactas.
              </p>
            </div>

          </div>
        </div>

        {/* TERMINOS COMERCIALES */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 py-6 border-y border-slate-100">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#001f54] mb-3">Términos Comerciales</h4>
            <ul className="text-xs text-slate-500 space-y-2 font-light">
              <li className="flex items-start gap-1.5"><span className="text-red-500">✓</span> <strong>Forma de pago:</strong> Facturación quincenal vencida con plazos de pago a 15 días.</li>
              <li className="flex items-start gap-1.5"><span className="text-red-500">✓</span> <strong>Contratación:</strong> Contrato de prestación de servicios comerciales a término indefinido con preaviso de 30 días.</li>
              <li className="flex items-start gap-1.5"><span className="text-red-500">✓</span> <strong>Seguridad:</strong> Póliza de responsabilidad civil extracontractual y verificación de antecedentes en cada reclutamiento.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#001f54] mb-3">Soporte y Garantías</h4>
            <ul className="text-xs text-slate-500 space-y-2 font-light">
              <li className="flex items-start gap-1.5"><span className="text-red-500">✓</span> <strong>Novedades:</strong> Reposición inmediata del mensajero en caso de incapacidad, falla vehicular o ausencia injustificada.</li>
              <li className="flex items-start gap-1.5"><span className="text-red-500">✓</span> <strong>Informes de Gestión:</strong> Entrega mensual de KPIs de cumplimiento de tiempos de entrega y encuestas de satisfacción.</li>
            </ul>
          </div>
        </div>

        {/* FIRMAS */}
        <div className="grid grid-cols-2 gap-12 pt-8 pb-4">
          <div className="space-y-4">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Por Ophal Line Delivery</span>
            <div className="h-16 flex items-end">
              {/* Electronic Signature Placeholder */}
              <div className="border-b border-slate-300 w-full pb-1 text-xs italic font-serif text-slate-500 text-center">
                Carlos Andrés Ordóñez - Representante Legal
              </div>
            </div>
            <div className="text-[10px] text-slate-500">
              <p className="font-semibold text-slate-700">Carlos Andrés Ordóñez</p>
              <p>Cel: +57 320 513 5502</p>
              <p>Gerencia General</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Por {clientName}</span>
            <div className="h-16 flex items-end">
              <div className="border-b border-slate-300 w-full pb-1"></div>
            </div>
            <div className="text-[10px] text-slate-500">
              <p className="font-semibold text-slate-700">Aceptación de Oferta</p>
              <p>Nombre:</p>
              <p>C.C / NIT:</p>
            </div>
          </div>
        </div>

        {/* PRINT FOOTER */}
        <div className="hidden print:block text-[9px] text-slate-400 text-center pt-8 border-t border-slate-100">
          Ophal Line Delivery — Servicios Logísticos Integrales de Entrega Urbana. Todos los derechos reservados.
        </div>

      </div>

      {/* WHATSAPP CTA BAR (Hidden in print) */}
      <div className="max-w-4xl mx-auto px-6 print:hidden">
        <div className="bg-[#102244] border-l-4 border-red-600 p-6 rounded-r-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">¿Estás listo para optimizar tu logística?</h4>
            <p className="text-xs text-blue-100/70 font-light">Envíanos tu propuesta simulada directamente a WhatsApp para agendar una cita o llamada comercial.</p>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 -translate-y-[1px] hover:-translate-y-[2px] transition duration-200 cursor-pointer self-start md:self-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-4.86c1.62.962 3.21 1.446 4.903 1.447 5.434 0 9.858-4.417 9.861-9.848.002-2.63-1.018-5.101-2.871-6.958-1.852-1.855-4.32-2.877-6.953-2.879-5.438 0-9.86 4.418-9.863 9.851-.001 1.8.479 3.502 1.391 5.037L1.152 21.8l4.845-1.271L6.892 19.14zM18.21 15.01c-.34-.17-2.01-1-2.32-1.11-.31-.11-.53-.17-.75.17-.22.34-.85 1.11-1.04 1.3-.19.19-.38.21-.72.04-1.802-.9-3.05-1.95-4.22-3.96-.3-.52.3-.48.86-1.59.09-.17.04-.32-.02-.45-.06-.13-.53-1.3-.73-1.78-.19-.48-.4-.41-.55-.41h-.47c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.94 2.56 1.07 2.73c.13.17 1.86 2.85 4.5 3.99.63.27 1.12.43 1.51.55.63.2 1.21.17 1.67.1.51-.08 1.56-.64 1.78-1.25.22-.61.22-1.14.16-1.25-.07-.11-.26-.17-.6-.34z" />
            </svg>
            Enviar Simulación a WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
