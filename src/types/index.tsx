export type ValueType = string | number | boolean | null

export interface KeyValuePair<ValueType> {
  [key: string]: ValueType
}

export type KeyValues = KeyValuePair<ValueType>
