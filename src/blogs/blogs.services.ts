import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';

import { Blog } from './blog.model';

@Injectable()
export class BlogsServices {
  private blogs: Blog[] = [];

  //增加blog
  insertBlog(title: string, body: string, author: string) {
    const blogId = Math.random().toString();
    const newBlog = new Blog(
      blogId,
      title,
      body,
      author,
      new Date().toString(),
    );

    this.blogs.push(newBlog);
    return blogId;
    // return title;
  }

  //获取全部blog
  getBlogs() {
    return [...this.blogs];
  }

  //获取单个blog
  getSingleBlog(blogId: string) {
    const blog = this.findBlog(blogId)[0];
    return { ...blog };
  }

  //查找具体的blog， 返回blog和index值
  findBlog(blogId: string): [Blog, number] {
    const blogIndex = this.blogs.findIndex((blog) => blog.id == blogId);
    const blog = this.blogs[blogIndex];
    if (!blog) {
      throw new NotFoundException('no this blog');
    }
    return [blog, blogIndex];
  }

  //更新blog
  updateBlog(blogId: string, title: string, body: string, author: string) {
    const [blog, index] = this.findBlog(blogId);
    const updatedBlog = { ...blog };
    if (title) {
      updatedBlog.title = title;
    }
    if (body) {
      updatedBlog.body = body;
    }
    if (author) {
      updatedBlog.author = author;
    }

    updatedBlog.time = new Date().toString();

    this.blogs[index] = updatedBlog;
  }

  //删除blog
  deleteBlog(blogId: string) {
    const index = this.findBlog(blogId)[1];
    //从第index开始删除1个元素
    this.blogs.splice(index, 1);
  }
}
