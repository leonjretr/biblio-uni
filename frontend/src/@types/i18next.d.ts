import { defaultNS, fallbackNS } from "../utils/i18n";
import resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    fallbackNS: typeof fallbackNS;
    resources: typeof resources;
  }
}
