export interface Loja {
  nome: string
  endereco: string
  telefone: string
  horarios: string[]
  mapa: string
}

export const lojas: Loja[] = [
  {
    nome: "Junqueirópolis",
    endereco: "Rua Rui Barbosa, 481",
    telefone: "(18) 3841-1326",
    horarios: [
      "Seg-Sex: 07:30 - 21:00",
      "Sáb: 07:30 - 18:00"
    ],
    mapa: "https://maps.google.com/?q=Rua+Rui+Barbosa+481+Junqueirópolis+SP"
  },
  {
    nome: "Dracena",
    endereco: "Rua Messias Ferreira da Palma, 266",
    telefone: "(18) 3822-3272",
    horarios: [
      "Seg-Sex: 07:30 - 21:00",
      "Sáb: 07:30 - 18:00",
      "Dom: 08:00 - 13:00"
    ],
    mapa: "https://maps.google.com/?q=Rua+Messias+Ferreira+da+Palma+266+Dracena+SP"
  }
]
