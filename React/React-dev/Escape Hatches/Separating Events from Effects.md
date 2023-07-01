# Separating Events from Effects

- 이벤트 핸들러는 같은 상호 작용을 다시 수행할 때만 다시 실행한다.
- Effect는 prop 또는 state 변수와 같은 일부 값을 마지막 렌더링 때와 다른 값으로 읽게 되면 다시 동기화 된다.

## Event handlers run in response to specific interactions

- 사용자 관점에서 메시지를 보내는 것은 특정 "전송" 버튼을 클릭했기 때문에 발생되어야 한다.
- 메시지가 다른 시간이나 다른 이유로 보내져서는 안된다. 이것이 전송 버튼이 핸들러여야 하는 이유이다.

## Effects run whenever synchronization is needed

- 채팅방에 연결한 상태로 유지하는 것은 특정 상호 작용이 아니다.
- 앱의 초기 화면이 채팅방 컴포넌트이고, 사용자가 어떤 상호작용도 수행하지 않았더라도 여전히 채팅 서버에 연결되어 있어야한다. 이것이 Effect인 이유이다.

## Reactive values and reactive logic

- 직관적으로, 이벤트 핸들러는 버튼을 클릭하는 등 항상 "수동"으로 촉발시킨다고 말할 수 있다.
- 반면에 Effect는 "자동"으로 동기화 상태를 유지하는 데 필요한 만큼 자주 다시 실행된다.

<br />

- **이벤트 핸들러 내부의 로직은 반응형이 아니다.** 사용자가 동일한 상호작용을 다시 수행하지 않는 한 다시 실해되지는 않는다. 이벤트 핸들러는 변경에 "반응"하지 않고 반응형 값을 읽을 수 있다.
- **Effect 내부의 로직은 반응형이다.** Effect에서 반응형 값을 읽는 경우 의존성으로 지정해야한다. 그런 다음 리렌더링으로 인해 해당 값이 변경되면 React는 새 값으로 Effect의 로직을 다시 실행한다.

# 이 섹션에서는 아직 안정된 버전의 React로 출시되지 않은 실험적인 API에 대해 설명한다.

## Declaring an Effect Event

- 비반응형 로직을 Effect에서 추출하려면 `useEffectEvent`라는 특수한 Hook을 사용한다.

```jsx
function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ All dependencies declared
  // ...
```

- Effect Event는 이벤트 핸들러와 매우 유사하다고 생각할 수 있다. 가장 큰 차이점은 이벤트 핸들러는 사용자 상호작용에 대한 응답으로 실행되는 반면, Effect Event는 Effect에서 사용자가 촉발한다는 점이다.
- Effect Event를 사용하면 Effect의 반응성과 반응형으로 동작해서는 안 되는 코드 사이의 "사슬을 끊을 수 있다.

## Limitations of Effect Events

- Effect 내부에서만 호출할 수 있다.
- 다른 컴포넌트나 Hook에 전달해서는 안된다.

<br />

- 항상 Effect Event를 사용하는 Effect 바로 옆에 Effect Event를 선언해야 한다.
- Effect Event는 Effect 코드의 비반응형 "조각"이다. Effect Event는 이를 사용하는 Effect 옆에 있어야 한다.
