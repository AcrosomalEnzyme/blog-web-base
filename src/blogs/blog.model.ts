export class Blog {
  //写法1
  // id: string;
  // title: string;
  // body: string;
  // author: string;
  // // time: string;

  // constructor(id: string, title: string, body: string, author: string) {
  //     this.id = id;
  //     this.title = title;
  //     this.body = body;
  //     this.author = author;
  // }

  // 写法2
  constructor(
    public id: string,
    public title: string,
    public body: string,
    public author: string,
    public time: string,
  ) {}
}
