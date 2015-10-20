Template.postGantt.rendered = function(){
  gantt.config.grid_width = 180;
  // gantt.config.add_column = false;

  gantt.config.columns = [
      {name:"text", label:"任务名", tree:true, width:'150' },
      {name:"add",        label:"", width: '30' }
  ];

  gantt.init("task-gantt", new Date(), new Date(2015, 11, 22));

  gantt.meteor(
    //{tasks: TasksCollection.find(/*[anything]*/), links: LinksCollection.find(/*[anything]*/)},
    //{tasks: TasksCollection, links: LinksCollection}
    {tasks: Tasks2, links: Links2}
  );
};
