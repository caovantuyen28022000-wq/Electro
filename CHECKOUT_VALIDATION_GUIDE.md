# Checkout Form Validation Guide

## Overview
The Checkout page now includes comprehensive form validation to ensure all required fields are properly filled before placing an order.

## Validation Rules

### Required Fields (Cannot be empty)
1. **First Name** - Must contain at least one character
2. **Last Name** - Must contain at least one character
3. **Address** - Must contain at least one character
4. **Phone** - Must be a valid phone number (10-11 digits, numbers only)

### Phone Number Validation
The phone field has specific validation rules:
- **Format**: Only digits (0-9) are allowed
- **Length**: Must be exactly 10 or 11 digits
- **Spaces**: Spaces are allowed but will be removed during validation
- **Examples of valid phone numbers**:
  - `0123456789` (10 digits)
  - `01234567890` (11 digits)
  - `0987654321` (10 digits)
  - `09876543210` (11 digits)

- **Examples of invalid phone numbers**:
  - `123456789` (only 9 digits)
  - `123456789012` (12 digits)
  - `123-456-7890` (contains hyphens)
  - `+84 123 456 789` (contains special characters)
  - `abc1234567` (contains letters)

## How Validation Works

### Real-time Validation
1. **On Blur (when leaving a field)**:
   - The field is validated immediately when the user clicks away
   - Error message appears if the field is invalid
   - The field gets a red border (`is-invalid` class)

2. **On Change (while typing)**:
   - Error message is cleared as soon as the user starts typing
   - Provides immediate feedback that the system is responding

3. **On Submit (when clicking "Place Order")**:
   - All required fields are validated
   - If any field is invalid:
     - Error messages appear for all invalid fields
     - Page scrolls to the first error
     - The field receives focus
   - If all fields are valid:
     - Success message appears
     - User is redirected to the Shop page

## Error Messages

### English Messages (in code)
- **First Name**: "First name is required"
- **Last Name**: "Last name is required"
- **Address**: "Address is required"
- **Phone (empty)**: "Phone number is required"
- **Phone (invalid format)**: "Phone number must be 10-11 digits (numbers only)"

## Visual Indicators

### Valid Fields
- Normal Bootstrap styling
- No error message displayed

### Invalid Fields
- Red border (`is-invalid` class from Bootstrap)
- Red error message below the field
- Error message is displayed in a `div` with class `invalid-feedback d-block`

## Testing the Validation

### Test Case 1: Empty Required Fields
1. Navigate to `/checkout`
2. Leave all fields empty
3. Click "Place Order"
4. **Expected**: Error messages appear for First Name, Last Name, Address, and Phone

### Test Case 2: Invalid Phone Number
1. Navigate to `/checkout`
2. Fill in First Name, Last Name, and Address
3. Enter an invalid phone number (e.g., "123" or "abc123")
4. Click "Place Order" or click away from the phone field
5. **Expected**: Error message "Phone number must be 10-11 digits (numbers only)"

### Test Case 3: Valid Phone Number
1. Navigate to `/checkout`
2. Fill in all required fields
3. Enter a valid phone number (e.g., "0123456789")
4. Click "Place Order"
5. **Expected**: Success message and redirect to Shop page

### Test Case 4: Real-time Validation
1. Navigate to `/checkout`
2. Enter an invalid phone number
3. Click away from the field (blur)
4. **Expected**: Error message appears
5. Start typing in the field again
6. **Expected**: Error message disappears

## Code Implementation

### Validation Function
```typescript
const validateForm = (): FormErrors => {
  const newErrors: FormErrors = {};

  // Validate First Name
  if (!formData.firstName.trim()) {
    newErrors.firstName = 'First name is required';
  }

  // Validate Last Name
  if (!formData.lastName.trim()) {
    newErrors.lastName = 'Last name is required';
  }

  // Validate Address
  if (!formData.address.trim()) {
    newErrors.address = 'Address is required';
  }

  // Validate Phone - Vietnamese phone format (10-11 digits only)
  if (!formData.phone.trim()) {
    newErrors.phone = 'Phone number is required';
  } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
    newErrors.phone = 'Phone number must be 10-11 digits (numbers only)';
  }

  return newErrors;
};
```

### Phone Validation Regex Explained
- `^[0-9]{10,11}$`: This regex pattern means:
  - `^` - Start of string
  - `[0-9]` - Match any digit from 0 to 9
  - `{10,11}` - Match exactly 10 or 11 of the preceding element (digits)
  - `$` - End of string

- `.replace(/\s/g, '')` - Remove all whitespace before validation:
  - `/\s/g` - Regex pattern to match all whitespace characters globally
  - `''` - Replace with empty string (remove them)

## User Experience Features

1. **Smooth Scrolling**: When validation fails, the page smoothly scrolls to the first error
2. **Auto Focus**: The first invalid field receives focus automatically
3. **Clear on Type**: Error messages disappear as soon as the user starts typing
4. **Visual Feedback**: Bootstrap's `is-invalid` class provides clear visual indication
5. **Accessibility**: Form fields have proper labels and ARIA attributes

## Browser Compatibility

The validation uses standard HTML5 and React features that work in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements that could be added:
1. **Email validation**: Check if email format is valid
2. **Phone number formatting**: Auto-format phone number as user types
3. **Real-time character count**: Show remaining characters for text fields
4. **Success checkmarks**: Show green checkmarks for valid fields
5. **Validation summary**: Show a summary of all errors at the top of the form
6. **Custom error messages**: Allow customization of error messages
7. **International phone support**: Support phone numbers from different countries

## Integration with Cart System

The Checkout page is integrated with the Zustand cart store:
- Order summary displays items from the cart
- After successful validation, the order is placed
- Cart can be cleared after successful order placement

## Conclusion

The Checkout form validation provides a robust and user-friendly experience, ensuring that all necessary information is collected before placing an order. The phone number validation specifically enforces the Vietnamese phone number format (10-11 digits only), preventing invalid submissions and reducing errors in the ordering process.