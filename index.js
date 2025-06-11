const divide = function(a, b) {
    return a / b;
  };
  
  const square = x => x ** 2;
  
  
  const add = (a, b) => {
    return a + b;
  };
  
  
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(n => n * 2);

  const shout = word => word.toUpperCase();
  
  const logAndSquare = (num) => {
    console.log("Squaring:", num);
    return num * num;
  };
  
  const overdueTodoItems = [
    { className: "pending" },
    { className: "pending" },
    { className: "pending" }
  ];
  
  const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });
  
  const lapsedUserAccounts = [
    { address: "user1@example.com" },
    { address: "user2@example.com" }
  ];
  
  const sendBillTo = address => console.log(`Billing sent to ${address}`);
  lapsedUserAccounts.map(user => sendBillTo(user.address));
  