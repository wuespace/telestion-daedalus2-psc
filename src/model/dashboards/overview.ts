import { Dashboard } from '@wuespace/telestion-client-types';

export const overviewDashboard: Dashboard = {
	title: 'Overview',
	columns: 12,
	rows: 12,
	widgets: [
		{
			widgetName: 'stateWidget',
			width: 2,
			height: 4,
			title: 'stateWidget'
		},
		{
			widgetName: 'graphWidget',
			width: 2,
			height: 4,
			title: 'Altitude'
		},
		{
			widgetName: 'graphWidget',
			width: 2,
			height: 4,
			title: 'Pressure'
		},
		{
			widgetName: 'graphWidget',
			width: 2,
			height: 4,
			title: 'Temperature'
		},
		{
			widgetName: 'mapWidget',
			width: 4,
			height: 8,
			title: 'GPS Data'
		},
		{
			widgetName: 'graphWidget',
			width: 4,
			height: 4,
			title: 'Amplitude'
		},
		{
			widgetName: 'spectrogramWidget',
			width: 4,
			height: 4,
			title: 'Spectrogram Widget'
		},
		{
			widgetName: '9dof-widget',
			width: 3,
			height: 4,
			title: 'Current values'
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Accelerometer'
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Gyroscope'
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Magnetometer'
		}
	]
};
