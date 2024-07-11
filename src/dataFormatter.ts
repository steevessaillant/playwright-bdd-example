export function fullNameFormatter(input: string) {
  if (!input || input.trim() === '') {
    throw new Error('Empty input');
  }

  const trimmedInput = input.trim();
  const splitted = trimmedInput.split(/\s+/); // Split by any whitespace sequence

  if (splitted.length === 1) {
    throw new Error('Missing last name');
  }

  const formattedNames = splitted.map(name => capitalizeFirstLetter(name));
  const formattedFullName = formattedNames.join(' ');

  return formattedFullName;
}

const capitalizeFirstLetter = (str: string) => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
