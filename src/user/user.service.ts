import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findOneUser(username: string) {
    return this.userRepository.findOne({ email: username });
  }

  // create new UserEntity
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const passwordHash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto = {
      ...createUserDto,
      password: passwordHash,
    };
    const newUser = await this.userRepository.save(createUserDto);
    if (!newUser) {
      throw new InternalServerErrorException();
    }
    newUser.password = undefined;
    return newUser;
  }

  // founf all users
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    if (users.length <= 0) {
      throw new NotFoundException();
    }
    users.map((user) => (user.password = undefined));
    return users;
  }

  // found one user
  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  //update one user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const result = await this.userRepository.update(id, updateUserDto);
    if (result.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return result;
  }

  //delete one user
  async remove(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected !== 1) {
      throw new NotFoundException();
    }
    return result;
  }
}
