import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  createUserDto2(@Body() inputName: CreatePostDto): Promise<User> {
    return this.appService.createUserDto2();
  }

  @Patch()
  updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.appService.updateUser(Number(id), user);
  }

  @Delete()
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(Number(id));
  }
}
