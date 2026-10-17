
import { createFileRoute, Link } from "@tanstack/react-router";
import SpriteAnimationEditor from "../components/SpriteAnimationEditor";

export const Route = createFileRoute("/sprite-editor")({
  component: SpriteEditorPage,
  });

  function SpriteEditorPage() {
    return (
        <main className="min-h-screen bg-background px-4 py-6 text-foreground">
              <div className="mx-auto max-w-5xl">
                      <Link
                                to="/"
                                          className="mb-6 inline-block text-sm underline"
                                                  >
                                                            ← Voltar ao início
                                                                    </Link>

                                                                            <h1 className="mb-2 text-2xl font-bold">
                                                                                      Editor de animações Pokémon
                                                                                              </h1>

                                                                                                      <p className="mb-6 text-sm text-muted-foreground">
                                                                                                                Importe uma spritesheet, visualize os quadros,
                                                                                                                          ajuste a velocidade e substitua frames.
                                                                                                                                  </p>

                                                                                                                                          <SpriteAnimationEditor />
                                                                                                                                                </div>
                                                                                                                                                    </main>
                                                                                                                                                      );
                                                                                                                                                      }
                                                                                                                                                      