import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DiceImg from "@/images/icon-dice.svg";
import DividerDesktop from "@/images/pattern-divider-desktop.svg";
import DividerMobile from "@/images/pattern-divider-mobile.svg";

const RandomCard = () => {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState(0);
  const breakpoint = 650;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }    

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  const getAdvice = async () => {
    let resp = await fetch("https://api.adviceslip.com/advice");
    let data = await resp.json();
    setAdvice(data.slip.advice);
    setNumber(data.slip.id);
  };

  useEffect(() => {
    const fetchAdvice = async () => {
      await getAdvice();
    };
    fetchAdvice();
  }, []);

  return (
    <Card className="w-87.5 sm:w-135 m-auto bg-(--Blue-900) text-center overflow-visible">
      <CardHeader>
        <CardTitle className="text-(--Green-300) text-xs tracking-widest uppercase">Advice #{number}</CardTitle>
      </CardHeader>
      <CardContent className="text-(--Blue-200) text-[28px] font-semibold min-h-18 p-8">
        "{advice}"
      </CardContent>
      {
        <img
          src={isMobile ? DividerMobile : DividerDesktop}
          className="w-4/5 mx-auto"
          alt=""
        />
      }
      <CardFooter className="relative h-10">
        <CardAction className="w-full">
          <Button className="bg-(--Green-300) w-16 sm:w-12 h-16 sm:h-12 absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rounded-full flex items-center justify-center hover:shadow-[0_0_20px_#52ffa8]" onClick={getAdvice}>
            <span className="sr-only">Generate Advice</span>
            <img src={DiceImg} width={isMobile ? 28 : 18} />
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export function App() {
  return (
    <>
      <RandomCard />
    </>
  );
}

export default App;
export { RandomCard };
