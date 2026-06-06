const https = require('https');

const data = JSON.stringify({
  access_key: '5b4c7900-d07b-46cd-8671-76f6eaf5dcf3',
  subject: 'TEST - Prueba Formulario Ophal Line',
  name: 'Test Ophal',
  email: 'test@test.com',
  Telefono: '3001234567',
  Mensaje: 'Esta es una prueba del formulario de contacto'
});

const options = {
  hostname: 'api.web3forms.com',
  path: '/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body);
    const parsed = JSON.parse(body);
    if (parsed.success) {
      console.log('\n✅ FUNCIONA: El formulario está enviando correctamente.');
      console.log('📧 Email destino:', parsed.message || '(ver dashboard web3forms.com)');
    } else {
      console.log('\n❌ ERROR:', parsed.message);
    }
  });
});

req.on('error', (e) => console.error('Error de red:', e.message));
req.write(data);
req.end();
