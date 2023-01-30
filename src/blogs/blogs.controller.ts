import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BlogsServices } from './blogs.services';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService: BlogsServices) {}

  //增加blog
  @Post()
  addBlog(
    @Body('title') blogTitle: string,
    @Body('body') blogBody: string,
    @Body('author') blogAuthor: string,
  ) {
    const generatedId = this.blogService.insertBlog(
      blogTitle,
      blogBody,
      blogAuthor,
    );

    return { id: generatedId };
  }

  //获取全部blog
  @Get()
  getAllBlogs() {
    return this.blogService.getBlogs();
  }

  //获取单个blog
  @Get(':blogId')
  getBlog(@Param('blogId') blogId: string) {
    return this.blogService.getSingleBlog(blogId);
  }

  //更新blog
  @Patch(':blogId')
  updateBlog(
    @Param('blogId') blogId: string,
    @Body('title') blogTitle: string,
    @Body('body') blogBody: string,
    @Body('author') blogAuthor: string,
  ) {
    this.blogService.updateBlog(blogId, blogTitle, blogBody, blogAuthor);
    return null;
  }

  //删除blog
  @Delete(':blogId')
  removeBlog(@Param('blogId') blogId: string) {
    this.blogService.deleteBlog(blogId);
    return null;
  }
}
