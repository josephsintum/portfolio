import {Model} from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';

export type TransactionType = {
  name: string;
  amount: number;
  category: string;
  date: Date;
  type: 'income' | 'expense';
  createdAt: Date;
};

export class TransactionModel extends Model {
  static table = 'transactions';

  static associations = {
    categories: {type: 'belongs_to', key: 'category_id'},
  } as const;

  @text('name') name?: string;
  @field('amount') amount?: number;
  @date('date') date?: Date;
  @text('type') type?: boolean;
  @relation('transactions', 'transaction_id') category?: {};
  @readonly @date('created_at') createdAt?: Date;

  // @readonly @date('created_at') createdAt: Date;

  // async add({title, budgeted, spent, icon}: TransactionType) {
  //   await database.write(async () => {
  //     await database
  //       .get<TransactionType & Model>('categories')
  //       .create(entry => {
  //         entry.title = title;
  //         entry.budgeted = budgeted;
  //         entry.spent = spent;
  //         entry.icon = icon;
  //       })
  //       .catch(err => console.error({createErr: err}));
  //   });
  // }
  //
  // async clear() {
  //   await database.write(async () => {
  //     await database
  //       .get('categories')
  //       .query()
  //       .markAllAsDeleted()
  //       .catch(err => console.error({createErr: err}));
  //   });
  // }
}

const Transaction = new TransactionModel();

export default Transaction;
