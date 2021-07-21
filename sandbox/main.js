state.customers = [
  {
    name: 'SmartOSC',
    address: 'Hanoi',
    occupation: 'Dev',
    income: 100000,
    id: 1,
  },
];

Sandbox.define('/rest/customer', 'OPTIONS', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
});

Sandbox.define('/rest/customer', 'GET', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(state.customers);
});

Sandbox.define('/rest/customer', 'POST', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var newCustomer = req.body;
  if (!state.customers.length) {
    newCustomer.id = 1;
  } else {
    var lastCustomer = state.customers[state.customers.length - 1];
    var newId = lastCustomer.id + 1;
    newCustomer.id = newId;
  }

  state.customers.push(newCustomer);

  res.send(newCustomer);
});

Sandbox.define('/rest/customer/{id}', 'PUT', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var customerId = parseInt(req.params.id);
  var newList = state.customers.map(function (customer) {
    if (customer.id !== customerId) return customer;
    var newCustomer = req.body;
    newCustomer.id = customerId;

    return req.body;
  });

  state.customers = newList;

  res.send(newList);
});

Sandbox.define('/rest/customer/{id}', 'OPTIONS', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
});

Sandbox.define('/rest/customer/{id}', 'GET', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  var list = state.customers;
  var selectedCustomer = list.filter(function (customer) {
    return customer.id === parseInt(req.params.id);
  });

  res.send(selectedCustomer[0]);
});

Sandbox.define('/rest/customer/{id}', 'DELETE', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var newList = state.customers.filter(function (customer) {
    return customer.id !== parseInt(req.params.id);
  });

  state.customers = newList;

  res.send('Success');
});
