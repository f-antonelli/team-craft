import { UpdateUserDTO } from '../dtos/users/update-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract Get(limit: number, page: number): Promise<UserEntity[] | null>;
  abstract GetById(id: string): Promise<UserEntity | null>;
  abstract GetByEmail(email: string): Promise<UserEntity | null>;
  abstract Update(id: string, data: UpdateUserDTO): Promise<UserEntity | null>;
  abstract Delete(id: string): Promise<UserEntity | null>;
  abstract DeleteAll(): Promise<void>;
}
