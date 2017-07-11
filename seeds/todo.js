
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
        const todos = [{
            title: 'Build Crud App',
            priority: 1,
            date: new Date()
        }, {
						title: 'Call Grandparents',
						priority: 5,
						date: new Date()
        }, {
						title: 'Call Parents',
						priority: 3,
						date: new Date()
        }, {
            title: 'Walk Kela',
            priority: 2,
            date: new Date()
        }];
        return knex('todo').insert(todos);
    });
};
