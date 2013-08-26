window.TAG = {

  // Photo: function(){
//
//   };

  Models: {},

  initialize: function($photoForm){
    var tagGlobal = this;
    $photoForm.on("submit", function(event){
      event.preventDefault();
      var formData = $(this).serializeJSON();
      var photo = new tagGlobal.Models.Photo(formData);
      photo.save(function (data) {
        console.log(data);
      });
    });
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




