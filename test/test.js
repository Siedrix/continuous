var request = require('supertest');

var app = require('../server');

describe('Requests', function(){
	it('GET / should return "Redeploy!"', function(done){
		request(app)
		.get('/')
		.expect('Hello world!')
		.end(function(err){
			if (err){ return done(err); }

			done();
		});
	});

	it('GET /foo should return "/foo"', function(done){
		request(app)
		.get('/foo')
		.expect('/foo')
		.end(function(err){
			if (err){ return done(err); }

			done();
		});
	});

	it('GET /foo shouldn\'t return "/bar"', function(done){
		request(app)
		.get('/foo')
		.end(function(err, res){
			if (err){ return done(err); }

			if (res.body === '/bar'){
				done('shouldn\'t return bar');
			}else{
				done();
			}
		});
	});
});