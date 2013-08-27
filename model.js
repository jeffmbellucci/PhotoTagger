(function(root){

  root.TAG.Model = function(options){
    var modelName = options.modelName;

    function NewClass(formData){
      this.formData = formData;
      this.attrs = this.formData[modelName];
    };

    NewClass.prototype.save = function(callback){
      // var that = this;
      //       $.ajax({
        //         url: options.baseUrl,
        //         type: "Post",
        //         data: that.formData,
        //         success: callback,
        //         error: function(response){
          //           console.log(response.responseData);
          //         }
          //       });

      if(this.attrs.id){
        NewClass.prototype.update(callback);
      } else{
        NewClass.prototype.create(callback);
      }
    };

    NewClass.prototype.create = function(callback){
      var that = this;
      $.ajax({
        url: options.baseUrl,
        type: "Post",
        data: that.formData,
        success: callback,
        error: function(response){
          console.log(response.responseData);
        }
      });
    };

    NewClass.prototype.update = function(callback){
      var that = this;
      $.ajax({
        url: options.baseUrl + "/" + that.attrs.id,
        type: "Put",
        data: that.formData,
        success: callback,
        error: function(response){
          console.log(response.responseData);
        }
      });
    };

    return NewClass;
  // var Photo.baseUrl =


})(this);
