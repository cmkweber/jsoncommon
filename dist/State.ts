// System imports
import {JsonEnum} from 'json';

// State schema
const StateSchema = {
	AK: 'AK',
	AL: 'AL',
	AR: 'AR',
	AS: 'AS',
	AZ: 'AZ',
	CA: 'CA',
	CO: 'CO',
	CT: 'CT',
	DC: 'DC',
	DE: 'DE',
	FL: 'FL',
	GA: 'GA',
	GU: 'GU',
	HI: 'HI',
	IA: 'IA',
	ID: 'ID',
	IL: 'IL',
	IN: 'IN',
	KS: 'KS',
	KY: 'KY',
	LA: 'LA',
	MA: 'MA',
	MD: 'MD',
	ME: 'ME',
	MI: 'MI',
	MN: 'MN',
	MO: 'MO',
	MP: 'MP',
	MS: 'MS',
	MT: 'MT',
	NC: 'NC',
	ND: 'ND',
	NE: 'NE',
	NH: 'NH',
	NJ: 'NJ',
	NM: 'NM',
	NV: 'NV',
	NY: 'NY',
	OH: 'OH',
	OK: 'OK',
	OR: 'OR',
	PA: 'PA',
	PR: 'PR',
	RI: 'RI',
	SC: 'SC',
	SD: 'SD',
	TN: 'TN',
	TX: 'TX',
	UM: 'UM',
	UT: 'UT',
	VA: 'VA',
	VI: 'VI',
	VT: 'VT',
	WA: 'WA',
	WI: 'WI',
	WV: 'WV',
	WY: 'WY'
};

// State class
export class JsonState extends JsonEnum<typeof StateSchema>
{
	// State constructor
	constructor(readonly lowercase:boolean = false, value?:keyof typeof StateSchema) { super(StateSchema, value); }

	// Function to parse the specified value
	override parse(value:any):void
	{
		// If the state is lowercase, and the specified value is a string, set it to uppercase
		if(this.lowercase && typeof value === 'string')
			value = value.toUpperCase();

		// Call parse on enum
		super.parse(value);
	}

	// Function to serialize the states value
	override serialize():string
	{
		// Call serialize on enum
		const state:string = super.serialize();

		// Return success
		return !this.lowercase ? state : state.toLowerCase();
	}
}