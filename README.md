# jsoncommon

Useful primitives for class based Json Schema Validation package [json](https://github.com/cmkweber/json).

## Description

Common primitives are provided such as JsonDate, JsonEmail, and JsonUrl, that are not considered strict json.
The interface uses common types such as Date but serializes to strict json as a number.
For more details see [json](https://github.com/cmkweber/json).

## Usage

Instantiate or extend from one of the provided json primitives.

### JsonDate

```typescript
new JsonDate(
	min?:Date, // Minimum date value
	max?:Date, // Maximum date value
	value?:Date // Default value
);
```

### JsonEmail

```typescript
new JsonEmail(
	value?:string // Default value
);
```

### JsonUrl

```typescript
new JsonUrl(
	value?:URL // Default value
);
```