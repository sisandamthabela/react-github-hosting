import "./styles.css";

import Header from "./Header";

import Current from "./Current";

import Description from "./Description";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div>
          <Current />
          <Description />
          <Footer />
        </div>
      </div>
    </div>
  );
}
