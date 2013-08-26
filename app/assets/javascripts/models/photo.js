(function(root){

  var Photo = root.TAG.Models.Photo = function(formData){
    this.formData = formData;
  };

  // var Photo.baseUrl =


  // function Photo.prototype.save (callback) {
  Photo.prototype.save = function(callback){
    var that = this;
    $.ajax({
      url: "/photos",
      type: "Post",
      data: that.formData,
      success: callback,
      error: function(){
        console.log("There was an error in posting the photo.");
      }
    });
  };

})(this);

