import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <div className="proxy-anchor" id="p1"></div>
        <div className="proxy-anchor" id="p2"></div>
        <div className="proxy-anchor" id="p3"></div>
        <div className="proxy-anchor" id="p4"></div>
        <div className="proxy-anchor" id="p5"></div>
        <div className="proxy-anchor" id="p6"></div>
        <div className="proxy-anchor" id="p7"></div>
        <div className="proxy-anchor" id="p8"></div>
        <div className="proxy-anchor" id="p9"></div>
        <div>
          <Grid />
        </div>
          <div className="navbar">
            <label htmlFor="menuChk" className="menuBtn">&#9776;</label>
          </div>
      </div>
    </main>
  );
}
