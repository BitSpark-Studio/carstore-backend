import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';
import { BlogModule } from './blog/blog.module';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:iamshuvo123@cluster0.zht09.mongodb.net/blogdb?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
