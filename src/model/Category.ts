import {Model} from '@nozbe/watermelondb';
import {children, field, text} from '@nozbe/watermelondb/decorators';
import {writer} from '@nozbe/watermelondb/decorators/action';

export type CategoryType = {
  title: string;
  budgeted: number;
  spent: number;
  icon: string;
};

export class CategoryModel extends Model {
  static table = 'categories';

  static associations = {
    transactions: {type: 'has_many', foreignKey: 'category_id'},
  } as const;

  @text('title') title?: string;
  @field('budgeted') budgeted?: number;
  @field('spent') spent?: number;
  @text('icon') icon?: string;
  @children('transactions') transactions?: any;

  // @readonly @date('created_at') createdAt: Date;

  @writer async clear() {
    await this.collections
      .get<CategoryType & Model>('categories')
      .query()
      .markAllAsDeleted()
      .catch(err => console.error({createErr: err}));
  }
}

const Category = new CategoryModel();

export default Category;
