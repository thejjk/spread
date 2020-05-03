export default class Patient {
    static schema = {
        name: 'Patient',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            age: 'int',
            birthday: { type: 'date' },
            genero: 'string',
            nameParent: 'string',
            emailParent: 'string',
            callParent: 'string'
        }
    };
}
