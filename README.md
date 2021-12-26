<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm Package Random</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

## Installation

### yarn

```bash
yarn add @t2tx/nestjs-package-random
```

### npm

```bash
npm i @t2tx/nestjs-package-random
```

## Usage

### `app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RandomNumberModule } from 'nestjs-package-random';

@Module({
  imports: [RandomNumberModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
```

### `app.controller.ts`

```typescript
import { Controller, Get } from '@nestjs/common';
import { RandomNumberService } from 'nestjs-package-random';

@Controller()
export class AppController {
  constructor(private readonly random: RandomNumberService) {}
  @Get()
  getHello(): string {
    return `Hello! ${this.random.generate()}`;
  }
}
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
