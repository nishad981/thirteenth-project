import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePostDto } from './create-post.dto';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User[]> {
    return this.appService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string): Promise<User> {
    return this.appService.getOneById(Number(id));
  }

  @Post()
  createUserDto(@Body() inputName: CreatePostDto): Promise<User> {
    return this.appService.createUser(inputName);
  }
}
