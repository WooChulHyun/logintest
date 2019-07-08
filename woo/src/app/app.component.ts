import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="formClass">
      <form [formGroup]="singUp">
        <div
          class="inputDiv"
          (click)="inputDivClicked(inputDivEmail)"
          (focusout)="inputDivUnclicked(inputDivEmail)"
          #inputDivEmail
        >
          <input
            class="input"
            type="text"
            placeholder="이메일 주소"
            formControlName="userEmail"
          />
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
        <p
          *ngIf="userEmail.errors?.required && userEmail.touched"
          class="warningMessage"
        >
          이메일을 입력해 주세요
        </p>
        <p
          *ngIf="userEmail.errors?.pattern && userEmail.touched"
          class="warningMessage"
        >
          이메일 형식이 올바르지 않습니다.
        </p>
        <div
          class="inputDiv"
          (click)="inputDivClicked(inputDivFistName)"
          (focusout)="inputDivUnclicked(inputDivFistName)"
          #inputDivFistName
        >
          <input
            class="input"
            type="text"
            placeholder="이름(예: 길동)"
            formControlName="userFirstName"
          />
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
        <p
          *ngIf="userFirstName.errors?.required && userFirstName.touched"
          class="warningMessage"
        >
          이름을 입력해 주세요
        </p>
        <p
          *ngIf="userFirstName.errors?.pattern && userFirstName.touched"
          class="warningMessage"
        >
          이름 형식이 올바르지 않습니다.
        </p>
        <div
          class="inputDiv"
          (click)="inputDivClicked(inputDivLastName)"
          (focusout)="inputDivUnclicked(inputDivLastName)"
          #inputDivLastName
        >
          <input
            class="input"
            type="text"
            placeholder="성(예: 홍)"
            formControlName="userLastName"
          />
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </div>
        <p
          *ngIf="userLastName.errors?.required && userLastName.touched"
          class="warningMessage"
        >
          성을 입력해 주세요
        </p>
        <p
          *ngIf="userLastName.errors?.pattern && userLastName.touched"
          class="warningMessage"
        >
          이름 형식이 올바르지 않습니다.
        </p>
        <div
          class="inputDiv"
          (click)="inputDivClicked(inputDivPassword)"
          (focusout)="inputDivUnclicked(inputDivPassword)"
          #inputDivPassword
        >
          <input
            class="input"
            type="password"
            placeholder="비밀번호 설정"
            formControlName="userPassword"
            (click)="passwordClicked()"
          />
          <i class="fa fa-eye-slash" aria-hidden="true"></i>
        </div>
        <div [class.passwordHide]="passwordDisplay">
          <span
            *ngIf="
              userPassword.errors?.required || userPassword.value.length < 8;
              else passwordLengthElse
            "
            ><i class="fa fa-times" aria-hidden="true"></i
          ></span>
          <ng-template #passwordLengthElse
            ><i class="fa fa-check" aria-hidden="true"></i
          ></ng-template>
          <span
            class="warningPassword"
            [style.color]="
              userPassword.errors?.required || userPassword.value.length < 8
                ? '#fc642d'
                : '#00a699'
            "
          >
            8자리 이상 입력해 주세요
          </span>
          <br />
          <span
            *ngIf="
              userPassword.errors?.pattern || userPassword.invalid;
              else passwordLengthElse
            "
            ><i class="fa fa-times" aria-hidden="true"></i
          ></span>
          <ng-template #passwordLengthElse
            ><i class="fa fa-check" aria-hidden="true"></i
          ></ng-template>
          <span
            class="warningPassword"
            [style.color]="
              userPassword.errors?.pattern || userPassword.invalid
                ? '#fc642d'
                : '#00a699'
            "
          >
            숫자, 문자, 특수문자의 조합으로 만들어 주세요
          </span>
        </div>
        <div class="textBold">생일</div>
        <div class="textColor484848">
          회원 가입을 하시려면 만 18세 이상이어야 합니다. 생일은 다른 회원에게는
          공개되지 않습니다
        </div>
        <div class="selectBoxes">
          <select formControlName="monthSelector" class="monthSelector">
            <option [ngValue]="null" disabled value selected>월</option>
            <option *ngFor="let month of months" [ngValue]="month">{{
              month
            }}</option>
          </select>
          <select formControlName="daySelector" class="daySelector">
            <option [ngValue]="null" disabled value selected>일</option>
            <option *ngFor="let day of days" [ngValue]="day">{{ day }}</option>
          </select>
          <select formControlName="yearSelector" class="yearSelector">
            <option [ngValue]="null" disabled value selected>년</option>
            <option *ngFor="let year of years" [ngValue]="year">{{
              year
            }}</option>
          </select>
        </div>
        <div class="textColor484848">
          에어비앤비의 마케팅 프로모션, 특별 할인 및 추천 여행 정보, 정책
          변경사항을 이메일로 보내드립니다.
        </div>
        <button
          type="submit"
          class="signUpBtn"
          [disabled]="singUp.invalid"
          [class.disable]="singUp.invalid"
        >
          가입하기
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
      }

      input:focus {
        outline: none;
      }

      .formClass {
        width: 600px;
        border: 1px solid #000;
        margin: 0 auto;
        padding: 10px 20px;
      }

      .fa {
        font-size: 16px;
      }

      .fa-times {
        color: #fc642d;
      }

      .fa-check {
        color: #00a699;
      }

      .warningMessage {
        color: #fc642d;
        font-size: 13px;
        font-style: italic;
      }

      .inputDiv {
        border: 1px solid #bbb;
        border-radius: 5px;
        margin: 15px auto;
      }

      .input {
        display: inline-block;
        width: 95%;
        height: 40px;
        padding: 7px;
        font-size: 16px;
        border: 0;
      }

      .passwordHide {
        display: none;
      }

      .warningPassword {
        font-size: 13px;
      }

      .monthSelector,
      .daySelector,
      .yearSelector {
        margin-top: 15px;
        margin-bottom: 15px;
        height: 40px;
        padding: 7px;
        font-size: 16px;
        border: 1px solid #bbb;
        border-radius: 5px;
      }

      .monthSelector {
        width: 220px;
        margin-right: 15px;
      }

      .daySelector {
        width: 133px;
        margin-right: 15px;
      }

      .yearSelector {
        width: 173px;
      }

      .textBold {
        margin-top: 15px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .textColor484848 {
        color: #484848;
        font-size: 13px;
      }

      .signUpBtn {
        margin-top: 15px;
        width: 100%;
        height: 50px;
        font-size: 17px;
        font-weight: bold;
        background: #ff5a5f;
        color: #fff;
        border: 0;
        border-radius: 5px;
        text-aline: center;
      }

      .disable {
        background: #ccc;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  singUp: FormGroup;
  passwordDisplay = true;
  months: number[];
  days: number[];
  years: number[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.months = [];
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }

    this.days = [];
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    this.years = [];
    for (let i = 2019; i >= 1900; i--) {
      this.years.push(i);
    }

    this.singUp = this.fb.group({
      userEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
          )
        ]
      ],
      userFirstName: [
        '',
        [
          Validators.required,
          Validators.pattern('[가-힣]{1,4}|[a-zA-Z. ]*[a-zA-Z]{1,60}$')
        ]
      ],
      userLastName: [
        '',
        [
          Validators.required,
          Validators.pattern('[가-힣]{1,4}|[a-zA-Z. ]*[a-zA-Z]{1,60}$')
        ]
      ],
      userPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z0-9d$@$!%*?&].{8,}'
          )
        ]
      ],
      monthSelector: ['', [Validators.required]],
      daySelector: ['', [Validators.required]],
      yearSelector: ['', [Validators.required]]
    });
  }

  inputDivClicked(inputDiv: HTMLDivElement) {
    inputDiv.style.border = '1px solid #87CEFA';
  }

  inputDivUnclicked(inputDiv: HTMLDivElement) {
    inputDiv.style.border = '1px solid #bbb';
  }

  passwordClicked() {
    this.passwordDisplay = false;
  }

  get userEmail() {
    return this.singUp.get('userEmail');
  }

  get userFirstName() {
    return this.singUp.get('userFirstName');
  }

  get userLastName() {
    return this.singUp.get('userLastName');
  }

  get userPassword() {
    return this.singUp.get('userPassword');
  }
}
