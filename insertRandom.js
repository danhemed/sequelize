import { sequelize, UserActivity } from './db.js';

await sequelize.sync({ force: true });
console.log("Table created.");

const names = ['Charlie', 'Dana', 'Eva', 'Frank'];
const activities = ['Comment', 'Like', 'Share', 'Logout'];

setInterval(async ()=> {
    const name = names[Math.floor(Math.random() * names.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];

    try {
        await UserActivity.create({name : name, activity: activity});
        console.log("Initial data inserted.");
    } catch (error) {
        console.error("Error inserting data:", error);
    }

}, 10000);

setInterval(async () => {
    try {
        const rows = await UserActivity.findAll({row : true});
        console.log(rows);
    } catch (err) {
        console.log(err);
    }
}, 30000);
