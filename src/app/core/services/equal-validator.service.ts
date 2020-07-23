import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EqualValidatorService {

  constructor() { }
  private static isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
  }
  private static isEmptyObject(obj) {
    if (typeof obj === 'object' && typeof obj.length !== 'number') {
      return Object.keys(obj).length === 0;
    }
    return null;
  }
 
  /**
   * 等于指定controller的值
   * @param targetName 目标的formControlName
   * @returns {(ctrl: FormControl) => {equalTo: {valid: boolean}}}
   */
  static equalTo(targetName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const target = control.root.get(targetName);
      if (target === null) {
        return null;
      }
      if (this.isEmptyInputValue(control.value)) {
        return null;
      }
      return target.value === control.value ? null : {'equal': { valid: false }};
    };
  }
 
  /**
   * 反向输入监听指定controller是否与当前值相等
   * @param targetName
   */
  static equalFor(targetName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const target = control.root.get(targetName);
      if (target === null) {
        return null;
      }
      if (this.isEmptyInputValue(control.value)) {
        return null;
      }
      if (target.value === control.value) {
        const errors = target.errors;
        delete errors['equal'];
 
        if (this.isEmptyObject(errors)) {
          target.setErrors(null);
        } else {
          target.setErrors(errors);
        }
        return null;
      }
      target.setErrors({ 'equal': { valid: false } });
    };
  }

}
