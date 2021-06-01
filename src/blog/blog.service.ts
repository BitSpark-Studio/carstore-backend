import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from '../blog/interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    try {
      var postobject = {
        title: createPostDTO.title,
        description: createPostDTO.description,
        body: createPostDTO.body,
        author: createPostDTO.author,
        date_posted: Date.now(),
      };
      console.log(postobject);
      const newPost = new this.postModel(postobject);
      return newPost.save();
    } catch (e) {
      return e;
    }
  }
  async getPost(postID): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDTO,
      { new: true },
    );
    return editedPost;
  }
  async updatePost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    var postobject = {
      title: createPostDTO.title,
      description: createPostDTO.description,
      body: createPostDTO.body,
      author: createPostDTO.author,
      date_posted: Date.now(),
    };
    console.log(postobject);
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      postobject,
      { new: true },
    );
    return editedPost;
  }
  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID);
    return deletedPost;
  }
}