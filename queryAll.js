import { UserActivity } from './db.js';

try {
    const row = await UserActivity.findAll({raw :true});
    console.table(row);
} catch (err) {
    console.log(err)
}