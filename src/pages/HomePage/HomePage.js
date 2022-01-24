import { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Models from "../../components/Models/Models";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function HomePage() {
  const [count, setCount] = useState(1);

  const goLeft = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(3);
    }
  };
  const goRight = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div>
      <div className="App">
        <div className="arrows">
          <ArrowBackRoundedIcon
            onClick={goLeft}
            fontSize="large"
            color="action"
          />
        </div>
        <Models count={count} />
        <div className="arrows">
          <ArrowForwardRoundedIcon
            onClick={goRight}
            fontSize="large"
            color="action"
          />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default HomePage;
