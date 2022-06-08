// System imports
import {JsonRequired} from 'json';

// Date class
export class JsonDate extends JsonRequired<Date, number>
{
	// Date constructor
	constructor(readonly min?:Date, readonly max?:Date, value?:Date)
	{
		// If a minimum and maximum were specified, and theyre invalid, throw error
		if(min !== undefined && max !== undefined && min.valueOf() > max.valueOf())
			throw new Error('Invalid range');

		// Call creation on json
		super(value !== undefined ? value : new Date());

		// If a value was specified, attempt to validate it
		if(value !== undefined)
			this.validate();
	}

	// Function to validate the dates value
	protected validate():void
	{
		// If the date has a minimum, and the value is below it, throw error
		if(this.min !== undefined && this.value.valueOf() < this.min.valueOf())
			throw new Error('Below minimum');

		// If the date has a maximum, and the value is above it, throw error
		if(this.max !== undefined && this.value.valueOf() > this.max.valueOf())
			throw new Error('Above maximum');
	}

	// Function to parse the specified value
	parse(value:any):void
	{
		// If the specified value is a date, set it
		if(value instanceof Date)
			this.set(value);
		// Else, attempt to parse the specified date
		else
		{
			// If the specified value isnt a number, throw error
			if(typeof value !== 'number')
				throw new Error('Invalid type');

			// If the specified value isnt a valid date, throw error
			if(isNaN(value) || !Number.isInteger(value) || !Number.isSafeInteger(value))
				throw new Error('Invalid date');

			// Set the specified value
			this.set(new Date(value));
		}
	}

	// Function to serialize the dates value
	serialize():number { return this.value.valueOf(); }
}