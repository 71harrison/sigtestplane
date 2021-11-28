import "./styles.css";
import { sqrt } from "mathjs";

const confidenceInterval = () => {
  const favGroupA = document.getElementById("favPopA").value;
  const favGroupB = document.getElementById("favPopB").value;
  const sizeGroupA = document.getElementById("sizePopB").value;
  const sizeGroupB = document.getElementById("sizePopB").value;
  const zScore = 1.96;

  const favChange = favGroupB - favGroupA;
  const confidenceCalcA = (favGroupA * (1 - favGroupA)) / sizeGroupA;
  const confidenceCalcB = (favGroupB * (1 - favGroupB)) / sizeGroupB;

  const confidenceIntX =
    (favChange - zScore) * sqrt(confidenceCalcA + confidenceCalcB);
  const confidenceIntY =
    (favChange + zScore) * sqrt(confidenceCalcA + confidenceCalcB);

  document.getElementById(
    "displayInt"
  ).innerHTML = `Confidence Interval is... [${confidenceIntX.toPrecision(
    2
  )};${confidenceIntY.toPrecision(2)}]`;

  if (favChange < confidenceIntX) {
    let isNotSig = document.createElement("p");
    isNotSig.innerHTML = "Your result in Not Sigificant";
    document.getElementById("displayInt").appendChild(isNotSig);
  } else {
    let isSig = document.createElement("p");
    isSig.innerHTML = "Your result is Sigificant";
    document.getElementById("displayInt").appendChild(isSig);
  }
};

document.getElementById("runIt").addEventListener("click", confidenceInterval);
