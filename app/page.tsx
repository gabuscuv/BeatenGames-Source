import { Suspense } from "react";
import BeatenGames from "./BeatenGames";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Suspense>
        <BeatenGames />
      </Suspense>
    </main>
  );
}
