import { Injectable } from "@nestjs/common";

import MersenneTwister from "mersenne-twister";

@Injectable()
export class RandomNumberService {
  private worker: MersenneTwister;

  constructor() {
    this.worker = new MersenneTwister();
  }

  generate(): number {
    return this.worker.random();
  }
}
