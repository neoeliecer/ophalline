import Link from 'next/link';

export default function PrivacyPolicyRepartidor() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="mb-8">
            <Link href="/politica-de-privacidad" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Volver a Políticas
            </Link>
          </div>
          
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Política de Privacidad - Ophal Line (App Repartidor)</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Última actualización: 14 de Julio de 2026</p>

            <p className="text-gray-600 dark:text-gray-300">
              Ophal Line ("nosotros", "nuestro" o "la aplicación") respeta la privacidad de nuestros socios repartidores ("repartidor", "driver" o "usted"). Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando utiliza nuestra aplicación móvil <strong>Ophal Line Repartidor</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium mt-4">
              Lea detenidamente esta política de privacidad. Al utilizar nuestra plataforma como repartidor asociado, usted acepta la recopilación y el uso de su información de acuerdo con esta política.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Para operar de manera efectiva como repartidor, recopilamos diferentes tipos de información:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Datos Personales y Profesionales:</strong> Su nombre, correo electrónico, número de teléfono, fotografía de perfil, licencia de conducir, identificación oficial, comprobantes de antecedentes penales (según lo requiera la ley) y documentación del vehículo (seguro, placa, tipo de vehículo).</li>
              <li><strong>Datos de Ubicación (Geolocalización Constante):</strong> La aplicación del repartidor requiere acceso a la ubicación en tiempo real, tanto en <strong>primer plano como en segundo plano</strong>. Esto es fundamental para asignarle pedidos cercanos, calcular tiempos estimados de llegada, rastrear el progreso de la entrega para el cliente y garantizar su seguridad en las rutas.</li>
              <li><strong>Información Financiera:</strong> Datos de sus cuentas bancarias, clabe interbancaria o métodos de retiro para poder depositarle sus ganancias generadas a través de la plataforma.</li>
              <li><strong>Acceso al Dispositivo:</strong> Permisos de cámara y almacenamiento para subir pruebas de entrega (fotos de los paquetes entregados) y subir sus documentos de validación.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Uso de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Usamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Verificar su identidad y elegibilidad para ser socio repartidor.</li>
              <li>Mantener activa y segura su cuenta.</li>
              <li>Rastrear su ubicación en tiempo real para asignarle viajes eficientes y compartir su progreso con el cliente y el restaurante.</li>
              <li>Procesar y enviarle los pagos correspondientes por sus servicios.</li>
              <li>Contactarlo en caso de emergencias o soporte técnico durante una entrega.</li>
              <li>Cumplir con las obligaciones legales y de seguridad.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Divulgación de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Su información puede ser compartida en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Con Clientes y Restaurantes:</strong> Mostramos su nombre, foto de perfil, tipo/placa de vehículo y su ubicación en tiempo real a los clientes y restaurantes mientras está realizando una entrega activa.</li>
              <li><strong>Terceros de Procesamiento:</strong> Entidades financieras que procesan sus pagos y proveedores de infraestructura en la nube (como Google Cloud o Firebase).</li>
              <li><strong>Autoridades Gubernamentales:</strong> Si es requerido por la ley en investigaciones judiciales, accidentes de tránsito o requerimientos fiscales.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Seguridad de su información</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Protegemos sus documentos sensibles y datos de ubicación utilizando encriptación y servidores seguros. Entendemos la sensibilidad de la geolocalización, por lo que solo se comparte con clientes y comercios cuando usted está conectado y con una entrega activa o en ruta.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Sus derechos y control</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Como repartidor, usted puede:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Conectarse o desconectarse de la aplicación en cualquier momento para detener el seguimiento de ubicación (si no tiene pedidos activos).</li>
              <li>Actualizar su información y vehículos desde la sección de perfil.</li>
              <li>Solicitar la baja como socio repartidor y la eliminación de sus datos, contactando a soporte (sujeto a tiempos de retención legales y fiscales).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Contáctenos</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Ophal Line - Soporte Repartidores</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mb-2">
                <strong className="w-40 inline-block">Correo electrónico:</strong> 
                <a href="mailto:contacto@ophalline.com" className="text-blue-600 hover:text-blue-500 transition-colors">
                  contacto@ophalline.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <strong className="w-40 inline-block">Teléfono:</strong> 
                <a href="tel:+0000000000000" className="text-blue-600 hover:text-blue-500 transition-colors">
                  +00 000 0000 0000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
