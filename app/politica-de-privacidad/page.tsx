import Link from 'next/link';

export default function PrivacyPolicyHub() {
  const policies = [
    {
      title: "Ophal Line - App Cliente",
      description: "Política de privacidad para los usuarios que ordenan a través de la aplicación cliente.",
      href: "/politica-de-privacidad/cliente",
      color: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
    },
    {
      title: "Ophal Line - App Repartidor",
      description: "Política de privacidad para nuestros socios repartidores y conductores.",
      href: "/politica-de-privacidad/repartidor",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
    },
    {
      title: "Ophal Line - Admin / Restaurantes",
      description: "Política de privacidad para los comercios y restaurantes asociados.",
      href: "/politica-de-privacidad/admin",
      color: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
    },
    {
      title: "Ophal Line - Master",
      description: "Política de privacidad para la administración central y máster.",
      href: "/politica-de-privacidad/master",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors mb-6">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Centro de Privacidad
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Selecciona la aplicación de la cual deseas consultar la Política de Privacidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy) => (
            <Link 
              key={policy.href} 
              href={policy.href}
              className="block bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${policy.color}`}>
                  Legal
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {policy.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {policy.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-red-600 dark:text-red-400">
                  Leer política
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Eliminación de Cuenta y Datos Personales
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            De acuerdo con las normativas de privacidad y las políticas de Google Play, Ophal Line garantiza a sus usuarios el derecho a solicitar la eliminación de su cuenta y de todos los datos personales asociados a la misma.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">¿Cómo solicitar la eliminación?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Puedes solicitar la eliminación permanente de tu cuenta y tus datos de dos maneras:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li><strong>Desde la aplicación:</strong> Inicia sesión en la aplicación, dirígete a tu Perfil &gt; Configuración y selecciona la opción "Eliminar cuenta".</li>
            <li><strong>Por correo electrónico:</strong> Envía un correo a <strong>contacto@ophalline.com</strong> desde la dirección de correo registrada, con el asunto "Solicitud de Eliminación de Cuenta".</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Una vez recibida tu solicitud, eliminaremos toda tu información personal (nombre, correo electrónico, dirección, historial de pedidos y ubicación) de nuestras bases de datos en un plazo máximo de 30 días, conservando únicamente los datos exigidos por ley para fines fiscales o de seguridad.
          </p>
        </div>

      </div>
    </div>
  );
}
