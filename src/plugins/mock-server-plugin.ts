import chalk from 'chalk';
import { Logger, ChalkLogger } from '@fliegwerk/logsemts';
import {
	ChannelAddress,
	JsonSerializable
} from '@wuespace/telestion-client-types';
import { MockServer, OnClose, OnInit } from '@wuespace/vertx-mock-server';

import { Spectrum } from '../model/channels';
import { SpectrumMessage } from '../model/messages';

class RocketSoundMockServer extends MockServer implements OnInit, OnClose {
	intervalId: any;

	readonly spectrumData: Array<SpectrumMessage> = [
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.sound.Spectrum',
			result: [
				{
					min: 0.1,
					max: 1,
					data: new Array(40).fill(0).map(() => Math.random()),
					className: 'de.jvpichowski.rocketsound.messages.sound.Spectrum'
				}
			]
		}
	];
	currentSpectrum = 0;

	onInit() {
		this.intervalId = setInterval(() => {
			this.currentSpectrum = this.sendMessage(
				this.currentSpectrum,
				Spectrum,
				this.spectrumData
			);
		}, 1000); // send every 1 second new data
	}

	onClose() {
		clearInterval(this.intervalId);
	}

	private sendMessage(
		current: number,
		channel: ChannelAddress,
		data: Array<JsonSerializable>
	): number {
		if (data.length === 0) throw new Error('Data is empty');
		if (current + 1 >= data.length) current = 0;
		else current += 1;

		this.send(channel, data[current]);

		return current;
	}
}

const logger = new Logger({
	loggers: [ChalkLogger(chalk)]
});

export function onReady() {
	if (
		process.env.NODE_ENV !== 'production' &&
		process.env.MOCK_SERVER === 'true'
	) {
		const server = new RocketSoundMockServer({
			//logger: logger.getComponentLogger('Mock Server')
		});
		server.listen({ port: 9870, hostname: '0.0.0.0' });
	}
}
