import { FASTElement } from "@microsoft/fast-element";
import { ObservableProxy } from "../utils";
import { EffectRegistery, Effects } from "../models/effects";

export interface IWebComponent< Data = any , States extends Record< string , any > = Record< string , any >> extends Partial<FASTElement>{

  states?:Record<string , any>;
  effects?:EffectRegistery;

  bindEffect:( effect_name :string , callback: () => void, dependencies: any[])=> void;
  bindState:< Value = never >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void];
  bindConsumable:< Value >(key: string, value: Value) => void;

}