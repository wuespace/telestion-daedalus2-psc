import { JsonSerializable } from '@wuespace/telestion-client-types';

/**
 * Channel to save data to the database
 */
export const MONGODB_SAVE =
	'org.telestion.core.database.MongoDatabaseService/in#save';

/**
 * Channel where the database publishes the recently saved data
 */
export const MONGODB_NEW =
	'org.telestion.core.database.MongoDatabaseService/out#save';

export const MONGODB_FIND =
	'org.telestion.core.database.MongoDatabaseService/in#find';

export const Spectrum =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.sound.Spectrum';

export interface DataMessage<T extends JsonSerializable, C extends string>
	extends Record<string, JsonSerializable> {
	dataType: C;
	result: T[];
	className: 'org.telestion.core.database.DbResponse';
}
