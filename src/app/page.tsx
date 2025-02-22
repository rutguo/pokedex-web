"use client";

import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export default function Dashboard() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1337/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-4 min-h-96">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {pokemon?.map((p) => (
            <li key={p.id}>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    <span className="text-black/50 pr-1">{`#${p.id}`}</span>
                    {p.name}
                  </h2>
                  {p.types.map((type: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset mr-2"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
