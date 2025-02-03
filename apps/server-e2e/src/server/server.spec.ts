import axios from 'axios';

describe('GET /api', () => {
  beforeAll(async () => {
    jest.setTimeout(30000); // Timeout de 30 segundos para o hook
    const maxAttempts = 20;
    const retryDelay = 2000;

    for (let i = 0; i < maxAttempts; i++) {
      try {
        const res = await axios.get('http://127.0.0.1:3000/api');
        console.log(`✅ Servidor respondeu na tentativa ${i + 1}`);
        return;
      } catch (err) {
        console.log(`⌛ Aguardando servidor... (tentativa ${i + 1}/${maxAttempts})`);
        if (i === maxAttempts - 1) throw err;
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
  });

  it('deve retornar uma mensagem', async () => {
    const res = await axios.get('http://127.0.0.1:3000/api');
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
