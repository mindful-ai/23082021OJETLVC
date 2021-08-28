define([
  "ojs/ojcorerouter",
  "ojs/ojmodulerouter-adapter",
  "ojs/ojknockoutrouteradapter",
  "ojs/ojurlparamadapter",
  "ojs/ojarraydataprovider",
  "knockout",
  "ojs/ojbootstrap",
  "ojs/ojknockout",
  "ojs/ojnavigationlist",
  "ojs/ojbutton",
  "ojs/ojmodule-element"
], function(
  CoreRouter,
  ModuleRouterAdapter,
  KnockoutRouterAdapter,
  UrlParamAdapter,
  ArrayDataProvider,
  ko,
  Bootstrap
) {
    function mainViewModel() {  

    this.viewModel = "mainViewModel";
    this.loggedIn  = ko.observable(false);

    

    // Define the routes

    var routes = [
        { path: "", redirect: "login" }, // Default route redirects to 'dashboard'
        { path: "home", detail: { label: "Home" } },
        { path: "products", detail: { label: "Products" } },
        { path: "contacts", detail: { label: "Contacts" } },
        { path: "login", detail: { label: "Login" } }

    ];

    // Create ADP with partial array, excluding first redirect route
    this.dataProvider = new ArrayDataProvider(routes.slice(1), {
          keyAttributes: "path"
    });

    // Create the router with the routes
    var router = new CoreRouter(routes, {
          urlAdapter: new UrlParamAdapter()
    });

    // Create an observable to react to the current router state path
    //this.koRouterAdapter = new KnockoutRouterAdapter(router);
    this.selection = new KnockoutRouterAdapter(router);

    // Create the module adaptor
    this.moduleAdapter = new ModuleRouterAdapter(router);

    // Synchronize the router, causing it to go to its default route
    router.sync();

    this.login = function(){
      this.loggedIn(true);
      //ko.postbox.publish("loggedIn", true );
    }

    this.logout = function(){
      this.loggedIn(false);
      //ko.postbox.publish("loggedIn", false );
    }

  }

  return new mainViewModel();

  });