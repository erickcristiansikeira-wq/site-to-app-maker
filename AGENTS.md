<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# PokéWebKit no Lovable

- O site PokéWebKit (Angular 13, original em /tmp) é servido como build estático em `public/pokewebkit/`. Não reconstruir em React; recompilar o Angular (Node 22 + `ng build --configuration production --base-href ./`) e recopiar para `public/pokewebkit/`, incluindo `manifest.webmanifest`, `icon-192/512.png` e o link do manifesto em `index.html`.
- O app usa hash routing (`useHash: true`) para deep links sobreviverem a refresh e à instalação como PWA/APK.
- Objetivo do usuário: APK para Android. Caminho combinado: publicar o site e gerar APK no PWABuilder.com (ou "Adicionar à tela inicial").
