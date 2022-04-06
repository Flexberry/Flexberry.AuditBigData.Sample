import { Serializer as Class3Serializer } from
  '../mixins/regenerated/serializers/audit-test-simple-class3';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Class3Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
