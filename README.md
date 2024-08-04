# Lithium core

**Lithium** est un framework léger et performant pour construire des applications web modernes en utilisant des composants réactifs. Il est conçu pour être flexible, facile à utiliser, et s'intègre bien avec les standards du Web, tout en offrant des fonctionnalités avancées pour la gestion de l'état, des templates, et des composants Web.

## Features

- ⚡ **Performance Optimized**: Optimisé pour des rendus rapides et réactifs.
- 🛠 **Component-Based**: Créez des composants réutilisables et encapsulés.
- 🔄 **Reactive State Management**: Gérez facilement les états réactifs avec des observables et des consommables.
- 🌐 **Web Standards**: Basé sur les standards du Web, compatible avec Web Components.
- 🧩 **Flexible Directives**: Rich set of directives (`repeat`, `asyncAppend`, `when`, `until`, etc.) for dynamic templating.
- 📦 **Lightweight**: Minimal footprint for fast loading and execution.

## Installation

Vous pouvez installer Lithium via NPM:

```bash
npm install @lithium-framework/core
```

## Getting Started

Voici comment commencer avec Lithium pour créer un composant simple.

### 1. Créer un composant Web simple

```tsx
import { html, WebComponent, customElement, state } from '@lithium-framework/core';

// Définition d'un Web Component simple
@customElement({
  name: 'hello-world',
  template: html`<p>Hello, ${context => context.name}!</p>`
})
class HelloWorld extends WebComponent {
  @state name: string = 'World';
}
```

### 2. Utiliser le composant dans votre application

```tsx
import { render, html } from '@lithium-framework/core';
import './hello-world'; // Importer le composant

// Rendu du composant
render(html`<hello-world></hello-world>`, document.getElementById('app'));
```

## Documentation

Pour une documentation complète, veuillez visiter [Lithium Documentation](https://lithium-framework.github.io/lithium.io/).

## Exemples de Directives

### Utilisation de `repeat`

```tsx
import { html, repeat } from '@lithium-framework/core';

const items = ['Item 1', 'Item 2', 'Item 3'];

const template = html`<ul>
  ${repeat(items, item => html`<li>${item}</li>`)}
</ul>`;
```

### Utilisation de `asyncAppend`

```tsx
import { html, asyncAppend } from '@lithium-framework/core';

const dataPromise = fetchData();

const template = html`<div>
  ${asyncAppend(dataPromise, data => html`<p>${data}</p>`)}
</div>`;
```