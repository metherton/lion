import { Constructor } from '@open-wc/dedupe-mixin';
import { CSSResult, LitElement, nothing, TemplateResult } from '@lion/core';
import { FormControlHost } from '../FormControlMixinTypes';
import { FormRegistrarHost } from '../registration/FormRegistrarMixinTypes';
import { FormRegisteringHost } from '../registration/FormRegisteringMixinTypes';
import { InteractionStateHost } from '../InteractionStateMixinTypes';

export interface ChoiceInputModelValue {
  checked: boolean;
  value: any;
}

export declare class ChoiceInputHost {
  modelValue: ChoiceInputModelValue;

  get choiceValue(): any;

  set choiceValue(value: any);

  _requestUpdate(name: string, oldValue: any): void;

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
}

export declare function ChoiceInputImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T & Constructor<ChoiceInputHost> & ChoiceInputHost;

export type ChoiceInputMixin = typeof ChoiceInputImplementation;
