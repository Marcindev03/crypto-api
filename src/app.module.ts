import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CurrenciesModule, UsersModule, TransactionsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
