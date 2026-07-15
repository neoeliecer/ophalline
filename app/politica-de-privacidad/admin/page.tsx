import Link from 'next/link';

export default function PrivacyPolicyAdmin() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="mb-8">
            <Link href="/politica-de-privacidad" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Volver a Políticas
            </Link>
          </div>
          
          <div className="prose prose-green dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Política de Privacidad - Ophal Line (App Admin / Restaurantes)</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Última actualización: 14 de Julio de 2026</p>

            <p className="text-gray-600 dark:text-gray-300">
              Ophal Line ("nosotros", "nuestro" o "la aplicación") respeta la privacidad de nuestros socios comerciales, restaurantes y sus empleados ("comercio", "socio" o "usted"). Esta Política de Privacidad explica cómo recopilamos y manejamos la información cuando utiliza la aplicación <strong>Ophal Line Admin</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium mt-4">
              Si utiliza nuestra plataforma como socio comercial, acepta los términos detallados en esta política respecto a los datos comerciales y de sus representantes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              En el contexto B2B (Business to Business), recopilamos la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Datos de la Empresa:</strong> Nombre del comercio, dirección fiscal y física, registro federal de contribuyentes (RFC u homólogo), menús, fotografías de productos e instalaciones, y horarios de atención.</li>
              <li><strong>Datos de Representantes y Empleados:</strong> Nombres, correos electrónicos y números de teléfono de las personas designadas como administradores o staff que utilizarán la app para gestionar pedidos.</li>
              <li><strong>Datos Financieros:</strong> Información de cuentas bancarias de la empresa utilizadas para la dispersión (pago) de las ventas generadas a través de la plataforma.</li>
              <li><strong>Datos de Dispositivos:</strong> Alertas push y métricas de uso de la aplicación (como tabletas o teléfonos en el restaurante) para garantizar que los pedidos se reciban sin interrupciones.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Uso de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La información proporcionada se utiliza principalmente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Mostrar su restaurante, menú y productos a los clientes en la App Cliente.</li>
              <li>Permitir la gestión en tiempo real de los pedidos entrantes y su preparación.</li>
              <li>Liquidación de pagos y emisión de reportes financieros y facturas.</li>
              <li>Brindar soporte técnico y comunicarnos con los administradores del comercio sobre el desempeño de sus ventas o cambios operativos.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Divulgación de su información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Compartiremos su información de la siguiente manera:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Públicamente en la App Cliente:</strong> Su nombre comercial, ubicación, menú, fotos y calificaciones son públicas para los usuarios de Ophal Line.</li>
              <li><strong>Con los Repartidores:</strong> Compartimos la dirección física del establecimiento y el número de contacto operativo (solo cuando es necesario para coordinar la recolección de un pedido).</li>
              <li><strong>Obligaciones Legales y Fiscales:</strong> Con las autoridades tributarias y gubernamentales correspondientes, cuando así lo exija la normativa local.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Seguridad y Gestión de Roles</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Usted es responsable de administrar quién tiene acceso a su portal Ophal Line Admin. Nosotros aplicamos medidas de seguridad para proteger sus datos bancarios y cifras de ventas (usando cifrado en tránsito y en reposo). Le recomendamos revocar los accesos de los empleados que ya no formen parte de su plantilla.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Contáctenos</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Ophal Line - Soporte a Comercios</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mb-2">
                <strong className="w-40 inline-block">Correo electrónico:</strong> 
                <a href="mailto:contacto@ophalline.com" className="text-green-600 hover:text-green-500 transition-colors">
                  contacto@ophalline.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <strong className="w-40 inline-block">Teléfono:</strong> 
                <a href="tel:+0000000000000" className="text-green-600 hover:text-green-500 transition-colors">
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
