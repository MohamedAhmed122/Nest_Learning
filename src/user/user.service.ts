import { User } from './entities/user.entities';
import { CreatUserDto } from './dto/createUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: '1', name: 'Mohamed' },
    { id: '2', name: 'Ahmed' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: string): User {
    return this, this.users.find((user) => user.id === userId);
  }

  createUser(creatUserDto: CreatUserDto): User {
    const newUser = { id: '10', ...creatUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
