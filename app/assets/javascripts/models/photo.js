// (function(root){
//
//   root.TAG.Models.Photo = root.TAG.Model({baseUrl: "/photos",
//   modelName: "photo"});
//
// })(this);



(function(root){

  var Photo = root.TAG.Models.Photo = function(attrs){
    this.attrs = attrs;
    this.dataToSend = {photo: attrs};
    // console.log(this.dataToSend);
    // this.attrs = formData;
  };

  // var Photo.baseUrl =


  // function Photo.prototype.save (callback) {
  // Photo.prototype.save = function(callback){
 //    var that = this;
 //    $.ajax({
 //      url: "/photos",
 //      type: "Post",
 //      data: that.formData,
 //      success: callback,
 //      error: function(){
 //        console.log("There was an error in posting the photo.");
 //      }
 //    });
 //  };
  Photo.baseUrl = "/photos";
  Photo.current_records = [];
  Photo.prototype.baseUrl = function () {
   return Photo.baseUrl;
  };

  Photo.prototype.current_records = function () {
    return Photo.current_records;
  };


  Photo.prototype.save = function(callback){
    if(this.attrs.id){
      this.update(callback);
    } else{
      console.log("about to create photo");
      this.create(callback);
    }
  };

  Photo.prototype.create = function(callback){
    var that = this;
    console.log(that);
    $.ajax({
      url: that.baseUrl(),
      type: "Post",
      data: that.dataToSend,
      success: function(data){
        that.attrs = data;
        if(callback){
          callback(data);
        }
        that.current_records().push(that);
        console.log(that.current_records());
      },
      error: function(response){
        console.log(response.responseData);
      }
    });
  };

  Photo.prototype.update = function(callback){
    var that = this;
    $.ajax({
      url: that.baseUrl() + "/" + that.attrs.id,
      type: "Put",
      data: that.dataToSend,
      success: function(data){
        if(callback){
          callback(data);
        }
      },
      error: function(response){
        console.log(response.responseData);
      }
    });
  };

  Photo.prototype.fetch = function(callback){
    var that = this;
    $.ajax({
      url: that.baseUrl() + "/" + that.attrs.id,
      type: "Get",
      data: that.dataToSend,
      success: function(data){
        that.attrs = data;
        if(callback){
          callback(data);
        }
      },
      error: function(response){
        console.log(response.responseData);
      }
    });
  };

  Photo.prototype.destroy = function(callback){
    var that = this;
    $.ajax({
      url: that.baseUrl() + "/" + that.attrs.id,
      type: "Delete",
      success: function(data){
        console.log("Successfully destroyed record");
        if(callback){
          callback(data);
        }
        current_records = that.current_records();
        console.log("current records before:");
        console.log(current_records);
        current_records.splice(current_records.indexOf(that), 1);
        console.log("current records after:");
        console.log(current_records);
      },
      error: function(response){
        console.log(response.responseData);
      }
    });
  };

  Photo.all = function(){
    return Photo.current_records;
  };

  Photo.fetch = function(callback) {
    var that = this;
    $.ajax({
      url: that.baseUrl + ".json",
      type: "Get",
      success: function(data){
        that.current_records = [];
        for (var i = 0; i < data.length; i++) {
          Photo.current_records.push(new Photo(data[i]));
        }
        if(callback){
          callback(data);
        }
      },
      error: function(response){
        console.log(response.responseData);
      }
    });
  };


  Photo.find = function(id) {
    var current_records = Photo.current_records;
    for (var i = 0; i < current_records.length; i++) {
      if (current_records[i].id == id) {
        return current_records[i];
      }
    }
  };

  Photo.destroy = function(){
    _.each(this.current_records, function(item){item.destroy()});
  };

})(this);

