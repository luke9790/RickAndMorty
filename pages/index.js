import { Inter } from "next/font/google";
import Banner from "./components/Banner/Banner";
import CharacterList from "./components/CharacterList/CharacterList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="mt-8 w-full">
        <CharacterList />
      </div>
    </div>
  );
}
