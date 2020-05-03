export default function getRealm() {
    return Realm.open({
      schema: [RepositorySchema, PatientSchema],
    });
  }