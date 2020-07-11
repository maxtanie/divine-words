import React, { Component, useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import BoxVerse from "./BoxVerse";

// IMPORTATION OF ALL MY VERSE FROM A TO Z
import verseA from "./BibleVerseObject/verseA.json";
import verseB from "./BibleVerseObject/verseB.json";
import verseC from "./BibleVerseObject/verseC.json";

import verseD from "./BibleVerseObject/verseD.json";
import verseE from "./BibleVerseObject/verseE.json";
import verseF from "./BibleVerseObject/verseF.json";

import verseG from "./BibleVerseObject/verseG.json";
import verseH from "./BibleVerseObject/verseH.json";
import verseI from "./BibleVerseObject/verseI.json";

import verseJ from "./BibleVerseObject/verseJ.json";
import verseK from "./BibleVerseObject/verseK.json";
import verseL from "./BibleVerseObject/verseL.json";

import verseM from "./BibleVerseObject/verseM.json";
import verseN from "./BibleVerseObject/verseN.json";
import verseO from "./BibleVerseObject/verseO.json";

import verseP from "./BibleVerseObject/verseP.json";
import verseQ from "./BibleVerseObject/verseQ.json";
import verseR from "./BibleVerseObject/verseR.json";

import verseS from "./BibleVerseObject/verseS.json";
import verseT from "./BibleVerseObject/verseT.json";
import verseU from "./BibleVerseObject/verseU.json";

import verseV from "./BibleVerseObject/verseV.json";
import verseW from "./BibleVerseObject/verseW.json";
import verseX from "./BibleVerseObject/verseX.json";

import verseY from "./BibleVerseObject/verseY.json";
import verseZ from "./BibleVerseObject/verseZ.json";

let types = '';

// arr
let dataVerses = [
  verseA,
  verseB,
  verseC,
  verseD,
  verseE,
  verseF,
  verseG,
  verseH,
  verseI,
  verseJ,
  verseK,
  verseL,
  verseM,
  verseN,
  verseO,
  verseP,
  verseQ,
  verseR,
  verseS,
  verseT,
  verseU,
  verseV,
  verseW,
  verseX,
  verseY,
  verseZ
];

let num = 0;

const AlphaVerse = ({ index, alpha, vLen }) => {
  //HOOKS FOR A VERSE
  const [letterA, setLetterA] = useState("");
  const [verseA, setVerseA] = useState("");
  const [nameVerseA, setNameVerseA] = useState("");
  const [bgVerseA, setBgVerseA] = useState("");
  const [bgResponsiveVersesA, setBgResponsiveVersesA] = useState("");
  const [colorMainA, setColorMainA] = useState("");
  const [verseSoundA, setVerseSoundA] = useState("");
  const [soundIdA, setSoundIdA] = useState("");
  const [nameVerseALength, setNameVerseALength] = useState("");

  // HOOKS FOR B VERSE
  const [letterB, setLetterB] = useState("");
  const [verseB, setVerseB] = useState("");
  const [nameVerseB, setNameVerseB] = useState("");
  const [bgVerseB, setBgVerseB] = useState("");
  const [bgResponsiveVersesB, setBgResponsiveVersesB] = useState("");
  const [colorMainB, setColorMainB] = useState("");
  const [verseSoundB, setVerseSoundB] = useState("");
  const [soundIdB, setSoundIdB] = useState("");
  const [nameVerseBLength, setNameVerseBLength] = useState("");

  // HOOKS FOR C VERSE
  const [letterC, setLetterC] = useState("");
  const [verseC, setVerseC] = useState("");
  const [nameVerseC, setNameVerseC] = useState("");
  const [bgVerseC, setBgVerseC] = useState("");
  const [bgResponsiveVersesC, setBgResponsiveVersesC] = useState("");
  const [colorMainC, setColorMainC] = useState("");
  const [verseSoundC, setVerseSoundC] = useState("");
  const [soundIdC, setSoundIdC] = useState("");
  const [nameVerseCLength, setNameVerseCLength] = useState("");

  //HOOKS FOR D VERSE
  const [letterD, setLetterD] = useState("");
  const [verseD, setVerseD] = useState("");
  const [nameVerseD, setNameVerseD] = useState("");
  const [bgVerseD, setBgVerseD] = useState("");
  const [bgResponsiveVersesD, setBgResponsiveVersesD] = useState("");
  const [colorMainD, setColorMainD] = useState("");
  const [verseSoundD, setVerseSoundD] = useState("");
  const [soundIdD, setSoundIdD] = useState("");
  const [nameVerseDLength, setNameVerseDLength] = useState("");

  // HOOKS FOR E VERSE
  const [letterE, setLetterE] = useState("");
  const [verseE, setVerseE] = useState("");
  const [nameVerseE, setNameVerseE] = useState("");
  const [bgVerseE, setBgVerseE] = useState("");
  const [bgResponsiveVersesE, setBgResponsiveVersesE] = useState("");
  const [colorMainE, setColorMainE] = useState("");
  const [verseSoundE, setVerseSoundE] = useState("");
  const [soundIdE, setSoundIdE] = useState("");
  const [nameVerseELength, setNameVerseELength] = useState("");

  // HOOKS FOR F VERSE
  const [letterF, setLetterF] = useState("");
  const [verseF, setVerseF] = useState("");
  const [nameVerseF, setNameVerseF] = useState("");
  const [bgVerseF, setBgVerseF] = useState("");
  const [bgResponsiveVersesF, setBgResponsiveVersesF] = useState("");
  const [colorMainF, setColorMainF] = useState("");
  const [verseSoundF, setVerseSoundF] = useState("");
  const [soundIdF, setSoundIdF] = useState("");
  const [nameVerseFLength, setNameVerseFLength] = useState("");

  // HOOKS FOR G VERSE
  const [letterG, setLetterG] = useState("");
  const [verseG, setVerseG] = useState("");
  const [nameVerseG, setNameVerseG] = useState("");
  const [bgVerseG, setBgVerseG] = useState("");
  const [bgResponsiveVersesG, setBgResponsiveVersesG] = useState("");
  const [colorMainG, setColorMainG] = useState("");
  const [verseSoundG, setVerseSoundG] = useState("");
  const [soundIdG, setSoundIdG] = useState("");
  const [nameVerseGLength, setNameVerseGLength] = useState("");

  // HOOKS FOR H VERSE
  const [letterH, setLetterH] = useState("");
  const [verseH, setVerseH] = useState("");
  const [nameVerseH, setNameVerseH] = useState("");
  const [bgVerseH, setBgVerseH] = useState("");
  const [bgResponsiveVersesH, setBgResponsiveVersesH] = useState("");
  const [colorMainH, setColorMainH] = useState("");
  const [verseSoundH, setVerseSoundH] = useState("");
  const [soundIdH, setSoundIdH] = useState("");
  const [nameVerseHLength, setNameVerseHLength] = useState("");

  // HOOKS FOR I VERSE
  const [letterI, setLetterI] = useState("");
  const [verseI, setVerseI] = useState("");
  const [nameVerseI, setNameVerseI] = useState("");
  const [bgVerseI, setBgVerseI] = useState("");
  const [bgResponsiveVersesI, setBgResponsiveVersesI] = useState("");
  const [colorMainI, setColorMainI] = useState("");
  const [verseSoundI, setVerseSoundI] = useState("");
  const [soundIdI, setSoundIdI] = useState("");
  const [nameVerseILength, setNameVerseILength] = useState("");

  // HOOKS FOR J VERSE
  const [letterJ, setLetterJ] = useState("");
  const [verseJ, setVerseJ] = useState("");
  const [nameVerseJ, setNameVerseJ] = useState("");
  const [bgVerseJ, setBgVerseJ] = useState("");
  const [bgResponsiveVersesJ, setBgResponsiveVersesJ] = useState("");
  const [colorMainJ, setColorMainJ] = useState("");
  const [verseSoundJ, setVerseSoundJ] = useState("");
  const [soundIdJ, setSoundIdJ] = useState("");
  const [nameVerseJLength, setNameVerseJLength] = useState("");

  // HOOKS FOR K VERSE
  const [letterK, setLetterK] = useState("");
  const [verseK, setVerseK] = useState("");
  const [nameVerseK, setNameVerseK] = useState("");
  const [bgVerseK, setBgVerseK] = useState("");
  const [bgResponsiveVersesK, setBgResponsiveVersesK] = useState("");
  const [colorMainK, setColorMainK] = useState("");
  const [verseSoundK, setVerseSoundK] = useState("");
  const [soundIdK, setSoundIdK] = useState("");
  const [nameVerseKLength, setNameVerseKLength] = useState("");

  // HOOKS FOR L VERSE
  const [letterL, setLetterL] = useState("");
  const [verseL, setVerseL] = useState("");
  const [nameVerseL, setNameVerseL] = useState("");
  const [bgVerseL, setBgVerseL] = useState("");
  const [bgResponsiveVersesL, setBgResponsiveVersesL] = useState("");
  const [colorMainL, setColorMainL] = useState("");
  const [verseSoundL, setVerseSoundL] = useState("");
  const [soundIdL, setSoundIdL] = useState("");
  const [nameVerseLLength, setNameVerseLLength] = useState("");

  // HOOKS FOR M VERSE
  const [letterM, setLetterM] = useState("");
  const [verseM, setVerseM] = useState("");
  const [nameVerseM, setNameVerseM] = useState("");
  const [bgVerseM, setBgVerseM] = useState("");
  const [bgResponsiveVersesM, setBgResponsiveVersesM] = useState("");
  const [colorMainM, setColorMainM] = useState("");
  const [verseSoundM, setVerseSoundM] = useState("");
  const [soundIdM, setSoundIdM] = useState("");
  const [nameVerseMLength, setNameVerseMLength] = useState("");

  // HOOKS FOR N VERSE
  const [letterN, setLetterN] = useState("");
  const [verseN, setVerseN] = useState("");
  const [nameVerseN, setNameVerseN] = useState("");
  const [bgVerseN, setBgVerseN] = useState("");
  const [bgResponsiveVersesN, setBgResponsiveVersesN] = useState("");
  const [colorMainN, setColorMainN] = useState("");
  const [verseSoundN, setVerseSoundN] = useState("");
  const [soundIdN, setSoundIdN] = useState("");
  const [nameVerseNLength, setNameVerseNLength] = useState("");

  // HOOKS FOR O VERSE
  const [letterO, setLetterO] = useState("");
  const [verseO, setVerseO] = useState("");
  const [nameVerseO, setNameVerseO] = useState("");
  const [bgVerseO, setBgVerseO] = useState("");
  const [bgResponsiveVersesO, setBgResponsiveVersesO] = useState("");
  const [colorMainO, setColorMainO] = useState("");
  const [verseSoundO, setVerseSoundO] = useState("");
  const [soundIdO, setSoundIdO] = useState("");
  const [nameVerseOLength, setNameVerseOLength] = useState("");

  // HOOKS FOR P VERSE
  const [letterP, setLetterP] = useState("");
  const [verseP, setVerseP] = useState("");
  const [nameVerseP, setNameVerseP] = useState("");
  const [bgVerseP, setBgVerseP] = useState("");
  const [bgResponsiveVersesP, setBgResponsiveVersesP] = useState("");
  const [colorMainP, setColorMainP] = useState("");
  const [verseSoundP, setVerseSoundP] = useState("");
  const [soundIdP, setSoundIdP] = useState("");
  const [nameVersePLength, setNameVersePLength] = useState("");

  // HOOKS FOR Q VERSE
  const [letterQ, setLetterQ] = useState("");
  const [verseQ, setVerseQ] = useState("");
  const [nameVerseQ, setNameVerseQ] = useState("");
  const [bgVerseQ, setBgVerseQ] = useState("");
  const [bgResponsiveVersesQ, setBgResponsiveVersesQ] = useState("");
  const [colorMainQ, setColorMainQ] = useState("");
  const [verseSoundQ, setVerseSoundQ] = useState("");
  const [soundIdQ, setSoundIdQ] = useState("");
  const [nameVerseQLength, setNameVerseQLength] = useState("");

  // HOOKS FOR R VERSE
  const [letterR, setLetterR] = useState("");
  const [verseR, setVerseR] = useState("");
  const [nameVerseR, setNameVerseR] = useState("");
  const [bgVerseR, setBgVerseR] = useState("");
  const [bgResponsiveVersesR, setBgResponsiveVersesR] = useState("");
  const [colorMainR, setColorMainR] = useState("");
  const [verseSoundR, setVerseSoundR] = useState("");
  const [soundIdR, setSoundIdR] = useState("");
  const [nameVerseRLength, setNameVerseRLength] = useState("");

  // HOOKS FOR S VERSE
  const [letterS, setLetterS] = useState("");
  const [verseS, setVerseS] = useState("");
  const [nameVerseS, setNameVerseS] = useState("");
  const [bgResponsiveVersesS, setBgResponsiveVersesS] = useState("");
  const [bgVerseS, setBgVerseS] = useState("");
  const [colorMainS, setColorMainS] = useState("");
  const [verseSoundS, setVerseSoundS] = useState("");
  const [soundIdS, setSoundIdS] = useState("");
  const [nameVerseSLength, setNameVerseSLength] = useState("");

  // HOOKS FOR T VERSE
  const [letterT, setLetterT] = useState("");
  const [verseT, setVerseT] = useState("");
  const [nameVerseT, setNameVerseT] = useState("");
  const [bgVerseT, setBgVerseT] = useState("");
  const [bgResponsiveVersesT, setBgResponsiveVersesT] = useState("");
  const [colorMainT, setColorMainT] = useState("");
  const [verseSoundT, setVerseSoundT] = useState("");
  const [soundIdT, setSoundIdT] = useState("");
  const [nameVerseTLength, setNameVerseTLength] = useState("");

  // HOOKS FOR U VERSE
  const [letterU, setLetterU] = useState("");
  const [verseU, setVerseU] = useState("");
  const [nameVerseU, setNameVerseU] = useState("");
  const [bgVerseU, setBgVerseU] = useState("");
  const [bgResponsiveVersesU, setBgResponsiveVersesU] = useState("");
  const [colorMainU, setColorMainU] = useState("");
  const [verseSoundU, setVerseSoundU] = useState("");
  const [soundIdU, setSoundIdU] = useState("");
  const [nameVerseULength, setNameVerseULength] = useState("");

  // HOOKS FOR V VERSE
  const [letterV, setLetterV] = useState("");
  const [verseV, setVerseV] = useState("");
  const [nameVerseV, setNameVerseV] = useState("");
  const [bgVerseV, setBgVerseV] = useState("");
  const [bgResponsiveVersesV, setBgResponsiveVersesV] = useState("");
  const [colorMainV, setColorMainV] = useState("");
  const [verseSoundV, setVerseSoundV] = useState("");
  const [soundIdV, setSoundIdV] = useState("");
  const [nameVerseVLength, setNameVerseVLength] = useState("");

  // HOOKS FOR W VERSE
  const [letterW, setLetterW] = useState("");
  const [verseW, setVerseW] = useState("");
  const [nameVerseW, setNameVerseW] = useState("");
  const [bgVerseW, setBgVerseW] = useState("");
  const [bgResponsiveVersesW, setBgResponsiveVersesW] = useState("");
  const [colorMainW, setColorMainW] = useState("");
  const [verseSoundW, setVerseSoundW] = useState("");
  const [soundIdW, setSoundIdW] = useState("");
  const [nameVerseWLength, setNameVerseWLength] = useState("");

  // HOOKS FOR X VERSE
  const [letterX, setLetterX] = useState("");
  const [verseX, setVerseX] = useState("");
  const [nameVerseX, setNameVerseX] = useState("");
  const [bgVerseX, setBgVerseX] = useState("");
  const [bgResponsiveVersesX, setBgResponsiveVersesX] = useState("");
  const [colorMainX, setColorMainX] = useState("");
  const [verseSoundX, setVerseSoundX] = useState("");
  const [soundIdX, setSoundIdX] = useState("");
  const [nameVerseXLength, setNameVerseXLength] = useState("");

  // HOOKS FOR Y VERSE
  const [letterY, setLetterY] = useState("");
  const [verseY, setVerseY] = useState("");
  const [nameVerseY, setNameVerseY] = useState("");
  const [bgVerseY, setBgVerseY] = useState("");
  const [bgResponsiveVersesY, setBgResponsiveVersesY] = useState("");
  const [colorMainY, setColorMainY] = useState("");
  const [verseSoundY, setVerseSoundY] = useState("");
  const [soundIdY, setSoundIdY] = useState("");
  const [nameVerseYLength, setNameVerseYLength] = useState("");

  // HOOKS FOR Z VERSE
  const [letterZ, setLetterZ] = useState("");
  const [verseZ, setVerseZ] = useState("");
  const [nameVerseZ, setNameVerseZ] = useState("");
  const [bgVerseZ, setBgVerseZ] = useState("");
  const [bgResponsiveVersesZ, setBgResponsiveVersesZ] = useState("");
  const [colorMainZ, setColorMainZ] = useState("");
  const [verseSoundZ, setVerseSoundZ] = useState("");
  const [soundIdZ, setSoundIdZ] = useState("");
  const [nameVerseZLength, setNameVerseZLength] = useState("");

  useEffect(() => {
    soundPlay();
    getVerseA();
    getVerseB();
    getVerseC();

    getVerseD();
    getVerseE();
    getVerseF();

    getVerseG();
    getVerseH();
    getVerseI();

    getVerseJ();
    getVerseK();
    getVerseL();

    getVerseM();
    getVerseN();
    getVerseO();

    getVerseP();
    getVerseQ();
    getVerseR();

    getVerseS();
    getVerseT();
    getVerseU();

    getVerseV();
    getVerseW();
    getVerseX();

    getVerseY();
    getVerseZ();
  }, []);

  const soundPlay = (src, id, e) => {
    const sound = new Howl({
      src: [src],
      id: id,
      onplay: function() {
         // Fires when the sound finishes playing.
        sound.once('load', function() {
            sound.play();
        })
        sound.once('unlock', function() {
          sound.play();
        });
      }
    });

   
   sound.play()
    
  console.log(sound);


  };
  
  // GET ALL THE VERSE A
  const getVerseA = () => {
    
    let dataVerse = dataVerses[0].verseA;
    // const randomN = uniqueRandom(0, dataVerse.length);
    // let numbersVerses = [...Array(randomN()).keys()];

    // let randomNum = Math.flioor(Math.random() * numbersVerses.length);
    // let lastRandom = sessionStorage.getItem("verseLen");    
    // let randNum = Math.floor(Math.random() * dataVerse.length);
    // if(parseInt(randNum) === parseInt(lastRandom)) randNum = Math.floor(Math.random() * dataVerse.length);
    // sessionStorage.setItem("verseLen", randNum); 
   

    let lastRandom = sessionStorage.getItem("verseLenA") ? sessionStorage.getItem("verseLenA") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenA", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenA", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterA(randomVerse.letter);
    setVerseA(randomVerse.verse);
    setNameVerseA(randomVerse.name);
    setBgVerseA(randomVerse.bgVerses);
    setBgResponsiveVersesA(randomVerse.bgResponsiveVerses);
    setColorMainA(randomVerse.colorMain);
    setVerseSoundA(randomVerse.verseSound);
    setSoundIdA(randomVerse.id);
    setNameVerseALength(dataVerse);
  };

  // GET ALL THE VERSE B
  const getVerseB = () => {
    let dataVerse = dataVerses[1].verseB;
   
    let lastRandom = sessionStorage.getItem("verseLenB") ? sessionStorage.getItem("verseLenB") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenB", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenB", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterB(randomVerse.letter);
    setVerseB(randomVerse.verse);
    setNameVerseB(randomVerse.name);
    setBgVerseB(randomVerse.bgVerses);
    setBgResponsiveVersesB(randomVerse.bgResponsiveVerses);
    setColorMainB(randomVerse.colorMain);
    setVerseSoundB(randomVerse.verseSound);
    setSoundIdB(randomVerse.id);
    setNameVerseBLength(dataVerse);
  };

  // GET ALL THE VERSE C
  const getVerseC = () => {
    let dataVerse = dataVerses[2].verseC;
  
    let lastRandom = sessionStorage.getItem("verseLenC") ? sessionStorage.getItem("verseLenC") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenC", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenC", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterC(randomVerse.letter);
    setVerseC(randomVerse.verse);
    setNameVerseC(randomVerse.name);
    setBgVerseC(randomVerse.bgVerses);
    setBgResponsiveVersesC(randomVerse.bgResponsiveVerses);
    setColorMainC(randomVerse.colorMain);
    setVerseSoundC(randomVerse.verseSound);
    setSoundIdC(randomVerse.id);
    setNameVerseCLength(dataVerse);
  };

  // GET ALL THE VERSE D
  const getVerseD = () => {
    let dataVerse = dataVerses[3].verseD;
    
    let lastRandom = sessionStorage.getItem("verseLenD") ? sessionStorage.getItem("verseLenD") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenD", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenD", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterD(randomVerse.letter);
    setVerseD(randomVerse.verse);
    setNameVerseD(randomVerse.name);
    setBgVerseD(randomVerse.bgVerses);
    setBgResponsiveVersesD(randomVerse.bgResponsiveVerses);
    setColorMainD(randomVerse.colorMain);
    setVerseSoundD(randomVerse.verseSound);
    setSoundIdD(randomVerse.id);
    setNameVerseDLength(dataVerse);
  };

  // GET ALL THE VERSE E
  const getVerseE = () => {
    let dataVerse = dataVerses[4].verseE;

    let lastRandom = sessionStorage.getItem("verseLenE") ? sessionStorage.getItem("verseLenE") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenE", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenE", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterE(randomVerse.letter);
    setVerseE(randomVerse.verse);
    setNameVerseE(randomVerse.name);
    setBgVerseE(randomVerse.bgVerses);
    setBgResponsiveVersesE(randomVerse.bgResponsiveVerses);
    setColorMainE(randomVerse.colorMain);
    setVerseSoundE(randomVerse.verseSound);
    setSoundIdE(randomVerse.id);
    setNameVerseELength(dataVerse);
  };

  // GET ALL THE VERSE F
  const getVerseF = () => {
    let dataVerse = dataVerses[5].verseF;
    
    let lastRandom = sessionStorage.getItem("verseLenF") ? sessionStorage.getItem("verseLenF") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenF", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenF", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterF(randomVerse.letter);
    setVerseF(randomVerse.verse);
    setNameVerseF(randomVerse.name);
    setBgVerseF(randomVerse.bgVerses);
    setBgResponsiveVersesF(randomVerse.bgResponsiveVerses);
    setColorMainF(randomVerse.colorMain);
    setVerseSoundF(randomVerse.verseSound);
    setSoundIdF(randomVerse.id);
    setNameVerseFLength(dataVerse);
  };

  // GET ALL THE VERSE G
  const getVerseG = () => {
    let dataVerse = dataVerses[6].verseG;

    let lastRandom = sessionStorage.getItem("verseLenG") ? sessionStorage.getItem("verseLenG") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenG", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenG", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterG(randomVerse.letter);
    setVerseG(randomVerse.verse);
    setNameVerseG(randomVerse.name);
    setBgVerseG(randomVerse.bgVerses);
    setBgResponsiveVersesG(randomVerse.bgResponsiveVerses);
    setColorMainG(randomVerse.colorMain);
    setVerseSoundG(randomVerse.verseSound);
    setSoundIdG(randomVerse.id);
    setNameVerseGLength(dataVerse);
  };

  // GET ALL THE VERSE H
  const getVerseH = () => {
    let dataVerse = dataVerses[7].verseH;
    
    let lastRandom = sessionStorage.getItem("verseLenH") ? sessionStorage.getItem("verseLenH") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenH", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenH", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterH(randomVerse.letter);
    setVerseH(randomVerse.verse);
    setNameVerseH(randomVerse.name);
    setBgVerseH(randomVerse.bgVerses);
    setBgResponsiveVersesH(randomVerse.bgResponsiveVerses);
    setColorMainH(randomVerse.colorMain);
    setVerseSoundH(randomVerse.verseSound);
    setSoundIdH(randomVerse.id);
    setNameVerseHLength(dataVerse);
  };

  // GET ALL THE VERSE I
  const getVerseI = () => {
    let dataVerse = dataVerses[8].verseI;
  
    let lastRandom = sessionStorage.getItem("verseLenI") ? sessionStorage.getItem("verseLenI") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenI", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenI", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterI(randomVerse.letter);
    setVerseI(randomVerse.verse);
    setNameVerseI(randomVerse.name);
    setBgVerseI(randomVerse.bgVerses);
    setBgResponsiveVersesI(randomVerse.bgResponsiveVerses);
    setColorMainI(randomVerse.colorMain);
    setVerseSoundI(randomVerse.verseSound);
    setSoundIdI(randomVerse.id);
    setNameVerseILength(dataVerse);
  };

  // GET ALL THE VERSE J
  const getVerseJ = () => {
    let dataVerse = dataVerses[9].verseJ;
  
    let lastRandom = sessionStorage.getItem("verseLenJ") ? sessionStorage.getItem("verseLenJ") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenJ", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenJ", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterJ(randomVerse.letter);
    setVerseJ(randomVerse.verse);
    setNameVerseJ(randomVerse.name);
    setBgVerseJ(randomVerse.bgVerses);
    setBgResponsiveVersesJ(randomVerse.bgResponsiveVerses);
    setColorMainJ(randomVerse.colorMain);
    setVerseSoundJ(randomVerse.verseSound);
    setSoundIdJ(randomVerse.id);
    setNameVerseJLength(dataVerse);
  };

  // GET ALL THE VERSE K
  const getVerseK = () => {
    let dataVerse = dataVerses[10].verseK;
  
    let lastRandom = sessionStorage.getItem("verseLenK") ? sessionStorage.getItem("verseLenK") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenK", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenK", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterK(randomVerse.letter);
    setVerseK(randomVerse.verse);
    setNameVerseK(randomVerse.name);
    setBgVerseK(randomVerse.bgVerses);
    setBgResponsiveVersesK(randomVerse.bgResponsiveVerses);
    setColorMainK(randomVerse.colorMain);
    setVerseSoundK(randomVerse.verseSound);
    setSoundIdK(randomVerse.id);
    setNameVerseKLength(dataVerse);
  };

  // GET ALL THE VERSE L
  const getVerseL = () => {
    let dataVerse = dataVerses[11].verseL;

    let lastRandom = sessionStorage.getItem("verseLenL") ? sessionStorage.getItem("verseLenL") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenL", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenL", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterL(randomVerse.letter);
    setVerseL(randomVerse.verse);
    setNameVerseL(randomVerse.name);
    setBgVerseL(randomVerse.bgVerses);
    setBgResponsiveVersesL(randomVerse.bgResponsiveVerses);
    setColorMainL(randomVerse.colorMain);
    setVerseSoundL(randomVerse.verseSound);
    setSoundIdL(randomVerse.id);
    setNameVerseLLength(dataVerse);
  };

  // GET ALL THE VERSE M
  const getVerseM = () => {
    let dataVerse = dataVerses[12].verseM;
    
    let lastRandom = sessionStorage.getItem("verseLenM") ? sessionStorage.getItem("verseLenM") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenM", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenM", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterM(randomVerse.letter);
    setVerseM(randomVerse.verse);
    setNameVerseM(randomVerse.name);
    setBgVerseM(randomVerse.bgVerses);
    setBgResponsiveVersesM(randomVerse.bgResponsiveVerses);
    setColorMainM(randomVerse.colorMain);
    setVerseSoundM(randomVerse.verseSound);
    setSoundIdM(randomVerse.id);
    setNameVerseMLength(dataVerse);
  };

  // GET ALL THE VERSE N
  const getVerseN = () => {
    let dataVerse = dataVerses[13].verseN;

    let lastRandom = sessionStorage.getItem("verseLenN") ? sessionStorage.getItem("verseLenN") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenN", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenN", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterN(randomVerse.letter);
    setVerseN(randomVerse.verse);
    setNameVerseN(randomVerse.name);
    setBgVerseN(randomVerse.bgVerses);
    setBgResponsiveVersesN(randomVerse.bgResponsiveVerses);
    setColorMainN(randomVerse.colorMain);
    setVerseSoundN(randomVerse.verseSound);
    setSoundIdN(randomVerse.id);
    setNameVerseNLength(dataVerse);
  };

  // GET ALL THE VERSE O
  const getVerseO = () => {
    let dataVerse = dataVerses[14].verseO;
  
    let lastRandom = sessionStorage.getItem("verseLenO") ? sessionStorage.getItem("verseLenO") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenO", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenO", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterO(randomVerse.letter);
    setVerseO(randomVerse.verse);
    setNameVerseO(randomVerse.name);
    setBgVerseO(randomVerse.bgVerses);
    setBgResponsiveVersesO(randomVerse.bgResponsiveVerses);
    setColorMainO(randomVerse.colorMain);
    setVerseSoundO(randomVerse.verseSound);
    setSoundIdO(randomVerse.id);
    setNameVerseOLength(dataVerse);
  };

  // GET ALL THE VERSE P
  const getVerseP = () => {
    let dataVerse = dataVerses[15].verseP;
    
    let lastRandom = sessionStorage.getItem("verseLenP") ? sessionStorage.getItem("verseLenP") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenP", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenP", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterP(randomVerse.letter);
    setVerseP(randomVerse.verse);
    setNameVerseP(randomVerse.name);
    setBgVerseP(randomVerse.bgVerses);
    setBgResponsiveVersesP(randomVerse.bgResponsiveVerses);
    setColorMainP(randomVerse.colorMain);
    setVerseSoundP(randomVerse.verseSound);
    setSoundIdP(randomVerse.id);
    setNameVersePLength(dataVerse);
  };

  // GET ALL THE VERSE Q
  const getVerseQ = () => {
    let dataVerse = dataVerses[16].verseQ;
   
    let lastRandom = sessionStorage.getItem("verseLenQ") ? sessionStorage.getItem("verseLenQ") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenQ", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenQ", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterQ(randomVerse.letter);
    setVerseQ(randomVerse.verse);
    setNameVerseQ(randomVerse.name);
    setBgVerseQ(randomVerse.bgVerses);
    setBgResponsiveVersesQ(randomVerse.bgResponsiveVerses);
    setColorMainQ(randomVerse.colorMain);
    setVerseSoundQ(randomVerse.verseSound);
    setSoundIdQ(randomVerse.id);
    setNameVerseQLength(dataVerse);
  };

  // GET ALL THE VERSE R
  const getVerseR = () => {
    let dataVerse = dataVerses[17].verseR;
    
    let lastRandom = sessionStorage.getItem("verseLenR") ? sessionStorage.getItem("verseLenR") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenR", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenR", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterR(randomVerse.letter);
    setVerseR(randomVerse.verse);
    setNameVerseR(randomVerse.name);
    setBgVerseR(randomVerse.bgVerses);
    setBgResponsiveVersesR(randomVerse.bgResponsiveVerses);
    setColorMainR(randomVerse.colorMain);
    setVerseSoundR(randomVerse.verseSound);
    setSoundIdR(randomVerse.id);
    setNameVerseRLength(dataVerse);
  };

  // GET ALL THE VERSE S
  const getVerseS = () => {
    let dataVerse = dataVerses[18].verseS;
   
    let lastRandom = sessionStorage.getItem("verseLenS") ? sessionStorage.getItem("verseLenS") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenS", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenS", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterS(randomVerse.letter);
    setVerseS(randomVerse.verse);
    setNameVerseS(randomVerse.name);
    setBgVerseS(randomVerse.bgVerses);
    setBgResponsiveVersesS(randomVerse.bgResponsiveVerses);
    setColorMainS(randomVerse.colorMain);
    setVerseSoundS(randomVerse.verseSound);
    setSoundIdS(randomVerse.id);
    setNameVerseSLength(dataVerse);
  };

  // GET ALL THE VERSE T
  const getVerseT = () => {
    let dataVerse = dataVerses[19].verseT;
    
    let lastRandom = sessionStorage.getItem("verseLenT") ? sessionStorage.getItem("verseLenT") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenT", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenT", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterT(randomVerse.letter);
    setVerseT(randomVerse.verse);
    setNameVerseT(randomVerse.name);
    setBgVerseT(randomVerse.bgVerses);
    setBgResponsiveVersesT(randomVerse.bgResponsiveVerses);
    setColorMainT(randomVerse.colorMain);
    setVerseSoundT(randomVerse.verseSound);
    setSoundIdT(randomVerse.id);
    setNameVerseTLength(dataVerse);
  };

  // GET ALL THE VERSE U
  const getVerseU = () => {
    let dataVerse = dataVerses[20].verseU;
    
    let lastRandom = sessionStorage.getItem("verseLenU") ? sessionStorage.getItem("verseLenU") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenU", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenU", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterU(randomVerse.letter);
    setVerseU(randomVerse.verse);
    setNameVerseU(randomVerse.name);
    setBgVerseU(randomVerse.bgVerses);
    setBgResponsiveVersesU(randomVerse.bgResponsiveVerses);
    setColorMainU(randomVerse.colorMain);
    setVerseSoundU(randomVerse.verseSound);
    setSoundIdU(randomVerse.id);
    setNameVerseULength(dataVerse);
  };

  // GET ALL THE VERSE V
  const getVerseV = () => {
    let dataVerse = dataVerses[21].verseV;

    let lastRandom = sessionStorage.getItem("verseLenV") ? sessionStorage.getItem("verseLenV") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenV", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenV", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterV(randomVerse.letter);
    setVerseV(randomVerse.verse);
    setNameVerseV(randomVerse.name);
    setBgVerseV(randomVerse.bgVerses);
    setBgResponsiveVersesV(randomVerse.bgResponsiveVerses);
    setColorMainV(randomVerse.colorMain);
    setVerseSoundV(randomVerse.verseSound);
    setSoundIdV(randomVerse.id);
    setNameVerseVLength(dataVerse);
  };

  // GET ALL THE VERSE W
  const getVerseW = () => {
    let dataVerse = dataVerses[22].verseW;
    
    let lastRandom = sessionStorage.getItem("verseLenW") ? sessionStorage.getItem("verseLenW") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenW", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenW", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterW(randomVerse.letter);
    setVerseW(randomVerse.verse);
    setNameVerseW(randomVerse.name);
    setBgVerseW(randomVerse.bgVerses);
    setBgResponsiveVersesW(randomVerse.bgResponsiveVerses);
    setColorMainW(randomVerse.colorMain);
    setVerseSoundW(randomVerse.verseSound);
    setSoundIdW(randomVerse.id);
    setNameVerseWLength(dataVerse);
  };

  // GET ALL THE VERSE X
  const getVerseX = () => {
    let dataVerse = dataVerses[23].verseX;
   
    let lastRandom = sessionStorage.getItem("verseLenX") ? sessionStorage.getItem("verseLenX") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenX", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenX", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterX(randomVerse.letter);
    setVerseX(randomVerse.verse);
    setNameVerseX(randomVerse.name);
    setBgVerseX(randomVerse.bgVerses);
    setBgResponsiveVersesX(randomVerse.bgResponsiveVerses);
    setColorMainX(randomVerse.colorMain);
    setVerseSoundX(randomVerse.verseSound);
    setSoundIdX(randomVerse.id);
    setNameVerseXLength(dataVerse);
  };

  // GET ALL THE VERSE Y
  const getVerseY = () => {
    let dataVerse = dataVerses[24].verseY;

    let lastRandom = sessionStorage.getItem("verseLenY") ? sessionStorage.getItem("verseLenY") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenY", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenY", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterY(randomVerse.letter);
    setVerseY(randomVerse.verse);
    setNameVerseY(randomVerse.name);
    setBgVerseY(randomVerse.bgVerses);
    setBgResponsiveVersesY(randomVerse.bgResponsiveVerses);
    setColorMainY(randomVerse.colorMain);
    setVerseSoundY(randomVerse.verseSound);
    setSoundIdY(randomVerse.id);
    setNameVerseYLength(dataVerse);
  };

  // GET ALL THE VERSE Z
  const getVerseZ = () => {
    let dataVerse = dataVerses[25].verseZ;
  
    let lastRandom = sessionStorage.getItem("verseLenZ") ? sessionStorage.getItem("verseLenZ") : 0;
    let randomVerse = []
    let randNum = 0;
    if (parseInt(lastRandom) === dataVerse.length - 1) {
    
    randNum = 0
    sessionStorage.setItem("verseLenZ", randNum)
    // randNum=lastRandom
    } else {
    randNum = parseInt(lastRandom) + 1;
    sessionStorage.setItem("verseLenZ", randNum);
    }
    randomVerse = dataVerse[randNum];

    setLetterZ(randomVerse.letter);
    setVerseZ(randomVerse.verse);
    setNameVerseZ(randomVerse.name);
    setBgVerseZ(randomVerse.bgVerses);
    setBgResponsiveVersesZ(randomVerse.bgResponsiveVerses);
    setColorMainZ(randomVerse.colorMain);
    setVerseSoundZ(randomVerse.verseSound);
    setSoundIdZ(randomVerse.id);
    setNameVerseZLength(dataVerse);
  };

  // HANDLE CHANGE A
  const handleChangeVerseA = (e) => {
    getVerseA();
    let verseId = document.getElementById(`${soundIdA}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },500); 

      Howler.stop()

      types = e.type;
  };



  // HANDLE CHANGE B
  const handleChangeVerseB = () => {
    getVerseB();
    let verseId = document.getElementById(`${soundIdB}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000);
      Howler.stop(); 

  };

  // HANDLE CHANGE C
  const handleChangeVerseC = () => {
    getVerseC();
    let verseId = document.getElementById(`${soundIdC}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE D
  const handleChangeVerseD = () => {
    getVerseD();
    let verseId = document.getElementById(`${soundIdD}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
  };

  // HANDLE CHANGE E
  const handleChangeVerseE = () => {
    getVerseE();
    let verseId = document.getElementById(`${soundIdE}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
  };

  // HANDLE CHANGE F
  const handleChangeVerseF = () => {
    getVerseF();
    let verseId = document.getElementById(`${soundIdF}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE G
  const handleChangeVerseG = () => {
    getVerseG();
    let verseId = document.getElementById(`${soundIdG}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE H
  const handleChangeVerseH = () => {
    getVerseH();
    let verseId = document.getElementById(`${soundIdH}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE I
  const handleChangeVerseI = () => {
    getVerseI();
    let verseId = document.getElementById(`${soundIdI}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE J
  const handleChangeVerseJ = () => {
    getVerseJ();
    let verseId = document.getElementById(`${soundIdJ}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE K
  const handleChangeVerseK = () => {
    getVerseK();
    let verseId = document.getElementById(`${soundIdK}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE L
  const handleChangeVerseL = () => {
    getVerseL();
    let verseId = document.getElementById(`${soundIdL}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };
 

  // HANDLE CHANGE M
  const handleChangeVerseM = () => {
    getVerseM();
    let verseId = document.getElementById(`${soundIdM}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE N
  const handleChangeVerseN = () => {
    getVerseN();
    let verseId = document.getElementById(`${soundIdN}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000);
      Howler.stop(); 
  };

  // HANDLE CHANGE O
  const handleChangeVerseO = () => {
    getVerseO();
    let verseId = document.getElementById(`${soundIdO}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE P
  const handleChangeVerseP = () => {
    getVerseP();
    let verseId = document.getElementById(`${soundIdP}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE Q
  const handleChangeVerseQ = () => {
    getVerseQ();
    let verseId = document.getElementById(`${soundIdQ}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE R
  const handleChangeVerseR = () => {
    getVerseR();
    let verseId = document.getElementById(`${soundIdR}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE S
  const handleChangeVerseS = () => {
    getVerseS();
    let verseId = document.getElementById(`${soundIdS}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE T
  const handleChangeVerseT = () => {
    getVerseT();
    let verseId = document.getElementById(`${soundIdT}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000);
      Howler.stop(); 
  };

  // HANDLE CHANGE U
  const handleChangeVerseU = () => {
    getVerseU();
    let verseId = document.getElementById(`${soundIdU}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE V
  const handleChangeVerseV = () => {
    getVerseV();
    let verseId = document.getElementById(`${soundIdV}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE W
  const handleChangeVerseW = () => {
    getVerseW();
    let verseId = document.getElementById(`${soundIdW}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE X
  const handleChangeVerseX = () => {
    getVerseX();
    let verseId = document.getElementById(`${soundIdX}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  // HANDLE CHANGE Y
  const handleChangeVerseY = () => {
    getVerseY();
    let verseId = document.getElementById(`${soundIdY}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000);
      Howler.stop(); 
  };

  // HANDLE CHANGE Z
  const handleChangeVerseZ = () => {
    getVerseZ();
    let verseId = document.getElementById(`${soundIdZ}`);

    verseId.classList.add("change")

    setTimeout(() => {
        verseId.classList.remove("change")
      },1000); 
      Howler.stop();
  };

  const infosVerse = [
    {
      letter: letterA,
      name: nameVerseA,
      verse: verseA,
      bgVerses: bgVerseA,
      bgResponsiveVerses: bgResponsiveVersesA,
      func: handleChangeVerseA,
      colorMain: colorMainA,
      verseSound: verseSoundA,
      soundId: soundIdA,
      verseLen: nameVerseALength
    },
    {
      letter: letterB,
      name: nameVerseB,
      verse: verseB,
      bgVerses: bgVerseB,
      bgResponsiveVerses: bgResponsiveVersesB,
      func: handleChangeVerseB,
      colorMain: colorMainB,
      verseSound: verseSoundB,
      soundId: soundIdB,
      verseLen: nameVerseBLength
    },
    {
      letter: letterC,
      name: nameVerseC,
      verse: verseC,
      bgVerses: bgVerseC,
      bgResponsiveVerses: bgResponsiveVersesC,
      func: handleChangeVerseC,
      colorMain: colorMainC,
      verseSound: verseSoundC,
      soundId: soundIdC,
      verseLen: nameVerseCLength
    },
    {
      letter: letterD,
      name: nameVerseD,
      verse: verseD,
      bgVerses: bgVerseD,
      bgResponsiveVerses: bgResponsiveVersesD,
      func: handleChangeVerseD,
      colorMain: colorMainD,
      verseSound: verseSoundD,
      soundId: soundIdD,
      verseLen: nameVerseDLength
    },
    {
      letter: letterE,
      name: nameVerseE,
      verse: verseE,
      bgVerses: bgVerseE,
      bgResponsiveVerses: bgResponsiveVersesE,
      func: handleChangeVerseE,
      colorMain: colorMainE,
      verseSound: verseSoundE,
      soundId: soundIdE,
      verseLen: nameVerseELength
    },
    {
      letter: letterF,
      name: nameVerseF,
      verse: verseF,
      bgVerses: bgVerseF,
      bgResponsiveVerses: bgResponsiveVersesF,
      func: handleChangeVerseF,
      colorMain: colorMainF,
      verseSound: verseSoundF,
      soundId: soundIdF,
      verseLen: nameVerseFLength
    },
    {
      letter: letterG,
      name: nameVerseG,
      verse: verseG,
      bgVerses: bgVerseG,
      bgResponsiveVerses: bgResponsiveVersesG,
      func: handleChangeVerseG,
      colorMain: colorMainG,
      verseSound: verseSoundG,
      soundId: soundIdG,
      verseLen: nameVerseGLength
    },
    {
      letter: letterH,
      name: nameVerseH,
      verse: verseH,
      bgVerses: bgVerseH,
      bgResponsiveVerses: bgResponsiveVersesH,
      func: handleChangeVerseH,
      colorMain: colorMainH,
      verseSound: verseSoundH,
      soundId: soundIdH,
      verseLen: nameVerseHLength
    },
    {
      letter: letterI,
      name: nameVerseI,
      verse: verseI,
      bgVerses: bgVerseI,
      bgResponsiveVerses: bgResponsiveVersesI,
      func: handleChangeVerseI,
      colorMain: colorMainI,
      verseSound: verseSoundI,
      soundId: soundIdI,
      verseLen: nameVerseILength
    },
    {
      letter: letterJ,
      name: nameVerseJ,
      verse: verseJ,
      bgVerses: bgVerseJ,
      bgResponsiveVerses: bgResponsiveVersesJ,
      func: handleChangeVerseJ,
      colorMain: colorMainJ,
      verseSound: verseSoundJ,
      soundId: soundIdJ,
      verseLen: nameVerseJLength
    },
    {
      letter: letterK,
      name: nameVerseK,
      verse: verseK,
      bgVerses: bgVerseK,
      bgResponsiveVerses: bgResponsiveVersesK,
      func: handleChangeVerseK,
      colorMain: colorMainK,
      verseSound: verseSoundK,
      soundId: soundIdK,
      verseLen: nameVerseKLength
    },
    {
      letter: letterL,
      name: nameVerseL,
      verse: verseL,
      bgVerses: bgVerseL,
      bgResponsiveVerses: bgResponsiveVersesL,
      func: handleChangeVerseL,
      colorMain: colorMainL,
      verseSound: verseSoundL,
      soundId: soundIdL,
      verseLen: nameVerseLLength
    },
    {
      letter: letterM,
      name: nameVerseM,
      verse: verseM,
      bgVerses: bgVerseM,
      bgResponsiveVerses: bgResponsiveVersesM,
      func: handleChangeVerseM,
      colorMain: colorMainM,
      verseSound: verseSoundM,
      soundId: soundIdM,
      verseLen: nameVerseMLength
    },
    {
      letter: letterN,
      name: nameVerseN,
      verse: verseN,
      bgVerses: bgVerseN,
      bgResponsiveVerses: bgResponsiveVersesN,
      func: handleChangeVerseN,
      colorMain: colorMainN,
      verseSound: verseSoundN,
      soundId: soundIdN,
      verseLen: nameVerseNLength
    },
    {
      letter: letterO,
      name: nameVerseO,
      verse: verseO,
      bgVerses: bgVerseO,
      bgResponsiveVerses: bgResponsiveVersesO,
      func: handleChangeVerseO,
      colorMain: colorMainO,
      verseSound: verseSoundO,
      soundId: soundIdO,
      verseLen: nameVerseOLength
    },
    {
      letter: letterP,
      name: nameVerseP,
      verse: verseP,
      bgVerses: bgVerseP,
      bgResponsiveVerses: bgResponsiveVersesP,
      func: handleChangeVerseP,
      colorMain: colorMainP,
      verseSound: verseSoundP,
      soundId: soundIdP,
      verseLen: nameVersePLength
    },
    {
      letter: letterQ,
      name: nameVerseQ,
      verse: verseQ,
      bgVerses: bgVerseQ,
      bgResponsiveVerses: bgResponsiveVersesQ,
      func: handleChangeVerseQ,
      colorMain: colorMainQ,
      verseSound: verseSoundQ,
      soundId: soundIdQ,
      verseLen: nameVerseQLength
    },
    {
      letter: letterR,
      name: nameVerseR,
      verse: verseR,
      bgVerses: bgVerseR,
      bgResponsiveVerses: bgResponsiveVersesR,
      func: handleChangeVerseR,
      colorMain: colorMainR,
      verseSound: verseSoundR,
      soundId: soundIdR,
      verseLen: nameVerseRLength
    },
    {
      letter: letterS,
      name: nameVerseS,
      verse: verseS,
      bgVerses: bgVerseS,
      bgResponsiveVerses: bgResponsiveVersesS,
      func: handleChangeVerseS,
      colorMain: colorMainS,
      verseSound: verseSoundS,
      soundId: soundIdS,
      verseLen: nameVerseSLength
    },
    {
      letter: letterT,
      name: nameVerseT,
      verse: verseT,
      bgVerses: bgVerseT,
      bgResponsiveVerses: bgResponsiveVersesT,
      func: handleChangeVerseT,
      colorMain: colorMainT,
      verseSound: verseSoundT,
      soundId: soundIdT,
      verseLen: nameVerseTLength
    },
    {
      letter: letterU,
      name: nameVerseU,
      verse: verseU,
      bgVerses: bgVerseU,
      bgResponsiveVerses: bgResponsiveVersesU,
      func: handleChangeVerseU,
      colorMain: colorMainU,
      verseSound: verseSoundU,
      soundId: soundIdU,
      verseLen: nameVerseILength
    },

    {
      letter: letterV,
      name: nameVerseV,
      verse: verseV,
      bgVerses: bgVerseV,
      bgResponsiveVerses: bgResponsiveVersesV,
      func: handleChangeVerseV,
      colorMain: colorMainV,
      verseSound: verseSoundV,
      soundId: soundIdV,
      verseLen: nameVerseVLength
    },
    {
      letter: letterW,
      name: nameVerseW,
      verse: verseW,
      bgVerses: bgVerseW,
      bgResponsiveVerses: bgResponsiveVersesW,
      func: handleChangeVerseW,
      colorMain: colorMainW,
      verseSound: verseSoundW,
      soundId: soundIdW,
      verseLen: nameVerseWLength
    },
    {
      letter: letterX,
      name: nameVerseX,
      verse: verseX,
      bgVerses: bgVerseX,
      bgResponsiveVerses: bgResponsiveVersesX,
      func: handleChangeVerseX,
      colorMain: colorMainX,
      verseSound: verseSoundX,
      soundId: soundIdX,
      verseLen: nameVerseXLength
    },
    {
      letter: letterY,
      name: nameVerseY,
      verse: verseY,
      bgVerses: bgVerseY,
      bgResponsiveVerses: bgResponsiveVersesY,
      func: handleChangeVerseY,
      colorMain: colorMainY,
      verseSound: verseSoundY,
      soundId: soundIdY,
      verseLen: nameVerseYLength
    },
    {
      letter: letterZ,
      name: nameVerseZ,
      verse: verseZ,
      bgVerses: bgVerseZ,
      bgResponsiveVerses: bgResponsiveVersesZ,
      func: handleChangeVerseZ,
      colorMain: colorMainZ,
      verseSound: verseSoundZ,
      soundId: soundIdZ,
      verseLen: nameVerseZLength
    }
  ];

  const outputVerse = infosVerse.map((vals, index) => {
    return (
      <BoxVerse
        key={index}
        id={vals.soundId}
        letter={vals.letter}
        chosenVerse={vals.name}
        verseLength={vals.verseLen}
        verse={vals.verse}
        blockLetterBgColor={vals.colorMain}
        blockLetterTextColor={vals.colorMain}
        backgroundVerses={vals.bgVerses}
        backgroundgResponsiveVerses={vals.bgResponsiveVerses}
        onClickRandomVerses={vals.func}
        onClickSoundVerse={() =>
          soundPlay(process.env.PUBLIC_URL + vals.verseSound, vals.soundId)
        }
        alphaClick={alpha}
      ></BoxVerse>
    );
  });

  return <div>{outputVerse[index]}</div>;
}

export default class AlphaVerses extends Component {

  state = {
    index: 0,
    lists: dataVerses,
  };
  
  componentDidUpdate() {
    setTimeout(() => {
      document.querySelector("div").classList.remove("change");
    },3000)
  }

  changeAlphaVerse = e => {
    let alphaId = parseInt(e.target.id);
    this.setState({
      index: alphaId
    });
  };

  prev = () => {
    const { lists } = this.state;

    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  next = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };
  render() {
    const { index, lists} = this.state;
    Howler.volume(1.0);
    Howler.unload();

    return (
      <div>
        {/* <div className="btns-verses">
          <button className=" verses left-verses"> <i className="fas fa-angle-left"></i></button>
          <button className=" verses right-verses"> <i className="fas fa-angle-right"></i></button>
        </div> */}
        <div className="btns">
          <button onClick={this.prev} className="btn-arrow left-arrow-alpha">
            <i className="fas fa-angle-left"></i>
          </button>
          <button onClick={this.next} className="btn-arrow right-arrow-alpha">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <AlphaVerse index={index} alpha={this.changeAlphaVerse} />
      </div>
    );
  }
}
