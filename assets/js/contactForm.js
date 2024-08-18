document.addEventListener('DOMContentLoaded', () => {
  const contactForm = new ContactForm();
});

class ContactForm {
  FormInputTextFieldList
  FormTextareaFieldList
  FormSubmitBtn

  constructor() {
    this.FormInputTextFieldList = document.querySelectorAll('.form-input-text-field');
    this.FormTextareaFieldList = document.querySelectorAll('.form-textarea-field');
    this.FormSubmitBtn = document.querySelector('.form-submit-btn');
    this.addEventFormInputTextList();
    this.addEventFormTextareaList();
    this.addEventFormSubmitBtn();
  }

  addEventFormInputTextList() {
    if (this.FormInputTextFieldList.length < 1) return;

    this.FormInputTextFieldList.forEach(dom => {
      const inputForm = dom.querySelector('.form-input-text');
      const inputLabel = dom.querySelector('.form-input-label');

      inputForm.addEventListener('focus', () => {
        inputLabel.classList.add('move-top');
      });

      inputForm.addEventListener('blur', () => {
        if (!inputForm.value) {
          dom.classList.add('error');
          inputLabel.classList.remove('move-top');
          return;
        }
        dom.classList.remove('error');
      });

      inputForm.addEventListener('keyup', () => {
        if (!inputForm.value) {
          dom.classList.add('error');
          return;
        }
        dom.classList.remove('error');
      });
    });
  }

  addEventFormTextareaList() {
    if (this.FormTextareaFieldList.length < 1) return;

    this.FormTextareaFieldList.forEach(dom => {
      const textareaForm = dom.querySelector('.form-textarea');
      const textareaLabel = dom.querySelector('.form-textarea-label');

      textareaForm.addEventListener('focus', () => {
        textareaLabel.classList.add('move-top');
        dom.classList.add('move-top');
      });

      textareaForm.addEventListener('blur', () => {
        if (!textareaForm.value) {
          dom.classList.add('error');
          dom.classList.remove('move-top');
          textareaLabel.classList.remove('move-top');
          return;
        }
        dom.classList.remove('error');
      });

      textareaForm.addEventListener('keyup', () => {
        if (!textareaForm.value) {
          dom.classList.add('error');
          return;
        }
        dom.classList.remove('error');
      });
    });
  }

  addEventFormSubmitBtn() {
    if (!this.FormSubmitBtn) return;

    this.FormSubmitBtn.addEventListener('click', () => {
      const formFieldList = [...this.FormInputTextFieldList, ...this.FormTextareaFieldList];

      if (formFieldList.length < 1) return;

      formFieldList.forEach(dom => {
        const target = dom.querySelector('.form-input-text') || dom.querySelector('.form-textarea') || null;

        if (!target) return;

        if(!target.value) {
          dom.classList.add('error');
        } else {
          dom.classList.remove('error');
        }
      })
    });
  }
}