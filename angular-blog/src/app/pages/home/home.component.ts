import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      title: 'Interface editorial com ritmo de produto.',
      description: 'Preview à esquerda, narrativa à direita. Um slider horizontal que coloca cada artigo como se fosse um lançamento.',
      detail: 'Cada quadro mantém um eixo de leitura claro: título principal, bloco de apoio e navegação sutil. Pensa em revista, mas com o gesto de deslizar.',
      meta: 'Destaque · Showcase',
      date: '23/03/2026',
      category: 'UX · Conteúdo',
      leftLabel: 'edição',
      rightLabel: 'volume 01'
    },
    {
      title: 'Design como palco: navegue como quem folheia.',
      description: 'Movimento lateral, tipografia marcante e espaçamento generoso para ler sem distração.',
      detail: 'O texto central fica livre; as colunas verticais funcionam como margem viva, sinalizando seção e edição.',
      meta: 'Edição · Magazine',
      date: '16/03/2026',
      category: 'Design · Frontend',
      leftLabel: 'magazine',
      rightLabel: 'volume 02'
    },
    {
      title: 'Microinterações guiando a leitura.',
      description: 'Setas mínimas, transição suave e indicadores discretos mostram onde você está na sequência.',
      detail: 'A pista de navegação é direta: poucas ações, conteúdo em foco e ritmo de página dupla.',
      meta: 'Interação · Produto',
      date: '09/03/2026',
      category: 'UI Motion',
      leftLabel: 'interação',
      rightLabel: 'volume 03'
    }
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
