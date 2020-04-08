// Query Array Operators: https://docs.mongodb.com/manual/reference/operator/query-array/

import {
  createQueryOperator,
  $all as __all,
  $elemMatch as __elemMatch,
  $size as __size
} from '../_predicates'

export const $all = createQueryOperator(__all)
export const $elemMatch = createQueryOperator(__elemMatch)
export const $size = createQueryOperator(__size)