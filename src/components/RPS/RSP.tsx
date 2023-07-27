import React from "react";
import { useState, useRef, useEffect } from "react";

const RSP = () => {
  const interval = useRef<number>();
  const nk = useRef<HTMLDivElement>();

  useEffect(() => {
    interval.current = setInterval(() => {});

    return () => {
      console.log("종류");
      clearInterval(interval.current);
    };
  }, [imgCoord]);
  return <div ref={nk}></div>;
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
} as const;

type ImgCoords = (typeof rspCoords)[keyof typeof rspCoords];
type c = keyof typeof rspCoords;

const computerChoice2 = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as Array<keyof typeof rspCoords>).find(
    (key) => {
      return rspCoords[key] === imgCoords;
    }
  )!;
};

type avb = keyof typeof rspCoords;

const computerChoice = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as avb[]).find((key) => {
    return rspCoords[key] === imgCoords;
  })!;
};

type aa = Array<keyof typeof rspCoords>;

type aaa = ["가위" | "바위" | "보"];

type vv = ("가위" | "바위" | "보")[];
