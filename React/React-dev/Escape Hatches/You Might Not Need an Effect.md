# You Might Not Need an Effect

- Effect는 React 패러다임에서 벗어날 수 있는 탈출구이다.
- 컴포넌트를 React가 아닌 위젯, 네트워크 또는 브라우저 DOM과 같은 외부 시스템과 동기화할 수 있다.
- 외부 시스템이 관여하지 않는 경우에는 Effect가 필요하지 않다.
- **불필요한 Effect를 제거하면 코드를 더 쉽게 따라갈 수 있고, 실행 속도가 빨라지며 오류 발생 가능성이 줄어든다.**

## How to remove unnecessary Effects

- **렌더링을 위해 데이터를 변환하는 경우 Effect는 필요하디 않다.**
    - 불필요한 렌더링을 피하려면 모든 데이터 변환을 컴포넌트의 최상위 레벨에서 하는 것이 좋다.
    - 그러면 props나 state가 변경될 때마다 해당 코드가 자동으로 다시 실행된다.

<br />

- **사용자 이벤트를 처리하는 데에 Effect는 필요하지 않다.**
    - 이벤트 핸들러에서 정확히 어떤 일이 일어났는지 알 수 있어서 사용자 이벤트를 해당 이벤트 핸들러에서 처리하라.

## Updating state based on props or state
- **기존 props나 state에서 계산할 수 있는 것이 있으면 state에 넣지말아라. 대신 렌더링 중에 계산해라**
    - 코드가 빨라지고, 간결해지고 오류가 덜 발생한다.

## Caching expensive calculations

- 값비싼 계산을 `useMemo` 훅으로 감싸서 캐시할 수 있다.

#### Deep Dive

**계산이 비싼지 알 수 있는 방법**

- 콘솔 로그를 추가하여 코드에 소요된 시간을 측정할 수 있다.

```jsx
console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array');
```

- 기록된 시간이 상당하다면(예: 1ms 이상) 계산을 메모해 두는 것이 좋을 수 있다.
- 정확한 타이밍을 얻으려면 사용 앱으로 빌드하고 사용자가 사용하는 것과 동일한 기기에서 테스트 해라.

## Resetting all state when a prop changes

- props에 변화에 따라 state를 지워야 하래 바깥쪽 컴포넌트에서 안쪽 컴포넌트로 `key` 속성을 전달해라.
    - `key`로 state를 공유하지 않는 별개의 컴포넌트들로 취금하도록 React에게 요청하는 것이다.

## Adjusting some state when a prop changes

- prop이 변경될 때 state의 전체가 아닌 일부만 재설정하거나 조정하고 싶을 때 Effect를 사용하지말고 state를 직접 조정할 수 있다.
    - 자식들을 렌더링하거나 DOM을 업데이트하지 않았기 때문에, `List`의 자식들은 기존 `selection` 값에 대란 렌더링을 건너뛰게 된다.

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

- 렌더링 중에 모두 계산할 수 있는지 확인하고 선택한 item의 ID를 저장할 수 있다.

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // ✅ Best: Calculate everything during rendering
  const selection = items.find(item => item.id === selectedId) ?? null;
  // ...
}
```

## Initializing the application

- 컴포넌트는 다시 마운트될 때 복원력이 있어야 한다.
- 일부 로직이 컴포넌트 마운트당 한 번이 아니라 앱 로드당 한 번 실행되어야 하는 경우, 최상위 변수를 추가하여 이미 실행되었는지 여부를 추적할 수 있다.

```jsx
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}
```

<br />

- 모듈 초기화 중이나 앱 렌더링 전에 실행할 수도 있다.
    - 임이의 컴포넌트를 임포트할 때 속도 저하나 예상치 못한 동작을 방지하려면 이 패턴을 과도하게 사용해서는 안된다.
    - 앱 전체 초기화 로직은 `App.js`와 같은 루트 컴포넌트 모듈이나 애플리케이션의 엔트리 포인트에 유지해야한다.
```jsx
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

## Fetching data

- API가 도착하는 순서에 따라서 결과가 다르게 표시될 수 있다. (경쟁 조건)
- 경쟁 조건을 수정하기 위해서는 오래된 응답을 무시하도록 클린업 함수를 추가해야 한다.

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```