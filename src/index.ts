import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";

const model = {
  isMirror: false,
  isRunning: false,
  posX: "80%",
  posY: "20%",
  delay: "0s",
  scale: 1,
  rotation: "360deg",
  obj1CSS: "",
  obj2CSS: "",
  toggle: () => {
    if (model.isRunning) model.isRunning = false;
    else model.isRunning = true;
  },
};
const globalCSSvars = `--delay: \${delay};--posX: \${posX};--posY: \${posY}; --scale: \${scale}; --rotation: \${rotation}`;

const template = `
    <div class="arena" style="${globalCSSvars}"">       
        <div class="obj1 \${obj1CSS}"></div>
        <div class="obj2 \${obj2CSS}"></div>
        <button \${click@=>toggle}>Start/Stop</button>
    </div>
    `;

UI.create(document.body, template, model);
UI.initialize(100 / 6);

setInterval(() => {
  if (model.isRunning) {
    if (model.isMirror) {
      model.isMirror = false;
      model.posX = "225%";
      model.posY = "95%";
      model.scale = 1.4;
      model.obj1CSS = `attackAnimation`;
      model.obj2CSS = ``;
    } else {
      model.isMirror = true;
      model.posX = "-210%";
      model.posY = "-50%";
      model.scale = 1.8;
      model.obj2CSS = `attackAnimation`;
      model.obj1CSS = ``;
    }
  }
}, 5000);
