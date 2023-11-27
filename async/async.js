// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {//async -> 자동적으로 promise 변환
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();//비동기처리X-> 한줄 한줄씩 -> 오래 
  user.then(console.log);
  console.log(user);
  
  // 2. await ✨
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);//2초 기다렸다 사과 return한다. 동기적이다
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {//이것보다 useful API에 나온 방법 사용한다
    const applePromise = getApple();//promise가 바로 실행 됨
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>//병렬적으로 다 받을
    //때 까지 기다린다
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);//promise중 가장 먼저
    //값 return 되는 거 나온다
  }
  
  pickOnlyOne().then(console.log);