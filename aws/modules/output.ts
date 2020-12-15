import { TerraformOutput } from 'cdktf';
import { Construct } from 'constructs';

import { S3Bucket } from '../.gen/providers/aws'

export default class OutputModule {
  constructor(scope: Construct, bucket: S3Bucket) {
    // Output the bucket url to access the website
    new TerraformOutput(scope, 'website_endpoint', {
      value: `http://${bucket.websiteEndpoint}`
    });
  }
}