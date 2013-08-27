window.TAG = {

  // Photo: function(){
//
//   };

  Models: {},
  Views: {},

  initialize: function($photoForm, $photoView){
    $photoForm.on("submit", function(event){
      event.preventDefault();
      var formData = $(this).serializeJSON();
      var photo = new tagGlobal.Models.Photo(formData.photo);
      console.log(photo);
      photo.save(function (data) {
        console.log(data);
      });
    });
    var tagGlobal = this;
    var Photo = this.Models.Photo;
    var IndexClass = this.Views.PhotosViewController;
    var index = new IndexClass($photoView);
    index.render();
  }

  // initialize: function ($sidebar, $content, tasksData) {
//     var tasks = new TD.Collections.Tasks(tasksData);
//
//     this.installSidebar($sidebar, tasks);
//
//     // startup a router
//     new TD.Routers.TasksRouter($content, tasks);
//     // begin listening for navigation events
//     Backbone.history.start();
//   }

};




