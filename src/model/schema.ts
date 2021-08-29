import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'budgeted', type: 'number'},
        {name: 'spent', type: 'number'},
        {name: 'icon', type: 'string'},
        // {name: 'created_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'transactions',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'amount', type: 'number'},
        {name: 'date', type: 'number'},
        {name: 'type', type: 'string'},
        {name: 'category_id', type: 'string'},
        // {name: 'created_at', type: 'number'},
      ],
    }),
  ],
});
