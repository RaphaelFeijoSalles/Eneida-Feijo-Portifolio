# Portfólio Profissional - Psicóloga Eneida Feijó

Este projeto é o site institucional e portfólio da psicóloga humanista Eneida Feijó. O site foi desenvolvido para apresentar a trajetória profissional, facilitar o agendamento de sessões e gerenciar a divulgação de eventos e imersões (presenciais e online).

## 🚀 Funcionalidades

* **Design Responsivo e Mobile-First:** Interface adaptável para dispositivos móveis, tablets e desktops, utilizando a paleta de cores da identidade visual da cliente (Safira Clássico).
* **Navegação SPA (Single Page Application):** A página principal (`index.html`) funciona com rolagem suave e menu fixo com *Scroll-Spy* (destaque ativo).
* **Landing Pages de Eventos:**
    * Página dedicada para o próximo evento ("2ª Tarde de Imersão: Somos Água"), com cronograma, apresentação das condutoras e formulário de inscrição.
    * Arquivo de eventos passados com galeria de mídia.
* **Depoimentos Interativos:**
    * **Desktop:** Rolagem automática infinita (Infinite Scroll).
    * **Mobile:** Navegação por *Swipe* (arrastar com o dedo) para melhor usabilidade.
* **Integrações:**
    * Formulário de inscrição integrado (Google Forms via iFrame).
    * Botões "Click-to-Chat" para WhatsApp (Agendamento e envio de comprovantes).
    * Mapas e links de localização.

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Para estruturação do conteúdo e SEO.
* **CSS3:**
    * **Flexbox & Grid Layout:** Para posicionamento de elementos complexos (ex: grade de programação do evento).
    * **CSS Variables:** Para fácil manutenção de cores e fontes.
    * **Media Queries:** Ajustes finos para breakpoints de tablet e mobile.
    * **Scroll Snap:** Para a experiência nativa de carrossel em dispositivos móveis.
* **JavaScript (Vanilla):**
    * Manipulação do DOM para o menu hambúrguer.
    * Lógica de navegação e banners flutuantes.
    * Duplicação de elementos para o efeito de "loop infinito" nos depoimentos.

## 📂 Estrutura do Projeto

```text
/
├── index.html             # Página principal (Portfólio, Bio e Agendamento)
├── proximo-evento.html    # Landing Page do evento atual (Somos Água - 29/11)
├── evento-01.html         # Arquivo do evento passado (1ª Imersão)
├── style.css              # Folha de estilos global e responsividade
├── script.js              # Lógica de interação, menu e scroll
├── images/                # Pasta de ativos (fotos, ícones, backgrounds)
└── README.md              # Documentação do projeto
🌍 Hospedagem e Deploy
O projeto foi otimizado para hospedagem estática (Hostinger, Vercel, Netlify ou GitHub Pages).

Estrutura: Arquivos estáticos (HTML/CSS/JS).

E-mail Profissional: Configurado via DNS (MX/SPF/DKIM) para uso com domínio personalizado (@eneidafeijo.com).

✒️ Autores e Créditos
Desenvolvimento: Raphael Salles

Contato: WhatsApp | Email

© 2025 Eneida Feijó. Todos os direitos reservados.