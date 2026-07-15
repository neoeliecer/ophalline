import Link from 'next/link';

export default function PrivacyPolicyMaster() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="mb-8">
            <Link href="/politica-de-privacidad" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500 transition-colors">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Volver a Políticas
            </Link>
          </div>
          
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Política de Privacidad - Ophal Line (App Master)</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Última actualización: 14 de Julio de 2026</p>

            <p className="text-gray-600 dark:text-gray-300">
              Ophal Line ("nosotros", "nuestro" o "la aplicación") respeta la privacidad de la información generada en nuestra plataforma. Esta Política de Privacidad rige el uso de <strong>Ophal Line Master</strong>, una aplicación de uso interno exclusivo para el personal corporativo, fundadores, inversionistas o super administradores de la red Ophal Line.
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-medium mt-4">
              El acceso a esta aplicación es altamente restringido. Si usted es usuario de esta aplicación, se encuentra sujeto a estrictos acuerdos de confidencialidad (NDA).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Información Tratada en App Master</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La App Master no recopila datos personales adicionales de los administradores más allá de sus credenciales corporativas, sin embargo, desde esta aplicación se tiene acceso a la macro-data de la plataforma:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Datos Globales de Operación:</strong> Historial completo de pedidos, ubicaciones en tiempo real de todos los repartidores activos, y métricas de desempeño de los restaurantes afiliados.</li>
              <li><strong>Datos Financieros Corporativos:</strong> Volúmenes transaccionales, comisiones retenidas, tarifas de envío y flujos de capital.</li>
              <li><strong>Registros de Auditoría (Audit Logs):</strong> La aplicación Master rastrea estrictamente cada acción que usted realiza (visualizaciones de perfiles, modificaciones de tarifas, asignaciones manuales, etc.) por motivos de seguridad y auditoría interna.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              El uso de la información consultada a través de la App Master está limitado estrictamente a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Administración del ecosistema Ophal Line (monitoreo de salud del sistema, soporte crítico y resolución de conflictos entre partes).</li>
              <li>Toma de decisiones estratégicas de expansión y análisis de mercado (Business Intelligence).</li>
              <li>Ajustes en los parámetros de la plataforma, como tarifas, algoritmos de despacho y validación manual de documentación de nuevos repartidores y restaurantes.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Prohibiciones y Responsabilidades</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Queda estrictamente prohibido al personal con acceso a la App Master:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mt-2">
              <li>Extraer, descargar, copiar o compartir información sensible de usuarios, repartidores o comercios (Data Leak) hacia entidades no autorizadas.</li>
              <li>Utilizar información personal o de ubicación de los usuarios para propósitos no relacionados con la operación logística y soporte.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Cualquier violación a estas directrices resultará en la revocación inmediata del acceso, el término de la relación laboral y posibles acciones legales en concordancia con los acuerdos de confidencialidad previamente firmados.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Seguridad Interna</h2>
            <p className="text-gray-600 dark:text-gray-300">
              El acceso a esta aplicación requiere autenticación multifactor (MFA), el uso de redes seguras o VPNs autorizadas, y todos los accesos son monitoreados continuamente para detectar actividad anómala.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Contáctenos</h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-gray-900 dark:text-white font-medium mb-2">Ophal Line - Departamento de TI / Legal</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mb-2">
                <strong className="w-40 inline-block">Correo electrónico:</strong> 
                <a href="mailto:admin@ophalline.com" className="text-purple-600 hover:text-purple-500 transition-colors">
                  admin@ophalline.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
