import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  name: string;

  @Prop()
  model: string;

  @Prop()
  origin: string;

  @Prop()
  topSpeed: number;

  @Prop()
  time0To100: number;

  @Prop()
  brand: string;

  @Prop()
  year: number;

  @Prop()
  gameImage: string;

  @Prop()
  realImage: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
