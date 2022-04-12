// System imports
import {JsonString} from 'json';

// Email class
export class JsonEmail extends JsonString
{
	// Email constructor
	constructor(value?:string) { super(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), value !== undefined ? value : 'user@email.com');  }
}