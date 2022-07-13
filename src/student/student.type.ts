import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field((type) => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;
}
