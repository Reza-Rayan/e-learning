import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mongodb",
      appname:"e-learn",
      synchronize:true,
      entities:[
        Lesson
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile:true,
      driver: ApolloDriver,
      playground: true,
    }),
    LessonModule
  ],
})
export class AppModule {}
