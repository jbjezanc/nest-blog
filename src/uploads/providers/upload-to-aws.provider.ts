import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import * as path from 'path';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UploadToAwsProvider {
  constructor(
    /**
     * Inject configService
     */
    private readonly configService: ConfigService,
  ) {}

  public async fileUpload(file: Express.Multer.File) {
    const s3 = new S3();

    try {
      const uploadResult = await s3
        .upload({
          Bucket: this.configService.get('appConfig.awsBucketName'),
          Body: file.buffer,
          Key: this.generateFileName(file),
          ContentType: file.mimetype,
        })
        .promise();

      return uploadResult.Key;
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  private generateFileName(file: Express.Multer.File) {
    // Extract filename
    const name = file.originalname.split('.')[0];

    // Remove whitespaces from the filename
    name.replace(/\s/g, '').trim();

    // Extract the extension from the file
    const extension = path.extname(file.originalname);

    // Generate timestamp and concatenate to the filename
    const timestamp = new Date().getTime().toString().trim();

    // Return file uuid concatenated with filename
    return `${name}-${timestamp}-${uuid4()}${extension}`;
  }
}
