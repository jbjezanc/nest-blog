import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../tag.entity';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject tagsRepository
     */
    @InjectRepository(Tag) private readonly tagsRepository: Repository<Tag>,
  ) {}
  public async create(createTagDto: CreateTagDto) {
    const newTag = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(newTag);
  }

  public async findMultipleTags(tags: number[]) {
    const results = await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });

    return results;
  }

  public async delete(id: number) {
    await this.tagsRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  public async softDelete(id: number) {
    await this.tagsRepository.softDelete(id);

    return {
      deleted: true,
      id,
    };
  }
}
