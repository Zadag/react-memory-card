import { useState } from "react";
import ashe from "../assets/Ashe_0.jpeg";
import asol from "../assets/AurelionSol_0.jpeg";
import corki from "../assets/Corki_0.jpeg";
import khazix from "../assets/Khazix_0.jpeg";
import amumu from "../assets/Amumu_0.jpeg";
import ezreal from "../assets/Ezreal_0.jpeg";
import graves from "../assets/Graves_0.jpeg";
import jax from "../assets/Jax_0.jpeg";
import leblanc from "../assets/Leblanc_0.jpeg";
import masteryi from "../assets/MasterYi_0.jpeg";
import olaf from "../assets/Olaf_0.jpeg";
import rengar from "../assets/Rengar_0.jpeg";
import shyvana from "../assets/Shyvana_0.jpeg";
import teemo from "../assets/Teemo_0.jpeg";
import viktor from "../assets/Viktor_0.jpeg";
import yorick from "../assets/Yorick_0.jpeg";

const useCards = () => {
  const [cardData, setCardData] = useState([
    {
      name: "Asol",
      clicked: false,
      src: asol,
    },
    {
      name: "Ashe",
      clicked: false,
      src: ashe,
    },
    {
      name: "Corki",
      clicked: false,
      src: corki,
    },
    {
      name: "Khazix",
      clicked: false,
      src: khazix,
    },
    {
      name: "Amumu",
      clicked: false,
      src: amumu,
    },
    {
      name: "Ezreal",
      clicked: false,
      src: ezreal,
    },
    {
      name: "Graves",
      clicked: false,
      src: graves,
    },
    {
      name: "Jax",
      clicked: false,
      src: jax,
    },
    {
      name: "Leblanc",
      clicked: false,
      src: leblanc,
    },
    {
      name: "Master Yi",
      clicked: false,
      src: masteryi,
    },
    {
      name: "Olaf",
      clicked: false,
      src: olaf,
    },
    {
      name: "Rengar",
      clicked: false,
      src: rengar,
    },
    {
      name: "Shyvana",
      clicked: false,
      src: shyvana,
    },
    {
      name: "Teemo",
      clicked: false,
      src: teemo,
    },
    {
      name: "Viktor",
      clicked: false,
      src: viktor,
    },
    {
      name: "Yorick",
      clicked: false,
      src: yorick,
    },
  ]);

  return [cardData, setCardData];
};

export default useCards;
