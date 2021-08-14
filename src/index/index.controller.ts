import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('/')
export class IndexController {
  @Get()
  @Redirect('http://localhost:3000/api', 301)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  defaultPath() {}
}
