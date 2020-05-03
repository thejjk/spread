import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';
import PatientSchema from '../schemas/PatientSchema';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema, PatientSchema],
  });
}