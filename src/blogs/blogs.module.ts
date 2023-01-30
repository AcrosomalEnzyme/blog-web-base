import { Module } from "@nestjs/common";
import { BlogsController } from "./blogs.controller";
import { BlogsServices } from "./blogs.services";

@Module({
    controllers:[BlogsController],
    providers: [BlogsServices]
})
export class BlogsModule{}