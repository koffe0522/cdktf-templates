import { Token } from 'cdktf';
import { Construct } from 'constructs';

import { Vpc } from "../.gen/providers/aws/vpc"
import { Subnet } from '../.gen/providers/aws/subnet';

export default class VpcModule {
  public id: string

  constructor(context: Construct) {
    // define resources here
    const vpc = new Vpc(context, 'my-vpc', {
      cidrBlock: '10.0.0.0/16',
      tags: {
        name: "my-vpc"
      }
    })
    this.id = vpc.id

    new Subnet(context, 'my-subnet', {
      vpcId: Token.asString(vpc.id),
      cidrBlock: '10.0.0.0/24',
      tags: {
        name: "my-subnet"
      }
    });
  }
}