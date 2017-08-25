// button hover change
$(document).ready(function () {
  $('.btn').hover(function(){
    $(this).text("YOUR NEXT EMPLOYEE!");
}, function() {
    $(this).text("LET'S WORK TOGETHER!");
});
  });

// Form Validation
$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-block",
    highlight: function(element) {
      $(element)
      .closest('.form-style-6')
      .addClass('has-error');
    },
    unhighlight: function(element){
      $(element)
      .closest('form-style-6')
      .removeClass('has-error')
    }
  })
  $('#contact-form').validate({
    rules: {
      text: "required",
      name: "required",
      email: {
        required: true,
        email: true
      }
    }
  })
});
