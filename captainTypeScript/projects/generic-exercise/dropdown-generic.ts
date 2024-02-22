interface Item<T> {
  value: T;
  selected: boolean;
}

const emails: Item<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Item<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Item<string | number>): HTMLOptionElement {
  const $option = document.createElement('option');
  $option.value = item.value.toString();
  $option.innerText = item.value.toString();
  $option.selected = item.selected;

  return $option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(email => {
  const $item = createDropdownItem(email);
  const $selectTag = document.querySelector(
    '#email-dropdown'
  ) as HTMLSelectElement;

  $selectTag.appendChild($item);
});

// NOTE: 수량 드롭 다운 아이템 추가
numberOfProducts.forEach(qty => {
  const $item = createDropdownItem(qty);
  const $selectTag = document.querySelector(
    '#product-dropdown'
  ) as HTMLSelectElement;

  $selectTag.appendChild($item);
});
