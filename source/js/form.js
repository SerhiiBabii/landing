(function(){
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
      form.classList.remove('is-hidden');

      closeButton = document.querySelector('.form__clone-button');
      closeButton.addEventListener('click', onClose);
    };

    me.close = function() {
      form.classList.add('is-hidden');
    };

    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if(!me.isAllCompleted(requiredFields)){
            console.log('Заповніть всі необхідні поля.');
            return false;
        } else if (!BSV.validation.isEmail(emailValue)){
            console.log('Не вірно вказаний email');
            return false;
        } else if(!BSV.validation.isPhoneNumber(numberValue)) {
            console.log('Не вірно вказаний номер телефону.');
            return false;
        }
    };

    me.isAllCompleted = function(data) {
        var result = true;
        for (var i=0; i < data.length; i++) {
            if(!BSV.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    BSV.form = me;
}());