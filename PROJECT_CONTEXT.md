# DevClub Landing Page

## Stack

- React
- TypeScript
- Vite
- pnpm
- CSS Modules
- GSAP
- GSAP ScrollTrigger
- Motion
- Lucide React

## Regras obrigatórias

- Não usar Tailwind CSS.
- Não usar styled-components.
- Não usar Framer Motion.
- Não usar `any`.
- Não usar estilos inline.
- Cada componente deve possuir seu próprio arquivo `.module.css`.
- Componentes devem ser pequenos e reutilizáveis.
- Animações complexas e baseadas em scroll devem usar GSAP.
- Microinterações e animações simples devem usar Motion.
- Toda animação deve respeitar `prefers-reduced-motion`.
- Usar HTML semântico e acessível.
- Evitar dependências desnecessárias.
- O projeto deve funcionar com `pnpm dev`.

## Direção visual

- Fundo: `#0a0a0c`
- Verde principal: `#00ff66`
- Roxo secundário
- Visual premium e minimalista
- Cyberpunk discreto
- Glassmorphism sutil
- Poucos efeitos neon
- Tipografia grande e espaçosa
- Evitar aparência genérica de template

## Responsabilidades das bibliotecas

### GSAP

Usar para:

- ScrollTrigger
- timelines
- pinning
- animações de texto
- movimento da logo
- parallax
- horizontal scroll
- transições entre seções

### Motion

Usar para:

- hover de botões
- entrada de cards
- fades simples
- pequenos staggers
- microinterações