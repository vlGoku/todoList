import Controller from "./modules/Controller.js";
import View from "./modules/View.js";
import Model from "./modules/Model.js";

const app = Controller(Model(), View());
