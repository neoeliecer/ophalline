import Link from 'next/link';

export default function PrivacyPolicyCliente() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="mb-8">
            <Link href="/politica-de-privacidad" className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-500 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Volver a Políticas
            </Link>
          </div>
          
          <div className="prose prose-red dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Política de Privacidad - Ophal Line (App Cliente)</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Última actualización: 14 de Julio de 2026</p>

            <p className="text-gray-600 dark:text-gray-300">
              Ophal Line ("nosotros", "nuestro" o "la aplicación") respeta la privacidad de nuestros usuarios ("usuario" o "usted"). Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando utiliza nuestra aplicación móvil <strong>Ophal Line Cliente</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium mt-4">
              Lea detenidamente esta política de privacidad. Si no está de acuerdo con los términos de esta política, no acceda a la aplicación.
            </p>

            {/* Aquí va el resto del contenido de la política del cliente que proporcionaste anteriormente */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en la Aplicación incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Datos Personales:</strong> Información de identificación personal, como su nombre, dirección de envío, correo electrónico y número de teléfono, que usted nos proporciona voluntariamente al registrarse en la Aplicación o al realizar pedidos.</li>
              <li><strong>Datos de Ubicación (Geolocalización):</strong> Solicitamos acceso para rastrear información basada en la ubicación desde su dispositivo móvil, ya sea de forma continua o mientras utiliza la Aplicación (en primer plano y segundo plano), para brindar servicios basados en la ubicación (como el seguimiento de su pedido en tiempo real).</li>
              <li><strong>Información Financiera:</strong> Datos financieros, como datos relacionados con su método de pago. Almacenamos muy poca, si alguna, información financiera. La mayor parte es proporcionada directamente a nuestros procesadores de pago de terceros.</li>
              <li><strong>Acceso a Dispositivos Móviles:</strong> Podemos solicitar acceso o permiso a ciertas funciones de su dispositivo móvil, que incluyen la cámara y almacenamiento, para que pueda subir una foto de perfil.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Uso de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Específicamente, podemos usar la información recopilada sobre usted a través de la Aplicación Cliente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Crear y administrar su cuenta de usuario.</li>
              <li>Procesar sus pedidos de comida o envíos.</li>
              <li>Notificarle sobre actualizaciones de su pedido.</li>
              <li>Mejorar la eficiencia y el funcionamiento de la Aplicación.</li>
              <li>Resolver disputas y solucionar problemas.</li>
              <li>Procesar pagos y reembolsos.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Divulgación de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Podemos compartir información que hemos recopilado sobre usted en ciertas situaciones:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>A Restaurantes y Repartidores:</strong> Compartimos sus datos de entrega (nombre, dirección y teléfono) con los comercios donde realiza el pedido y con los repartidores (drivers), exclusivamente con el propósito de completar su solicitud.</li>
              <li><strong>Proveedores de Servicios de Terceros:</strong> Podemos compartir su información con terceros (procesamiento de pagos, análisis de datos, Google Cloud).</li>
              <li><strong>Por Ley o para Proteger Derechos:</strong> Según lo permita o exija la ley.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Seguridad de su información</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Utilizamos medidas de seguridad (como autenticación segura mediante Firebase Auth) para proteger su información personal.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Derechos de los usuarios</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Puede revisar o cambiar la información en su cuenta o cancelarla en cualquier momento:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Actualizando su perfil en la configuración de la cuenta.</li>
              <li>Contactándonos directamente.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Contáctenos</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Ophal Line</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mb-2">
                <strong className="w-40 inline-block">Correo electrónico:</strong> 
                <a href="mailto:contacto@ophalline.com" className="text-red-600 hover:text-red-500 transition-colors">
                  contacto@ophalline.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <strong className="w-40 inline-block">Teléfono:</strong> 
                <a href="tel:+0000000000000" className="text-red-600 hover:text-red-500 transition-colors">
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
