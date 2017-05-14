///// KO-OnsenUI """bindings"""
document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.data && page.data.viewModel) {
    // Shortcut for ons-navigator
    ko.applyBindings(page.data.viewModel, page);
  } else {
    // Everything else by ID
    var viewModel = "Lottery" + page.id.charAt(0).toUpperCase() + (page.id.split('-')[0] || '').slice(1) + 'ViewModel';
    console.log(viewModel);
    if (window[viewModel]) {
      ko.applyBindings(new window[viewModel](), event.target);
    }
  }
});
///////////////////////////////

// Item model
function LotteryListItem(lotteryName, bgUrl, price, announceDate) {
  var self = this;
  self.lotteryName = lotteryName;
  self.bgUrl = bgUrl;
  self.price = price;
  self.announceDate = announceDate;
  
  // content
  self.update = function() {
      self.content = self.lotteryName + " $" + self.price;
  }
  
  self.update();
}

// Details page view model
function LotteryDetailsViewModel(item) {
  var self = this;
  self.item = item;
}

// List page view model
function LotteryListViewModel() {
  var self = this;

  // Initial dat
  self.items = ko.observableArray([]);
  self.items.push(new LotteryListItem("Powerball", null, "180M", null));
  self.items.push(new LotteryListItem("Mega", null, "40M", null));
  self.items.push(new LotteryListItem("JumboLot", null, "1000M", null));

  self.addItem = function() {
    self.items.push(new LotteryListItem('Item ' + self.items().length));
  };

  self.removeItem = function() {
    self.items.remove(this);
  };

  self.detailsItem = function() {
    document.querySelector('ons-navigator')
      .pushPage('details.html', {
        data: { viewModel: new LotteryDetailsViewModel(this) }
      });
  };
}

// Settings page view model
function SettingsViewModel() {
  var self = this;
  
  self.info = 'More stuff';
}