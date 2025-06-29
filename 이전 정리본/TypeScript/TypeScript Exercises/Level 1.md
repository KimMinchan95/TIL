## TypeScript Exercises Level 1
#### [링크](https://typescript-exercises.github.io/#exercise=1&file=%2Findex.ts)

```ts
export interface User {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User): void {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```