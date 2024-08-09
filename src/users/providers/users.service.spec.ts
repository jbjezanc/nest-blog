import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { CreateUserProvider } from './create-user.provider';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { DataSource } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const mockCreateUserProvider: Partial<CreateUserProvider> = {
      createUser: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 12,
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: createUserDto.password,
        }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: CreateUserProvider,
          useValue: mockCreateUserProvider,
        },
        {
          provide: DataSource,
          useValue: {}, // adds data source, but not Repository
        },
        {
          provide: getRepositoryToken(User), // adds Repository<User>
          useValue: {},
        },
        {
          provide: CreateGoogleUserProvider,
          useValue: {},
        },
        {
          provide: FindOneByGoogleIdProvider,
          useValue: {},
        },
        {
          provide: FindOneUserByEmailProvider,
          useValue: {},
        },

        {
          provide: UsersCreateManyProvider,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should be defined', () => {
      expect(service.createUser).toBeDefined();
    });
    it('should call createUser on CreateUserProvider', async () => {
      const user = await service.createUser({
        firstName: 'Josip',
        lastName: 'Bjezancevic',
        email: 'jozamastermind@gmail.com',
        password: 'password123!',
      });

      expect(user.firstName).toEqual('Josip');
      expect(user.lastName).toEqual('Bjezancevic');
      expect(user.email).toEqual('jozamastermind@gmail.com');
      expect(user.password).toEqual('password123!');
    });
  });
});
