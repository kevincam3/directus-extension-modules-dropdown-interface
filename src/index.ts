import { defineInterface } from "@directus/extensions-sdk";
import ModulesDropdownComponent from "./interface.vue";

export default defineInterface({
  id: "directus-extension-modules-dropdown-interface",
  name: "Dropdown (Modules)",
  icon: "arrow_right_alt",
  description: "Dropdown list of all the modules available in the project",
  component: ModulesDropdownComponent,
  types: ["json"],
  hideLabel: false,
  hideLoader: false,
  autoKey: false,
  options: [],
  group: "selection",
  preview:
    '<svg width="156" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '\t<rect x="18" y="17.037" width="120" height="62" rx="6" fill="var(--background-page)" />\n' +
    '\t<rect x="19" y="18.037" width="118" height="60" rx="5" stroke="var(--primary)" stroke-opacity=".25"\n' +
    '\t\tstroke-width="2" />\n' +
    '\t<rect x="28" y="51" width="40" height="6" rx="2" fill="var(--primary)" fill-opacity=".25" />\n' +
    '\t<rect x="28" y="63" width="60" height="6" rx="2" fill="var(--primary)" fill-opacity=".25" />\n' +
    '\t<rect x="18" y="17" width="120" height="26" rx="6" fill="var(--background-page)" class="glow" />\n' +
    '\t<rect x="19" y="18" width="118" height="24" rx="5" stroke="var(--primary)" stroke-width="2" />\n' +
    '\t<rect x="28" y="27" width="70" height="6" rx="2" fill="var(--primary)" fill-opacity=".25" />\n' +
    '\t<path d="M120.966 28a.4.4 0 00-.283.683l3.034 3.034a.4.4 0 00.566 0l3.034-3.034a.4.4 0 00-.283-.683h-6.068z"\n' +
    '\t\tfill="var(--primary)" />\n' +
    "</svg>",
});
