import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Pet } from './pet.entity';
import { CreatePostDto } from './create-post.dto';
import { getConnection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['pets'], // SELECT * FROM user JOIN pets
    });
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id); //SELECT * from User WHERE user.id=id;
      return user;
    } catch (error) {
      //handle error
      throw error;
    }
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name }); //const newUser = new User(); / newUser.name = name;

    return this.usersRepository.save(newUser);
  }

  //Insert using DTO
  createUserDto(name: CreatePostDto): Promise<User[]> {
    let n: string = name.nameOfDto;
    const newUser = this.usersRepository.create(n); //const newUser = new User(); / newUser.name = name;

    return this.usersRepository.save(newUser);
  }

  //Insert using DTO #TypeORM Query Builder
  async createUserDto2(name:CreatePostDto):Promise<User> {
    return await this.usersRepository.save(name);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;
    return this.usersRepository.save(user); // Update
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);
    return this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
