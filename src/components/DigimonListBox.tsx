"use client";
import { Digimon } from "@/types/types";
import { useState, useEffect } from "react";
import CardDetailsDigimon from "./CardDetailsDigimon";
import CardSkel from "./CardSkel";

const DigimonListBox = ({ data }: any) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [datosDigimons, setDatosDigimons] = useState<Digimon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function getNextFive(data: Digimon[]) {
    const indiceInicio = (page - 1) * perPage;
    const indiceFin = indiceInicio + perPage;
    let res: Digimon[] = data.slice(indiceInicio, indiceFin);

    return res;
  }

  const handleScroll = () => {
    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    let scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsLoading(true);
      setTimeout(() => {
        setPage(page + 1);
        setIsLoading(false);
      }, 1500);
    }
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
      {/* <p>DigimonListBox</p> */}

      <div className="grid md:grid-cols-3">
        {datosDigimons.map((digimon: Digimon) => (
          <CardDetailsDigimon key={digimon.name} datosDigimon={digimon} />
        ))}
      </div>

      {isLoading && (
        <div className="grid md:grid-cols-3">
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
          <CardSkel />
        </div>

        // <div className="text-center mx-2 my-5 py-2 rounded animate-pulse bg-slate-500">
        //   Cargando...
        // </div>
      )}
      <br />
    </div>
  );
};

export default DigimonListBox;
