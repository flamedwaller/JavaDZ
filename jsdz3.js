/*       let user = {
  name: "John",
  age: 30
};

if (Object.keys(user).length > 0 && 'age' in user) {
    console.log ("Объект не пустой и содержит ключ 'age'.");
} else {
    console.log ("Объект пустой или не содержит ключ 'age'.");
} */


/* function removeKeys(keyOrKeys, object) {
  // Приводим keyOrKeys к массиву, если это строка
  const keysToRemove = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];

  // Удаляем ключи из объекта
  keysToRemove.forEach(key => {
    delete object[key];
  });

  return object;
}

// Пример
const user = {
  name: "Sahur",
  age: 30,
  email: "john@example.com"
};

removeKeys(['age', 'email'], user);
console.log(user);  */


/* function updateKeys(keyOrKeys, valueOrValues, object) {
  const keysToUpdate = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
  const valuesToUpdate = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];

  keysToUpdate.forEach((key, index) => {
    if (index < valuesToUpdate.length) {
      object[key] = valuesToUpdate[index];
    }
  });

  return object;
}


const user = {
  name: "Trippi Troppa",
  age: 23
};

updateKeys(['age', 'name'], [32, 'Bombardiro Crocodilo'], user);
console.log(user); */

/* function isKeysExists(keyOrKeys, object) {
  const keysToCheck = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
  return keysToCheck.every(key => key in object);
}

const user = {
  name: "John",
  age: 30
};

console.log(isKeysExists('age', user));
console.log(isKeysExists(['age', 'name'], user));
console.log(isKeysExists(['age', 'email'], user)); */

/* function createObject(entries) {
    const obj = {};
    for (const [key, value] of entries) {
        obj[key] = value;
    }
    return obj;
}

const entries = [['name', 'Tralaleilo'], ['age', 20], ['city', 'Madrid']];
const result = createObject(entries);
console.log(result); */

/* function objectWithoutNils(object) {
    return Object.fromEntries(
        Object.entries(object).filter(([key, value]) => value !== null && value !== undefined)
    );
}


const example = {
    a: 1,
    b: null,
    c: undefined,
    d: 2,
};

const cleanedObject = objectWithoutNils(example);
console.log(cleanedObject);
 */

/*  function isPalindrome(s) {
    const cleanedString = s.replace(/\s+/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome("А путана тупа"));
console.log(isPalindrome("Улыбок тебе, дед Макар"));  */

/* function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

console.log(clamp(4, 3, 2));
console.log(clamp(8, 6, 2));
console.log(clamp(0, 1, 5));
console.log(clamp(1, 4, 9));
 */