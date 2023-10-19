import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
@Module({
  imports: [UserModule, ConfigModule.forRoot(), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
