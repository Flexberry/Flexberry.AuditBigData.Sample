import { Serializer as Class1Serializer } from
  '../mixins/regenerated/serializers/audit-test-simple-class1';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Class1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
