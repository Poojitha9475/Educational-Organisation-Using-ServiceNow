function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }

   if(newValue) {

      var a = parseInt(g_form.getValue('u_percentage')); 

      if(a >= 0 && a <= 59){

         g_form.setValue('u_result','Fail');

      } else if(a >= 60 && a <= 100) {

         g_form.setValue('u_result','Pass');

      } else {

         g_form.addErrorMessage('Percentage should be between 0 and 100.');

         g_form.clearValue('u_result');

      }

   }

}
