import { Serializer as Class2Serializer } from
  '../mixins/regenerated/serializers/audit-test-simple-class2';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Class2Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
