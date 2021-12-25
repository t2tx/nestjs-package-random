import { DynamicModule, Module } from "@nestjs/common";
import { RandomNumberService } from "./random-number.service";

@Module({})
export class RandomNumberModule {
  static forRoot(): DynamicModule {
    const providers = [
      {
        provide: RandomNumberService,
        useValue: new RandomNumberService(),
      },
    ];

    return {
      providers,
      exports: providers,
      module: RandomNumberModule,
    };
  }
}
