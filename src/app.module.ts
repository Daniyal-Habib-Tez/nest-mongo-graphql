import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forRoot(
      'mongodb+srv://n4beel:aQ3HZ9EzoB9HXBv3@sandbox.mwosc.mongodb.net/AIMotionDetection?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
