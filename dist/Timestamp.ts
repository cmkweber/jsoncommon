// System imports
import {JsonRequired} from 'json';

// Timestamp class
export class JsonTimestamp extends JsonRequired<Date, string>
{
	// Timestamp constructor
	constructor(readonly after?:Date, readonly before?:Date, value?:Date)
	{
		// Call creation on json
		super(value !== undefined ? value : (after !== undefined ? after : new Date()));

		// If a value was specified, attempt to validate it
		if(value !== undefined)
			this.validate();
	}

	// Function to validate the timestamps value
	protected validate():void
	{
		// If the timestamp has an after, and the value isnt after, throw error
		if(this.after !== undefined && this.value.valueOf() < this.after.valueOf())
			throw new Error('Invalid after');

		// If the timestamp has a before, and the value isnt before, throw error
		if(this.before !== undefined && this.value.valueOf() > this.before.valueOf())
			throw new Error('Invalid before');
	}

	// Function to parse the specified value
	parse(value:any):void
	{
		// If the specified value is a date, set it
		if(value instanceof Date)
			this.set(value);
		// Else, attempt to parse the specified timestamp
		else
		{
			// Attempt to acquire the specified timestamp as a date
			const date:number = Date.parse(value);

			// If the specified timestamp is invalid, throw error
			if(isNaN(date))
				throw new Error('Invalid timestamp');

			// Set the specified value
			this.set(new Date(date));
		}
	}

	// Function to serialize the timestamps value
	serialize():string { return this.value.toISOString(); }
}