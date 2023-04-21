import {
  getCounterTemplate,
  regiterCounterListeners,
  updateCounter,
} from "./components/counterApp";

function main() {
  const app$ = document.querySelector("#app");
  app$.innerHTML = getCounterTemplate();

  regiterCounterListeners();
}

main();

window.reset = function () {
  const res = window.confirm("Reset counter?");
  console.log("resultat", res);

  if (res === true) {
    updateCounter(0);
  }
};
