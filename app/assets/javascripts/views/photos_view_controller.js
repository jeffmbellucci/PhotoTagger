(function(root){
  console.log(root);
  var View = root.TAG.Views.PhotosViewController = function($rootEl){
    var that = this;
    this.$rootEl = $rootEl;
    $rootEl.find("#photo-form").on("submit", function(){
      that.render();
    });
  };

  var Photo = root.TAG.Models.Photo;

  View.prototype.render = function(){
    var that = this;
    console.log("We are rendering");
    var templateFn = JST["templates/photo_index"];
    Photo.fetch(function(){
      photos = Photo.all();
      var content = templateFn({photos: photos});
      that.$rootEl.find("#photo-section").html(content);
    });
    return that;
  };
})(this);