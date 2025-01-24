export default interface Observer {
  update (fieldName: string, value: string): void
}