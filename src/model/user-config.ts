import { UserConfig } from '@wuespace/telestion-client-types';
import { overviewDashboard } from './dashboards';

export const userConfig: UserConfig = {
	admin: {
		dashboards: [overviewDashboard]
	}
};
