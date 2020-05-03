export default class RepositorySchema {
  static schema = {
    name: 'User',
    primaryKey: 'crefito',
    properties: {
      //id: { type: 'int', indexed: true },
      db_name: 'string',
      db_email: 'string',
      db_password: 'string',
      db_crefito: { type: 'int'},
      db_call: 'string',
      db_perfil: 'string',
      //db_birthday: {type: 'date'},
      db_genero: 'string'
    },
  };
}