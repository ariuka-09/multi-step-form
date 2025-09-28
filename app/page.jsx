"use client";
import { AllSet } from "@/_components/AllSet";
import { StepOne } from "@/_components/StepOne";
import { StepThree } from "@/_components/StepThree";
import { StepTwo } from "@/_components/StepTwo";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentPage = [StepOne, StepTwo, StepThree, AllSet][currentIndex];
  useEffect(() => {
    if (localStorage.getItem("currentIndex"))
      setCurrentIndex(Number(localStorage.getItem("currentIndex")) - 1);
  }, []);
  // console.log(CurrentPage);
  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }} // start state
          animate={{ opacity: 1, x: 0 }} // end state
          exit={{ opacity: 0, x: -100 }} // when leaving
          transition={{ duration: 0.4 }}
          className="absolute w-full"
        >
          <CurrentPage
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          ></CurrentPage>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
