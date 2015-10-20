Template.postGantt.rendered = function(){
  gantt.init("task-gantt", new Date(), new Date(2015, 11, 22));

  gantt.meteor(
    //{tasks: TasksCollection.find(/*[anything]*/), links: LinksCollection.find(/*[anything]*/)},
    //{tasks: TasksCollection, links: LinksCollection}
    {tasks: Tasks2, links: Links2}
  );
};
