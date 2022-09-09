# jsoncommon

Useful primitives for class based Json Schema Validation package [json](https://github.com/cmkweber/json).
<br/>
<br/>

## Description

Common primitives are provided such as JsonDate, JsonEmail, and JsonUrl, that are not considered strict json.
The interface uses common types such as Date but serializes to strict json as a number.
For more details see [json](https://github.com/cmkweber/json).
<br/>
<br/>
 
## Usage

Instantiate or extend from one of the provided json primitives.

### JsonCurrency
Enumeration that resolves to an ISO 4217 currency.

```typescript
new JsonCurrency(
	lowercase:boolean, // Lowercase currency
	value?:Currency // Default value
);
```

### JsonDate
Date that serializes to the amount of elapsed time since the Unix epoch.

```typescript
new JsonDate(
	milliseconds:boolean, // Milliseconds or seconds
	min?:Date, // Minimum date value
	max?:Date, // Maximum date value
	value?:Date // Default value
);
```

### JsonEmail
Regular expression that validates against the majority of valid email inputs.

```typescript
new JsonEmail(
	value?:string // Default value
);
```

### JsonTimestamp
Date that serializes to an ISO 8601 time string.

```typescript
new JsonTimestamp(
	min?:Date, // Minimum date value
	max?:Date, // Maximum date value
	value?:Date // Default value
);
```

### JsonUrl
Utilizes URL for validation of url inputs.

```typescript
new JsonUrl(
	value?:URL // Default value
);
```