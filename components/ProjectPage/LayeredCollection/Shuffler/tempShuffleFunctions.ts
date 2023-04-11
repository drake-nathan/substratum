/* eslint-disable */

export const topAction = (tokenID: number, currentOrder: number[]) => {
  // return an array that is the current order with the token id moved to the top.

  const orderWithTokenIDRemoved = currentOrder.filter((id) => id !== tokenID);
  return orderWithTokenIDRemoved.concat([tokenID]);
};

// export const viewButton = (tokenID: number) => {};

export const cutAction = (currentOrder: number[]) => {
  const newOrder = [];
  const numberToCutAt = Math.floor(Math.random() * 20 + 40);

  for (let i = 0; i < 100; i++) {
    if (i < 100 - numberToCutAt) {
      newOrder[i] = currentOrder[i + numberToCutAt];
    } else {
      newOrder[i] = currentOrder[i - (100 - numberToCutAt)];
    }
  }

  return newOrder;
};

export const overhandAction = (currentOrder: number[]) => {
  const newOrder = [];

  let temp = Math.floor(Math.random() * 3);
  if (temp == 0) {
    temp = 4;
  } else if (temp == 1) {
    temp = 5;
  } else {
    temp = 10;
  }

  const stack = 100 / temp;
  for (let i = 0; i < temp; i++) {
    for (let j = 0; j < stack; j++) {
      newOrder[i * stack + j] = currentOrder[100 - (i + 1) * stack + j];
    }
  }

  return newOrder;
};

export const faroAction = (currentOrder: number[]) => {
  const newOrder = [];
  let temp = 0;
  for (let i = 0; i < 100; i += 2) {
    newOrder[i] = currentOrder[temp + 50];
    newOrder[i + 1] = currentOrder[temp];
    temp++;
  }
  return newOrder;
};

export const washAction = (currentOrder: number[]) => {
  const newOrder = [...currentOrder];
  for (let i = 0; i < 100; i++) {
    const n = i + (Math.floor(Math.random() * 10000) % (100 - i));
    const temp = newOrder[n];
    newOrder[n] = newOrder[i];
    newOrder[i] = temp;
  }

  return newOrder;
};

export const reverseAction = (currentOrder: number[]) => {
  const newOrder = [...currentOrder];
  for (let i = 0; i < 50; i++) {
    const temp = newOrder[99 - i];
    newOrder[99 - i] = newOrder[i];
    newOrder[i] = temp;
  }

  return newOrder;
};
