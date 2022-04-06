import { Serializer as Class4Serializer } from
  '../mixins/regenerated/serializers/audit-test-simple-class4';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Class4Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
