import Circle from "../Svgs/Circle";
import Star from "../Svgs/Star";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Main() {
  return (
    <main>
      <Star className="star-01" />
      <Star className="star-02" />
      <Star className="star-03" width="25px" />
      <Star className="star-04" width="30px" />
      <Star className="star-05" />
      <Star className="star-06" width="30px" />
      <Star className="star-07" width="30px" />

      <Circle className="circle-01" />
      <Circle className="circle-02" />
      <Circle className="circle-03" />
      <Circle className="circle-04" />

      <Section1 />
      <Section2 />
    </main>
  );
}

export default Main;
