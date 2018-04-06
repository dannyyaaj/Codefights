function likes(names) {
  // TODO
  switch(names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]},  ${names[2]} and like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`;
  }
}

console.log(likes(["Danny", "Justine","Kai","lucky"]));

console.log(likes(["Danny", "Justine"]));