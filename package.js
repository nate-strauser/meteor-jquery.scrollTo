Package.describe({
    summary: "jquery.scrollTo pacakged for meteor"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files("lib/jquery.scrollTo/jquery.scrollTo.js", "client", {bare:true});
});
