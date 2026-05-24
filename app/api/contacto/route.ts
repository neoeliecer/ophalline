import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Enviamos la petición desde el servidor de Vercel a FormSubmit.
    // Al ser una comunicación de servidor a servidor, se evitan todos los problemas de CORS.
    const response = await fetch('https://formsubmit.co/ajax/contacto@ophalline.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify({
        Nombre: data.Nombre,
        Email: data.Email,
        Teléfono: data.Teléfono,
        Mensaje: data.Mensaje,
        _subject: 'Nueva Solicitud de Servicio - Ophal Line'
      })
    });
    
    // Leemos la respuesta de FormSubmit
    const result = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error: any) {
    console.error('Error in API Route proxy:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
