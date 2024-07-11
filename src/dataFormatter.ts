export function fullNameFormatter(input: any) {
    var splitted = input.split(' ');
    var firstName = capitalizeFirstLetter(splitted[0]);
    var lastName = capitalizeFirstLetter(splitted[1]);
  
    return firstName + ' ' + lastName;
  };
  
  let capitalizeFirstLetter = (str: string) => {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  