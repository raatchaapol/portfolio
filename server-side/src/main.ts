import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/app/app.module';
import { APP } from './constants/APP.enum';
import { Server } from 'socket.io';
import { corsOptions } from './conf/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsOptions);

  const io = new Server(app.getHttpServer(), {
    cors: corsOptions,
  });

  console.log('connecting...');

  io.on('connection', (socket) => {
    console.log('Is Connected?', socket.connected);
    console.log('Successfully established to socket.io!');

    socket.on('chat', (val) => {
      console.log(val);
    });
  });

  await app.listen(APP.PORT);
}

bootstrap();
