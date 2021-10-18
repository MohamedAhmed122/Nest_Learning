import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config Swagger
  const config = new DocumentBuilder()
    .setTitle('Nest API Project ')
    .setDescription('NEST API Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  // App listen on Port 3000
  await app.listen(3000);
}
bootstrap();
