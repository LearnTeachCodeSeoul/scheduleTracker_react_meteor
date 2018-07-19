Accounts.onCreateUser((options, user) => {
  //console.log('options', options);
  //console.log('user', user);

  //adds admin role if user is in Admin list under settings.json
  // console.log(
  //   'Meteor.settings.admins',
  //   Meteor.settings.admins.indexOf(options.username)
  // );
  if (Meteor.settings.admins.indexOf(options.username) > -1) {
    user.roles = 'admin';
  }

  const scheduleArrays = () => {
    let schedule = [];
    for (let i = 0; i < 52; i++) {
      let week = [0, 0, 0, 0, 0, 0, 0];
      schedule = [...schedule, week];
    }
    return schedule;
  };
  user.info = {
    rank: options.rank,
    section: options.section,
    schedule: scheduleArrays(),
    firstName: options.firstName,
    lastName: options.lastName
  };
  return user;
});

if (Meteor.isServer) {
  //publish runs a callback that makes data available to the client
  //subscribes in App.js to get the data

  Meteor.publish('allUsers', function() {
    return Meteor.users.find(
      {},
      {
        fields: {
          role: 1,
          info: 1
        }
      }
    );
  });

  Meteor.methods({
    changeSchedule(member, _id, newStatus, day, week) {
      // console.log('method hit!!!!!!!!', member);
      if (member) {
        Meteor.users.update(
          { _id },
          {
            $set: {
              ['info.schedule.' + week + '.' + day]: newStatus
            }
          }
        );
      }
    },
    deleteEmployee(id) {
      Meteor.users.remove(id);
    },
    updateUserInfo(adminId, targetId, newState) {
      const user = Meteor.users.findOne({ _id: adminId });
      if(user.roles === 'admin') {
        Meteor.users.update(
          { _id: targetId },
          {
            $set: {
              ['info.rank']: newState.rank,
              ['info.section']: newState.section,
              ['info.firstName']: newState.firstName,
              ['info.lastName']: newState.lastName,
            }
          }
        )
      }
    }
  });
}
