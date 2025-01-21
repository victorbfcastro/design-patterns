// Domínio da aplicação

export default interface Transaction {
  provider: string
  trackNumber: string
  amount: number
  status: string
}