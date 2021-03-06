# Callback

[[10λΆ νμ½ν‘] π₯ μ μ‘°μ Callback](https://www.youtube.com/watch?v=wvEYG6ydAGg&list=PLkfxusmKmLsNDGmER2tmrslpPOTfKhE7j&index=85&t=504s)

## 1. λκΈ°μ λΉλκΈ°

### λκΈ° (Synchronous)

- νΉμ  μ½λλ₯Ό μν μλ£ν ν λ€μ μ½λλ₯Ό μ€ν
- μμμ½λ

```jsx
console.log('1');
console.log('2');
console.log('3');
```

### λΉλκΈ° (Asynchronous)

- νΉμ  μ½λλ₯Ό μννλ λμ€ λ€μ μ½λλ₯Ό μ€ν
- μμμ½λ

```jsx
console.log('1');
setTimeout(() => {
	console.log('3');
}, 1000);
console.log('2');
```

- λκΈ°μ μΌλ‘ λμνλ JSμ½λμμ λΉλκΈ° μ μΌλ‘ λμν  μ μλ μ΄μ λ Callback ν¨μ λλΆ
- `setTimeout` ν¨μλ₯Ό λ³΄λ©΄ `function` κ³Ό `delay`λ₯Ό μΈμλ‘ λ°κ³ μλ€.
- μ¬κΈ°μ μΈμλ‘ λ°λ `function`μ΄ `Callback function` μ΄λ€.

## 2. Callback

- Callbackμ λλμ μμ νΈμΆνλΌλ μλ―Έ

```jsx
const arr = ['1', '2', '3'];

const printArray = () => {
	console.log(arr.shift());
	if (!arr.length) {
		clearInterval(timer);
	}
}

const timer = setInterval(printArray, 1000);
```

- μμ μ½λλ₯Ό μ€ννλ©΄ `setInterval`μκ² μ μ΄κΆμ μμνλ€.

## 3. Callback Hell

> μ½λ°± μ§μ₯(Callback Hell)μ μ½λ°± μμ ν¨μ νΈμΆμ΄ λ°λ³΅λμ΄ μ½λμ κ°λμ±μ΄ κ°λΉν  μ μμ μ λλ‘ λ¨μ΄μ§λ νμμ λ§νλ€.
> 

```jsx
asyncFunc('something', function (err, data){
	asyncFunc('something', function (err, data){
		asyncFunc('something', function (err, data){
			asyncFunc('something', function (err, data){
				asyncFunc('something', function (err, data){
					asyncFunc('something', function (err, data){
						asyncFunc('something', function (err, data){
							asyncFunc('something', function (err, data){
								asyncFunc('something', function (err, data){
										// do the final action
								});
							});
						});
					});
				});
			});
		});
	});
});
```

- μ€μ²©λ Callbackμ μ¬μ©νλ€λ³΄λ©΄ κ°λμ±μ΄ λ¨μ΄μ§κ² λλ€.
- κ°λμ±μ΄ λ¨μ΄μ§λ©΄μ μμ°μ€λ½κ² λλ²κΉλ νλ€μ΄μ§κ² λλ€.

## 4. Promise

- **Promise** κ°μ²΄λ μμ±ν  λ `executor`λΌλ λ§€κ° λ³μλ₯Ό λ°λλ€.
- `executor`λ λ€μ λ§€κ°λ³μλ‘ λ κ°μ§ ν¨μλ₯Ό λ°λλ° `resolve`μ `reject`μ΄λ€.
    - `resolve`λ λΉλκΈ° μμμ μ±κ³΅μ μΌλ‘ μλ£ν κ²°κ³Όλ₯Ό λ°μ λ μ¬μ©νλ€.
    - `reject`λ λ°λλ‘ μ€ν¨ν κ²°κ³Όλ₯Ό λ°μ λ μ¬μ©νλ€.
- **Promise**μ κ²½μ° λ΄λΆμμ `resolve` νΉμ `reject`λ₯Ό νΈμΆνκΈ° μ μλ `then`, `catch` λΆλΆμΌλ‘ λμ΄κ°μ§ μλλ€.
- λΉλκΈ° μμμ΄ μλ£λ  λ `resolve` or `reject`λ₯Ό νΈμΆνλ λ°©λ²μΌλ‘ **λΉλκΈ°μ λκΈ°μ  ννμ΄ κ°λ₯νλ€.**

## 5. Async/Await

> `Async/Await`μ ES2017μ μΆκ°λ **Promise**μ syntactic sugerμ΄λ€.
> 
- `Async/Await`μ **Promise**λ₯Ό λ³΄λ€ μ½κ² μ¬μ©ν  μ μκ² ν΄μ€λ€.
- Async
    - ν¨μ μμ `async`λ₯Ό λͺμνλ©΄ ν¨μ μμ μλ μ½λ λΈλ­λ€μ΄ **Promise**λ‘ λ³νλλ€.
- Await
    - `await`μ μ¬μ©νκΈ° μ μ ν¨μ μμ `async`λ₯Ό λͺμν΄μΌ νλ€.
        - ES2022λΆν°λ `async`λ₯Ό λͺμνμ§ μμλ `await`μ μ¬μ©ν  μ μκ² λλ€κ³  νλ€.
    - λΉλκΈ° λ‘μ§μ΄ μ€νλλ λμ ν¨μμ μ€νμ λ©μΆκ³  λ°νμ κΈ°λ€λ¦°λ€.