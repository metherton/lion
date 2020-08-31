import { Constructor } from '@open-wc/dedupe-mixin';
import { CSSResult, LitElement, TemplateResult } from '@lion/core';
import { FormatHost } from '../FormatMixinTypes';

export interface ChoiceInputModelValue {
  checked: boolean;
  value: any;
}

export declare class ChoiceInputHost {
  modelValue: ChoiceInputModelValue;

  get choiceValue(): any;

  set choiceValue(value: any);

  protected _requestUpdate(name: string, oldValue: any): void;

  firstUpdated(changedProperties: Map<string, any>): void;

  updated(changedProperties: Map<string, any>): void;

  static get styles(): CSSResult | CSSResult[];

  render(): TemplateResult;

  _choiceGraphicTemplate(): TemplateResult;

  connectedCallback(): void;
  disconnectedCallback(): void;

  __toggleChecked(): void;

  __syncModelCheckedToChecked(checked: boolean): void;

  __syncCheckedToModel(checked: boolean): void;

  __syncCheckedToInputElement(): void;

  _proxyInputEvent(): void;

  _onModelValueChanged(
    newV: { modelValue: ChoiceInputModelValue },
    oldV: { modelValue: ChoiceInputModelValue },
  ): void;

  parser(): any;

  formatter(modelValue: ChoiceInputModelValue): string;

  _isEmpty(): void;

  _syncValueUpwards(): void;

  type: string;
}

export declare function ChoiceInputImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T &
  Constructor<ChoiceInputHost> &
  ChoiceInputHost &
  Constructor<FormatHost> &
  FormatHost &
  HTMLElement;

export type ChoiceInputMixin = typeof ChoiceInputImplementation;
