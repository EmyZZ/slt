///// KO-OnsenUI """bindings"""
document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.data && page.data.viewModel) {
    // Shortcut for ons-navigator
    ko.applyBindings(page.data.viewModel, page);
  } else {
    // Everything else by ID
    var viewModel = page.id.charAt(0).toUpperCase() + (page.id.split('-')[0] || '').slice(1) + 'ViewModel';
    if (window[viewModel]) {
      ko.applyBindings(new window[viewModel](), event.target);
    }
  }
});
///////////////////////////////

// Item model
function ListItem(content) {
  var self = this;
  self.content = content;
}
// Details page view model
function DetailsViewModel(item) {
  var self = this;
  self.item = item;
}
// List page view model
function ListViewModel() {
  var self = this;

  self.items = ko.observableArray([]);
  for(var i = 0; i < 6; i++) {
    self.items.push(new ListItem("Item " + i));
  }

  self.addItem = function() {
    self.items.push(new ListItem('Item ' + self.items().length));
  };

  self.removeItem = function() {
    self.items.remove(this);
  };

  self.detailsItem = function() {
    document.querySelector('ons-navigator')
      .pushPage('details.html', {
        data: { viewModel: new DetailsViewModel(this) }
      });
  };
}

// Settings page view model
function SettingsViewModel() {
  var self = this;
  
  self.info = 'More stuff';
}