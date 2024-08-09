import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { PostStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Transform, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is a title',
    description: 'This is the title for the blog post',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible values, 'post', 'page', 'story', 'series'",
  })
  @IsNotEmpty()
  @IsEnum(PostType)
  postType: PostType;

  @ApiProperty({
    description: "For example - 'my-url'",
    example: 'my-blog-post',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-post"',
  })
  @MinLength(4)
  @MaxLength(256)
  slug: string;

  @ApiProperty({
    enum: PostStatus,
    description: "Possible values, 'draft', 'scheduled', 'review', 'published'",
  })
  @IsNotEmpty()
  @IsEnum(PostStatus)
  status: PostStatus;

  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: 'The post content',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{ \r\n "@context": "https://schema.org",\r\n "@type": "Person"\r\n }',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Featured image for your blog post',
    example: 'http://gravatar.com/profile/29292929/images/image1.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MinLength(4)
  @MaxLength(1024)
  featuredImageUrl?: string;

  // @ApiPropertyOptional({
  //   description: 'The date on which the blog post is published',
  //   example: '2024-07-30T07:46:32+0000',
  // })
  // @IsOptional()
  // @IsISO8601()
  // publishOn?: Date;

  @ApiPropertyOptional({
    description: 'The date on which the blog post is published',
    example: '2024-07-30T07:46:32', // No timezone
  })
  @IsOptional()
  @IsString() // Use IsString to avoid automatic date conversion
  @IsISO8601({ strict: true, strictSeparator: true }) // Validates strict ISO format without timezone
  @Transform(({ value }) =>
    typeof value === 'string' ? value : value.toISOString().slice(0, 19),
  ) // Ensure it's a string
  publishOn?: string;

  @ApiPropertyOptional({
    description: 'Array of ids of tags',
    example: [1, 2],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true }) // each value in the array must be a string
  tags?: number[];

  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example: '{ "sidebarEnabled" : true }',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true }) // all the properties of the CratePostMetaOptionsDto are validated against that created instance of CreaatePostMetaOptionsDto
  @Type(() => CreatePostMetaOptionsDto) // match the incoming request and creates an instance of CreatePostMetaOptionsDto
  metaOptions?: CreatePostMetaOptionsDto | null; // expect null to be sent for options since they are not required
}
