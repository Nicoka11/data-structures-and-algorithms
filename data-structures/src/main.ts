import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { Queue } from "./queue";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Data Structures</h1>
  </div>
`;

const list = new Queue<number | string>();

list.enQueue(42);
list.enQueue("Forty Two");
list.enQueue("Quarante Deux");
console.log(list);

console.log(list.deQueue());
console.log(list.deQueue());
console.log(list.deQueue());
console.log(list.deQueue());

list.enQueue("Quarante Douze");

console.log(list.deQueue());
console.log(list.deQueue());
