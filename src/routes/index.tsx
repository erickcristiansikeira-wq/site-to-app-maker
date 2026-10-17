import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PokéWebKit — Editor de ROMs Pokémon no celular" },
      {
        name: "description",
        content:
          "Abra o PokéWebKit no celular, edite dados de ROMs de Pokémon GBA e NDS e instale como app.",
      },
      { property: "og:title", content: "PokéWebKit — Editor de ROMs Pokémon no celular" },
      {
        property: "og:description",
        content:
          "Abra o PokéWebKit no celular, edite dados de ROMs de Pokémon GBA e NDS e instale como app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-10 text-foreground">
      <img
        src="/pokewebkit/assets/images/logo.png"
        alt="PokéWebKit"
        className="w-28 h-28 rounded-2xl shadow-lg"
      />
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-center">PokéWebKit</h1>
      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        Editor de dados de ROMs de Pokémon GBA e NDS, pronto para usar no celular.
      </p>

      <a
        href="/pokewebkit/index.html"
        className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        Abrir o PokéWebKit
      </a>

      <div className="mt-10 w-full max-w-sm rounded-2xl border border-border bg-card p-5">
        <h2 className="text-sm font-semibold">Instalar no Android</h2>
        <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Toque em “Abrir o PokéWebKit”.</li>
          <li>No menu do Chrome (⋮), toque em “Adicionar à tela inicial”.</li>
          <li>Confirme — o app ganha ícone próprio e abre em tela cheia.</li>
        </ol>
      </div>
    </div>
  );
}
