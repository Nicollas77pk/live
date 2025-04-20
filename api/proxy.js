const https = require('https');
const http = require('http');

export default function handler(req, res) {
  const url = req.query.url;  // Recebe a URL do m3u8 via query string
  if (!url) {
    return res.status(400).json({ error: 'URL não fornecida' });
  }

  // Verifica se o link m3u8 é HTTP e reencaminha
  if (url.startsWith('http://')) {
    const request = http.get(url, (response) => {
      res.setHeader('Content-Type', response.headers['content-type']);
      response.pipe(res);
    });
    
    request.on('error', (err) => {
      res.status(500).json({ error: 'Erro ao acessar o link m3u8' });
    });
  } else {
    res.status(400).json({ error: 'URL inválida, precisa ser HTTP' });
  }
}
