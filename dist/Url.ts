// System imports
import {JsonRequired} from 'json';

// Url class
export class JsonUrl extends JsonRequired<URL, string>
{
	// Url constructor
	constructor(value?:URL)
	{
		// Call creation on json
		super(value !== undefined ? value : new URL('http://..'));

		// If a value was specified, attempt to validate it
		if(value !== undefined)
			this.validate();
	}

	// Function to validate the urls value
	protected validate():void {}

	// Function to parse the specified value
	parse(value:any):void
	{
		// If the specified value is a url, set it
		if(value instanceof URL)
			this.set(value);
		// Else, attempt to parse the specified url
		else
		{
			// If the specified value isnt a string, throw error
			if(typeof value !== 'string')
				throw new Error('Invalid type');

			// Set the specified value
			this.set(new URL(value));
		}
	}

	// Function to serialize the urls value
	serialize():string { return this.value.href; }
}