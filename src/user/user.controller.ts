import { User } from './entities/user.entities';
import { CreatUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  AddNewUser(@Body() body: CreatUserDto): User {
    return this.userService.createUser(body);
  }
}
