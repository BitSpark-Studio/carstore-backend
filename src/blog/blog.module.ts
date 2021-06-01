import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogSchema } from '../blog/schema/blog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])], // add
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
