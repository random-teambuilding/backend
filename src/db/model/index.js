import Sequelize from 'sequelize';

import banned from './banned';
import emailCheck from './emailCheck';
import interest from './interest';
import like from './like';
import locate from './locate';
import skillSet from './skillSet';
import team from './team';
import teamPosition from './teamPosition';
import user from './user';
import userPosition from './userPosition';
import wantSkillSet from './wantSkillSet';

module.exports = (Sequelize, sequelize) => {
	return {
    banned: banned(Sequelize, sequelize),
    emailCheck: emailCheck(Sequelize, sequelize),
    interest: interest(Sequelize, sequelize),
    like: like(Sequelize, sequelize),
    locate: locate(Sequelize, sequelize),
    skillSet: skillSet(Sequelize, sequelize),
    team: team(Sequelize, sequelize),
    teamPosition: teamPosition(Sequelize, sequelize),
    user: user(Sequelize, sequelize),
    userPosition: userPosition(Sequelize, sequelize),
    wantSkillSet: wantSkillSet(Sequelize, sequelize)
	};
};