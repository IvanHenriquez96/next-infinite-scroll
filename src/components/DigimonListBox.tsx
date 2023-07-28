"use client";
import { Digimon } from "@/types/types";
import { useState, useEffect } from "react";
import CardDetailsDigimon from "./CardDetailsDigimon";

const DigimonListBox = ({ data }: any) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [datosDigimons, setDatosDigimons] = useState<Digimon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function getNextFive(data: Digimon[]) {
    const indiceInicio = (page - 1) * perPage;
    const indiceFin = indiceInicio + perPage;
    let res: Digimon[] = data.slice(indiceInicio, indiceFin);
    console.log({ res, data });

    return res;
  }

  const handleScroll = () => {
    console.log("handleScroll");
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    let digimons = getNextFive(data);
    setDatosDigimons([...datosDigimons, ...digimons]);
    setIsLoading(false);

    window.addEventListener("scroll", handleScroll);
    let body = document.querySelector("body");
    if (body) {
      body.addEventListener("touchmove", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (body) {
        body.removeEventListener("touchmove", handleScroll);
      }
    };
  }, [page]);

  return (
    <div>
      <p>DigimonListBox</p>

      <div className="grid md:grid-cols-3">
        {datosDigimons.map((digimon: Digimon) => (
          <CardDetailsDigimon key={digimon.name} datosDigimon={digimon} />
        ))}
      </div>

      {isLoading && (
        <div className="text-center mx-2 my-5 py-2 rounded animate-pulse bg-slate-500">
          Cargando...
        </div>
      )}
      <br />
    </div>
  );
};

export default DigimonListBox;
