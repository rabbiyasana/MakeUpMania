import ButtonAppBar from "../../componenets/navigation/navBar";
import NavBar, { Appbar } from "../../componenets/navigation/navBar";
import { Slider } from "../../componenets/slider/slider";
export function Home() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <NavBar />
      <Appbar />

      <Slider />
    </>
  );
}
