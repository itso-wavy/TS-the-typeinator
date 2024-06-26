interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): string {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return descriptionText;
}

console.log(countAndDescribe(['Sports', 'Cooking']));
