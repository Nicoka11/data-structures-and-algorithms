import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { SinglyLinkedList } from "./singly-linked-list/singly-linked-list";

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

const list = new SinglyLinkedList();

list.push(42);
list.push("Forty Two");
list.push("Quarante Deux");

console.log(list);
