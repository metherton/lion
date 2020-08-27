import { Constructor } from '@open-wc/dedupe-mixin';
import { LitElement } from '@lion/core';
import { FormControlHost } from '../FormControlMixinTypes';
import { FormRegistrarHost } from '../registration/FormRegistrarMixinTypes';
import { FormRegisteringHost } from '../registration/FormRegisteringMixinTypes';
import { InteractionStateHost } from '../InteractionStateMixinTypes';

export declare class ChoiceGroupHost {
  // static get properties(): {
  //   multipleChoice: {
  //     type: BooleanConstructor;
  //     attribute: string;
  //   };
  // };
  multipleChoice: boolean;

  connectedCallback(): void;
  disconnectedCallback(): void;

  get modelValue(): any;

  set modelValue(value: any);

  get serializedValue(): string;

  set serializedValue(value: string);

  get formattedValue(): string;

  set formattedValue(value: string);

  connectedCallback(): void;

  disconnectedCallback(): void;

  addFormElement(child: FormControlHost, indexToInsertAt: number): void;

  _triggerInitialModelValueChangedEvent(): void;

  _getFromAllFormElements(property: string, filterCondition: Function): void;

  _throwWhenInvalidChildModelValue(child: FormControlHost): void;

  _isEmpty(): void;

  _checkSingleChoiceElements(ev: Event): void;

  _getCheckedElements(): void;

  _setCheckedElements(value: any, check: boolean): void;

  __setChoiceGroupTouched(): void;

  __delegateNameAttribute(child: FormControlHost): void;

  _onBeforeRepropagateChildrenValues(ev: Event): void;
}

export declare function ChoiceGroupImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T & Constructor<ChoiceGroupHost> & ChoiceGroupHost;

export type ChoiceGroupMixin = typeof ChoiceGroupImplementation;
