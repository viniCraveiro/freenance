import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Configuração básica
  const globalPrefix = 'api';
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const host = process.env.HOST || '0.0.0.0';

  app.setGlobalPrefix(globalPrefix);

  try {
    await app.listen(port, host);

    // Mensagens de log consistentes
    logger.log(`📡 API endpoint: http://${host}:${port}/${globalPrefix}`);
    logger.log(`🌍 Network access: http://localhost:${port}/${globalPrefix} (if running locally)`);

  } catch (error) {
    // Tratamento de erros detalhado
    if (error.code === 'EADDRINUSE') {
      logger.error(`🔥 Porta ${port} já está em uso!`);
      logger.error('Soluções possíveis:');
      logger.error('1. Encerre o processo na porta:');
      logger.error(`   lsof -i :${port} | awk 'NR!=1 {print $2}' | xargs kill -9`);
      logger.error('2. Altere a porta no arquivo .env:');
      logger.error(`   PORT=${port + 1} npm start`);
    } else {
      logger.error('❌ Erro fatal na inicialização:', error.message);
    }
    process.exit(1);
  }
}

bootstrap();
