var values = {};
      var formArr = $("form").serializeArray();
      $.each(formArr, function(i, field){
         values[field.name] = field.value;
         var name = values[field.name];
         console.log(name);
      });
var box = new Box();
box.set("heading",values.boxHeading);
box.set("description",values.boxDescription);
box.save({
  success: function(object){
    console.log("success");
    $("#formBox")[0].reset();
  },
  error: function(modal,error){
    console.log("errr")
  }
})