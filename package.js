Package.describe({
	summary: "Parsley.js packaged for MiB3"
});

Package.on_use(function (api){
    api.use('jquery');
	api.add_files(['parsley.min.js', 'parsley.extend.min.js'], 'client');
});
