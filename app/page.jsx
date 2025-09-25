"use client";
import { AllSet } from "@/_components/AllSet";
import { ContinueButton } from "@/_components/ContinueButton";
import { StepOne } from "@/_components/StepOne";
import { StepThree } from "@/_components/StepThree";
import { StepTwo } from "@/_components/StepTwo";
import { TextField } from "@/_components/TextField";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentPage = [StepOne, StepTwo, StepThree, AllSet][currentIndex];
  useEffect(() => {
    setCurrentIndex(Number(localStorage.getItem("currentIndex")) - 1);
  }, []);
  return (
    <CurrentPage
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    ></CurrentPage>
  );
}
