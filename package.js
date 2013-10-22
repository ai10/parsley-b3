Package.describe({
	summary: "Latest version of Parsley.js packaged for meteor"
});

Package.on_use(function (api){
    api.use('jquery');
	api.add_files('parsley.js', 'client');
});
