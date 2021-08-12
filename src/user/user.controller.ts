import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { IsArray } from 'class-validator';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Record created' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'return all users',
    type: [UserEntity],
  })
  @ApiNotFoundResponse({ description: 'No records found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'return all users',
    type: UserEntity,
  })
  @ApiNotFoundResponse({ description: 'No record found' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Update succefull',
  })
  @ApiNotFoundResponse({ description: 'No record found' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete succefull',
  })
  @ApiNotFoundResponse({ description: 'No record found' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
