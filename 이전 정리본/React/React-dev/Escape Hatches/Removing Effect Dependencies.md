# Removing Effect Dependencies

- Effect를 작성하면 린터는 의존성 목록에 Effect가 읽는 모든 반응형 값을 포함했는지 확인한다.
- 의존성으로 인해 Effect가 너무 자주 실행되거나 무한 루프를 생성할 수도 있다.

## Dependencies should match the code

- Effect는 반응형 값에 "반응"한다. 린터는 이를 의존성으로 지정했는지 확인한다.

## To remove a dependency, prove that it’s not a dependency

- 의존성을 제거하려면 해당 컴포넌트가 의존성이 될 필요가 없다는 것을 린터에 "증명"해야 한다.
- 컴포넌트 밖으로 이동시킴으로써 반응하지 않고 리렌더링 시에도 변경되지 않음을 증명할 수 있다.

## To change the dependencies, change the code

- 의존성을 변경하려면 코드를 변경해야 한다.

1. 먼저 Effect의 코드 또는 반응형 값 선언 방식을 **변경** 한다.
2. 그런 다음, **변경한 코드에 맞게** 의존성을 조정한다.
3. 의존성 목록이 마음에 들지 않으면 **첫 번째 단계로 돌아가서** 코드를 다시 변경한다.

<br />

- 의존성 목록은 Effect의 코드에서 사용하는 모든 반응형 값의 목록이라고 생각하면 된다.

## Removing unnecessary dependencies

- 다른 조건에서 Effect의 다른 부분을 다시 실행하고 싶을 수도 있다.
- 일부 의존성의 변경에 "반응"하지 않고 "최신 값"만 일고 싶을 수도 있다.
- 의존성은 객체나 함수이기 때문에 의도치 않게 너무 자주 변경될 수 있다.

## Is your Effect doing several unrelated things?

- 스스로에게 물어봐야 할 질문은 Effect가 서로 관련이 없는 여러 가지 작업을 수행하고 있는지 여부이다.
  - 두 개의 개별 Effect에 두 개의 개별 의존성 목록이 있으면 의도치 않게 서로 촉발하지 않는다.
- Effect를 분할하는 것은 길어질 수 있지만 정확하다.
  - 각 Effect는 독립적인 동기화 프로세스를 나타내야 한다.
  - Effect를 삭제해도 다른 Effect의 로직이 깨지지 않는다.

## Are you reading some state to calculate the next state?

- Effect 내에서 state 값을 읽지 말고, 업데이터 함수를 전달하라.

```jsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on('message', (receivedMessage) => {
      setMessages(msgs => [...msgs, receivedMessage]);
    });
    return () => connection.disconnect();
  }, [roomId]); // ✅ All dependencies declared
  // ...
```

# 이 섹션에서는 아직 안정된 버전의 React로 출시되지 않은 실험적인 API에 대해 설명한다.

## Do you want to read a value without “reacting” to its changes?

- Effect Event를 사용하면 Effect를 반응형 부분과 비반응형 부분으로 나눌 수 있다.

## Separating reactive and non\-reactive code

- 반응형 코드와 비반응형 코드를 `useEffectEvent`를 사용해서 분리하기

```jsx
function Chat({ roomId, notificationCount }) {
  const onVisit = useEffectEvent((visitedRoomId) => {
    logVisit(visitedRoomId, notificationCount);
  });

  useEffect(() => {
    onVisit(roomId);
  }, [roomId]); // ✅ All dependencies declared
  // ...
}
```

## Does some reactive value change unintentionally?

- 객체 및 함수 의존성으로 인해 Effect가 필요 이상으로 자주 재동기화될 수 있다.
- 가능하면 객체와 함수를 Effect의 의존성으로 사용하지 않는 것이 좋다.
  - 대신 컴포넌트 외부나 Effect 내부로 이동하거나 원시 값을 추출해 봐라.

## Move static objects and functions outside your component

- 정적 객체와 함수를 컴포넌트 외부로 이동하면 린터에게 반응할 필요가 없다는 것을 증명할 수 있다.

## Calculate primitive values from functions

- 의존성을 만들지 않으려면 Effect 외부에서 호출하면 된다.
- 이렇게 하면 객체가 아니며 Effect 내부에서 읽을 수 있는 값을 얻을 수 있다.

```jsx
function ChatRoom({ getOptions }) {
  const [message, setMessage] = useState('');

  const { roomId, serverUrl } = getOptions();
  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]); // ✅ All dependencies declared
  // ...
```
